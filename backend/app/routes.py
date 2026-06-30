"""
Core API endpoints: searching routes, viewing route details, and submitting
crowdsourced corrections.

All endpoints are prefixed with /api (see app/__init__.py).
"""
from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app import db
from app.models import Route, Stop, Fare, Submission

bp = Blueprint("routes", __name__)


@bp.route("/routes", methods=["GET"])
def search_routes():
    """
    Search routes by origin or destination.
    Example: GET /api/routes?query=rongai
    Returns all routes if no query is given.
    """
    query = request.args.get("query", "").strip().lower()

    routes_query = Route.query
    if query:
        routes_query = routes_query.filter(
            db.or_(
                Route.origin.ilike(f"%{query}%"),
                Route.destination.ilike(f"%{query}%"),
                Route.name.ilike(f"%{query}%"),
            )
        )

    routes = routes_query.all()
    return jsonify([_route_to_dict(r) for r in routes]), 200


@bp.route("/routes/<int:route_id>", methods=["GET"])
def get_route(route_id):
    """Full detail for one route: stops (for the map) and fare info."""
    route = Route.query.get_or_404(route_id)
    return jsonify(_route_to_dict(route, include_stops=True)), 200


@bp.route("/submissions", methods=["POST"])
@jwt_required()
def create_submission():
    """
    Submit a correction or addition. Body example:
    {
      "submission_type": "fare",
      "payload": { "route_id": 1, "min_fare": 50, "max_fare": 80 }
    }
    Stored as 'pending' until an admin approves or rejects it.
    """
    user_id = get_jwt_identity()
    data = request.get_json()

    if not data or "submission_type" not in data or "payload" not in data:
        return jsonify({"error": "submission_type and payload are required"}), 400

    submission = Submission(
        user_id=user_id,
        submission_type=data["submission_type"],
        payload=data["payload"],
    )
    db.session.add(submission)
    db.session.commit()

    return jsonify({"message": "Submission received, pending review", "id": submission.id}), 201


@bp.route("/admin/submissions", methods=["GET"])
@jwt_required()
def list_pending_submissions():
    """Admin-only: list all pending submissions for review."""
    # NOTE: in a later task, add an is_admin check here using get_jwt_identity()
    # and looking up the user, returning 403 if not an admin.
    pending = Submission.query.filter_by(status="pending").all()
    return jsonify([_submission_to_dict(s) for s in pending]), 200


@bp.route("/admin/submissions/<int:submission_id>/review", methods=["POST"])
@jwt_required()
def review_submission(submission_id):
    """
    Admin-only: approve or reject a submission.
    Body: { "decision": "approved" }  or  { "decision": "rejected" }
    """
    data = request.get_json()
    decision = data.get("decision") if data else None

    if decision not in ("approved", "rejected"):
        return jsonify({"error": "decision must be 'approved' or 'rejected'"}), 400

    submission = Submission.query.get_or_404(submission_id)
    submission.status = decision
    db.session.commit()

    # TODO (Week 11): if approved, apply the payload to the actual Route/Stop/Fare tables

    return jsonify({"message": f"Submission {decision}"}), 200


# --- Helpers ---

def _route_to_dict(route, include_stops=False):
    data = {
        "id": route.id,
        "name": route.name,
        "origin": route.origin,
        "destination": route.destination,
        "operating_hours": route.operating_hours,
        "verified": route.verified,
        "fares": [
            {"min_fare": f.min_fare, "max_fare": f.max_fare, "time_of_day": f.time_of_day}
            for f in route.fares
        ],
    }
    if include_stops:
        data["stops"] = [
            {"id": s.id, "name": s.name, "latitude": s.latitude, "longitude": s.longitude, "sequence": s.sequence}
            for s in route.stops
        ]
    return data


def _submission_to_dict(submission):
    return {
        "id": submission.id,
        "user_id": submission.user_id,
        "submission_type": submission.submission_type,
        "payload": submission.payload,
        "status": submission.status,
        "created_at": submission.created_at.isoformat(),
    }
