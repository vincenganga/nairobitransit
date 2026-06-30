"""
NairobiTransit Flask application factory.
Creates and configures the Flask app, database, and extensions.
"""
from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
import os

db = SQLAlchemy()
jwt = JWTManager()


def create_app():
    app = Flask(__name__)

    # --- Configuration ---
    # For local development we use SQLite; swap to PostgreSQL (Supabase) in production
    # by setting the DATABASE_URL environment variable.
    app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get(
        "DATABASE_URL", "sqlite:///nairobitransit.db"
    )
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["JWT_SECRET_KEY"] = os.environ.get(
        "JWT_SECRET_KEY", "dev-secret-change-this-before-deploying"
    )

    # --- Extensions ---
    db.init_app(app)
    jwt.init_app(app)
    CORS(app)  # allows the React frontend (different port) to call this API

    # --- Blueprints (route groups) ---
    from app.routes import bp as routes_bp
    from app.auth import bp as auth_bp

    app.register_blueprint(routes_bp, url_prefix="/api")
    app.register_blueprint(auth_bp, url_prefix="/api/auth")

    # Create tables if they don't exist yet (fine for dev; we'll use migrations later if needed)
    with app.app_context():
        db.create_all()

    return app
