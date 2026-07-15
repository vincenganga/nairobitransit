"""
Authentication endpoints: register and login.
Uses JWT (JSON Web Tokens) so the frontend can stay logged in without
the backend storing sessions.

Note: Werkzeug 3.x defaults to scrypt for password hashing, which requires
Python 3.10+. Since this project uses Python 3.9, we explicitly specify
pbkdf2:sha256, which is equally secure and works on all Python versions.
"""
from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from werkzeug.security import generate_password_hash, check_password_hash
from app import db
from app.models import User

bp = Blueprint("auth", __name__)


@bp.route("/register", methods=["POST"])
def register():
    """
    Body: { "username": "...", "email": "...", "password": "..." }
    """
    data = request.get_json()
    required = ("username", "email", "password")

    if not data or not all(k in data for k in required):
        return jsonify({"error": "username, email, and password are required"}), 400

    if User.query.filter_by(email=data["email"]).first():
        return jsonify({"error": "An account with this email already exists"}), 409

    if User.query.filter_by(username=data["username"]).first():
        return jsonify({"error": "This username is already taken"}), 409

    user = User(
        username=data["username"],
        email=data["email"],
        # Explicitly use pbkdf2:sha256 — scrypt requires Python 3.10+
        password_hash=generate_password_hash(
            data["password"], method="pbkdf2:sha256"
        ),
    )
    db.session.add(user)
    db.session.commit()

    return jsonify({"message": "Account created successfully"}), 201


@bp.route("/login", methods=["POST"])
def login():
    """
    Body: { "email": "...", "password": "..." }
    Returns a JWT access token for use in the Authorization header:
    "Authorization: Bearer <token>"
    """
    data = request.get_json()

    if not data or "email" not in data or "password" not in data:
        return jsonify({"error": "email and password are required"}), 400

    user = User.query.filter_by(email=data["email"]).first()

    if not user or not check_password_hash(user.password_hash, data["password"]):
        return jsonify({"error": "Invalid email or password"}), 401

    access_token = create_access_token(identity=user.id)
    return jsonify({
        "access_token": access_token,
        "username": user.username
    }), 200