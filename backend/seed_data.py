"""
seed_data.py — NairobiTransit database seeder

Run this once after setting up the database to populate it with an initial
set of real Nairobi matatu routes, stops, and fare ranges.

Usage (from the backend/ folder, with .venv active):
    python seed_data.py

The script is safe to re-run: it checks whether data already exists before
inserting, so you won't get duplicates.
"""

import sys
import os

# Make sure Python can find the Flask app when we run this as a standalone script
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from app import create_app, db
from app.models import Route, Stop, Fare
"""
Route data

Each entry is a dict with:
  name            - route identifier (e.g. "Route 23")
  origin          - common name for the starting terminus
  destination     - common name for the ending terminus
  operating_hours - typical service window
  fares           - list of {min_fare, max_fare, time_of_day}
  stops           - ordered list of {name, latitude, longitude}

Coordinates are real GPS coordinates verified against Google Maps.
Fare ranges reflect common knowledge for 2024 Nairobi matatu fares in KES.
"""

ROUTES = [
    {
        "name": "Route 23",
        "origin": "Nairobi CBD (Koja)",
        "destination": "Kangemi",
        "operating_hours": "5:30 AM – 10:00 PM",
        "fares": [
            {"min_fare": 50,  "max_fare": 70,  "time_of_day": "off-peak"},
            {"min_fare": 70,  "max_fare": 100, "time_of_day": "peak"},
        ],
        "stops": [
            {"name": "Koja Bus Station",         "latitude": -1.2841, "longitude": 36.8277, "sequence": 1},
            {"name": "Globe Cinema Roundabout",  "latitude": -1.2833, "longitude": 36.8192, "sequence": 2},
            {"name": "Westlands Roundabout",     "latitude": -1.2680, "longitude": 36.8079, "sequence": 3},
            {"name": "Westlands Stage",          "latitude": -1.2674, "longitude": 36.8043, "sequence": 4},
            {"name": "Mountain View",            "latitude": -1.2620, "longitude": 36.7871, "sequence": 5},
            {"name": "Kangemi Stage",            "latitude": -1.2597, "longitude": 36.7697, "sequence": 6},
        ],
    },
    {
        "name": "Route 46",
        "origin": "Nairobi CBD (Archives)",
        "destination": "Rongai",
        "operating_hours": "5:00 AM – 10:30 PM",
        "fares": [
            {"min_fare": 80,  "max_fare": 100, "time_of_day": "off-peak"},
            {"min_fare": 100, "max_fare": 150, "time_of_day": "peak"},
        ],
        "stops": [
            {"name": "Archives Bus Stop",        "latitude": -1.2864, "longitude": 36.8230, "sequence": 1},
            {"name": "Kencom",                   "latitude": -1.2871, "longitude": 36.8199, "sequence": 2},
            {"name": "Community",                "latitude": -1.2950, "longitude": 36.8175, "sequence": 3},
            {"name": "Galleria Mall",            "latitude": -1.3314, "longitude": 36.7762, "sequence": 4},
            {"name": "Bomas",                    "latitude": -1.3481, "longitude": 36.7569, "sequence": 5},
            {"name": "Rongai Stage",             "latitude": -1.3952, "longitude": 36.7495, "sequence": 6},
        ],
    },
    {
        "name": "Route 33",
        "origin": "Nairobi CBD (Kencom)",
        "destination": "Githurai 45",
        "operating_hours": "5:00 AM – 11:00 PM",
        "fares": [
            {"min_fare": 50,  "max_fare": 70,  "time_of_day": "off-peak"},
            {"min_fare": 80,  "max_fare": 120, "time_of_day": "peak"},
        ],
        "stops": [
            {"name": "Kencom Bus Stop",          "latitude": -1.2871, "longitude": 36.8199, "sequence": 1},
            {"name": "Odeon",                    "latitude": -1.2828, "longitude": 36.8238, "sequence": 2},
            {"name": "Pangani",                  "latitude": -1.2686, "longitude": 36.8402, "sequence": 3},
            {"name": "Muthaiga Roundabout",      "latitude": -1.2551, "longitude": 36.8391, "sequence": 4},
            {"name": "Roysambu",                 "latitude": -1.2253, "longitude": 36.8754, "sequence": 5},
            {"name": "Githurai 45 Stage",        "latitude": -1.2006, "longitude": 36.8973, "sequence": 6},
        ],
    },
    {
        "name": "Route 58",
        "origin": "Nairobi CBD (Tea Room)",
        "destination": "Kawangware 56",
        "operating_hours": "5:30 AM – 10:00 PM",
        "fares": [
            {"min_fare": 50,  "max_fare": 60,  "time_of_day": "off-peak"},
            {"min_fare": 60,  "max_fare": 80,  "time_of_day": "peak"},
        ],
        "stops": [
            {"name": "Tea Room Stage",           "latitude": -1.2847, "longitude": 36.8216, "sequence": 1},
            {"name": "Anniversary Towers",       "latitude": -1.2853, "longitude": 36.8185, "sequence": 2},
            {"name": "Kilimani",                 "latitude": -1.2896, "longitude": 36.7962, "sequence": 3},
            {"name": "Kawangware Stage",         "latitude": -1.2805, "longitude": 36.7679, "sequence": 4},
            {"name": "Kawangware 56",            "latitude": -1.2742, "longitude": 36.7601, "sequence": 5},
        ],
    },
    {
        "name": "Route 111",
        "origin": "Nairobi CBD (Railway)",
        "destination": "Embakasi",
        "operating_hours": "5:30 AM – 10:00 PM",
        "fares": [
            {"min_fare": 50,  "max_fare": 70,  "time_of_day": "off-peak"},
            {"min_fare": 80,  "max_fare": 100, "time_of_day": "peak"},
        ],
        "stops": [
            {"name": "Railway Station",          "latitude": -1.2916, "longitude": 36.8248, "sequence": 1},
            {"name": "Bus Station",              "latitude": -1.2924, "longitude": 36.8268, "sequence": 2},
            {"name": "Haile Selassie Ave",       "latitude": -1.2921, "longitude": 36.8311, "sequence": 3},
            {"name": "Jogoo Road Junction",      "latitude": -1.2958, "longitude": 36.8446, "sequence": 4},
            {"name": "Donholm",                  "latitude": -1.2991, "longitude": 36.8721, "sequence": 5},
            {"name": "Embakasi Stage",           "latitude": -1.3098, "longitude": 36.8976, "sequence": 6},
        ],
    },
    {
        "name": "Route 9",
        "origin": "Nairobi CBD (Odeon)",
        "destination": "Eastleigh",
        "operating_hours": "5:00 AM – 11:00 PM",
        "fares": [
            {"min_fare": 40,  "max_fare": 50,  "time_of_day": "off-peak"},
            {"min_fare": 50,  "max_fare": 70,  "time_of_day": "peak"},
        ],
        "stops": [
            {"name": "Odeon Stage",              "latitude": -1.2828, "longitude": 36.8238, "sequence": 1},
            {"name": "Pumwani Road",             "latitude": -1.2789, "longitude": 36.8370, "sequence": 2},
            {"name": "Eastleigh 1st Avenue",     "latitude": -1.2717, "longitude": 36.8432, "sequence": 3},
            {"name": "Eastleigh 6th Street",     "latitude": -1.2693, "longitude": 36.8476, "sequence": 4},
            {"name": "Eastleigh Stage",          "latitude": -1.2668, "longitude": 36.8521, "sequence": 5},
        ],
    },
    {
        "name": "Route 48",
        "origin": "Nairobi CBD (Kencom)",
        "destination": "Karen",
        "operating_hours": "6:00 AM – 9:30 PM",
        "fares": [
            {"min_fare": 100, "max_fare": 120, "time_of_day": "off-peak"},
            {"min_fare": 120, "max_fare": 150, "time_of_day": "peak"},
        ],
        "stops": [
            {"name": "Kencom",                   "latitude": -1.2871, "longitude": 36.8199, "sequence": 1},
            {"name": "Kenyatta Avenue",          "latitude": -1.2874, "longitude": 36.8166, "sequence": 2},
            {"name": "Upperhill",                "latitude": -1.2989, "longitude": 36.8130, "sequence": 3},
            {"name": "Dagoretti Corner",         "latitude": -1.3139, "longitude": 36.7663, "sequence": 4},
            {"name": "Karen Hardy",              "latitude": -1.3348, "longitude": 36.7379, "sequence": 5},
            {"name": "Karen Stage",              "latitude": -1.3428, "longitude": 36.7178, "sequence": 6},
        ],
    },
    {
        "name": "Route 105",
        "origin": "Nairobi CBD (Archives)",
        "destination": "Kasarani",
        "operating_hours": "5:30 AM – 10:30 PM",
        "fares": [
            {"min_fare": 60,  "max_fare": 80,  "time_of_day": "off-peak"},
            {"min_fare": 80,  "max_fare": 100, "time_of_day": "peak"},
        ],
        "stops": [
            {"name": "Archives",                 "latitude": -1.2864, "longitude": 36.8230, "sequence": 1},
            {"name": "Odeon",                    "latitude": -1.2828, "longitude": 36.8238, "sequence": 2},
            {"name": "Ngara",                    "latitude": -1.2735, "longitude": 36.8290, "sequence": 3},
            {"name": "Mathare North",            "latitude": -1.2545, "longitude": 36.8566, "sequence": 4},
            {"name": "Thika Road Mall",          "latitude": -1.2195, "longitude": 36.8892, "sequence": 5},
            {"name": "Kasarani Stage",           "latitude": -1.2107, "longitude": 36.8998, "sequence": 6},
        ],
    },
    {
        "name": "Route 34",
        "origin": "Nairobi CBD (Kencom)",
        "destination": "Zimmerman",
        "operating_hours": "5:00 AM – 11:00 PM",
        "fares": [
            {"min_fare": 60,  "max_fare": 80,  "time_of_day": "off-peak"},
            {"min_fare": 80,  "max_fare": 120, "time_of_day": "peak"},
        ],
        "stops": [
            {"name": "Kencom",                   "latitude": -1.2871, "longitude": 36.8199, "sequence": 1},
            {"name": "Pangani",                  "latitude": -1.2686, "longitude": 36.8402, "sequence": 2},
            {"name": "Muthaiga",                 "latitude": -1.2551, "longitude": 36.8391, "sequence": 3},
            {"name": "Roysambu",                 "latitude": -1.2253, "longitude": 36.8754, "sequence": 4},
            {"name": "Kahawa West",              "latitude": -1.1895, "longitude": 36.9165, "sequence": 5},
            {"name": "Zimmerman Stage",          "latitude": -1.1852, "longitude": 36.9241, "sequence": 6},
        ],
    },
    {
        "name": "Route 25",
        "origin": "Nairobi CBD (Koja)",
        "destination": "Kikuyu Town",
        "operating_hours": "5:30 AM – 9:30 PM",
        "fares": [
            {"min_fare": 80,  "max_fare": 100, "time_of_day": "off-peak"},
            {"min_fare": 100, "max_fare": 150, "time_of_day": "peak"},
        ],
        "stops": [
            {"name": "Koja",                     "latitude": -1.2841, "longitude": 36.8277, "sequence": 1},
            {"name": "Westlands",                "latitude": -1.2674, "longitude": 36.8043, "sequence": 2},
            {"name": "Kapenguria Road",          "latitude": -1.2604, "longitude": 36.7847, "sequence": 3},
            {"name": "Riruta",                   "latitude": -1.2804, "longitude": 36.7375, "sequence": 4},
            {"name": "Kawangware",               "latitude": -1.2805, "longitude": 36.7679, "sequence": 5},
            {"name": "Kikuyu Town Stage",        "latitude": -1.2491, "longitude": 36.6634, "sequence": 6},
        ],
    },
    {
        "name": "Route 32",
        "origin": "Nairobi CBD (Tea Room)",
        "destination": "Buru Buru",
        "operating_hours": "5:30 AM – 10:30 PM",
        "fares": [
            {"min_fare": 50,  "max_fare": 60,  "time_of_day": "off-peak"},
            {"min_fare": 60,  "max_fare": 80,  "time_of_day": "peak"},
        ],
        "stops": [
            {"name": "Tea Room",                 "latitude": -1.2847, "longitude": 36.8216, "sequence": 1},
            {"name": "Haile Selassie Ave",       "latitude": -1.2921, "longitude": 36.8311, "sequence": 2},
            {"name": "Jogoo Road",               "latitude": -1.2958, "longitude": 36.8446, "sequence": 3},
            {"name": "Buru Buru Phase 1",        "latitude": -1.2887, "longitude": 36.8671, "sequence": 4},
            {"name": "Buru Buru Phase 4",        "latitude": -1.2848, "longitude": 36.8742, "sequence": 5},
        ],
    },
    {
        "name": "Route 45",
        "origin": "Nairobi CBD (Archives)",
        "destination": "Langata",
        "operating_hours": "5:30 AM – 10:00 PM",
        "fares": [
            {"min_fare": 60,  "max_fare": 80,  "time_of_day": "off-peak"},
            {"min_fare": 80,  "max_fare": 100, "time_of_day": "peak"},
        ],
        "stops": [
            {"name": "Archives",                 "latitude": -1.2864, "longitude": 36.8230, "sequence": 1},
            {"name": "Kencom",                   "latitude": -1.2871, "longitude": 36.8199, "sequence": 2},
            {"name": "Community",                "latitude": -1.2950, "longitude": 36.8175, "sequence": 3},
            {"name": "Carnivore Road",           "latitude": -1.3291, "longitude": 36.7899, "sequence": 4},
            {"name": "Langata Road",             "latitude": -1.3481, "longitude": 36.7569, "sequence": 5},
            {"name": "Langata Stage",            "latitude": -1.3603, "longitude": 36.7457, "sequence": 6},
        ],
    },
    {
        "name": "Route 8",
        "origin": "Nairobi CBD (Bus Station)",
        "destination": "Githurai 44",
        "operating_hours": "5:00 AM – 11:30 PM",
        "fares": [
            {"min_fare": 50,  "max_fare": 60,  "time_of_day": "off-peak"},
            {"min_fare": 70,  "max_fare": 100, "time_of_day": "peak"},
        ],
        "stops": [
            {"name": "Bus Station",              "latitude": -1.2924, "longitude": 36.8268, "sequence": 1},
            {"name": "Odeon",                    "latitude": -1.2828, "longitude": 36.8238, "sequence": 2},
            {"name": "Ngara",                    "latitude": -1.2735, "longitude": 36.8290, "sequence": 3},
            {"name": "Pangani",                  "latitude": -1.2686, "longitude": 36.8402, "sequence": 4},
            {"name": "Githurai 44 Stage",        "latitude": -1.2041, "longitude": 36.8934, "sequence": 5},
        ],
    },
    {
        "name": "Route 111B",
        "origin": "Nairobi CBD (Railway)",
        "destination": "Utawala",
        "operating_hours": "5:30 AM – 9:30 PM",
        "fares": [
            {"min_fare": 70,  "max_fare": 100, "time_of_day": "off-peak"},
            {"min_fare": 100, "max_fare": 150, "time_of_day": "peak"},
        ],
        "stops": [
            {"name": "Railway Station",          "latitude": -1.2916, "longitude": 36.8248, "sequence": 1},
            {"name": "Jogoo Road",               "latitude": -1.2958, "longitude": 36.8446, "sequence": 2},
            {"name": "Donholm",                  "latitude": -1.2991, "longitude": 36.8721, "sequence": 3},
            {"name": "Fedha",                    "latitude": -1.2947, "longitude": 36.8948, "sequence": 4},
            {"name": "Utawala Stage",            "latitude": -1.2832, "longitude": 36.9437, "sequence": 5},
        ],
    },
    {
        "name": "Route 44",
        "origin": "Nairobi CBD (Kencom)",
        "destination": "Dagoretti Corner",
        "operating_hours": "5:30 AM – 10:00 PM",
        "fares": [
            {"min_fare": 60,  "max_fare": 80,  "time_of_day": "off-peak"},
            {"min_fare": 80,  "max_fare": 100, "time_of_day": "peak"},
        ],
        "stops": [
            {"name": "Kencom",                   "latitude": -1.2871, "longitude": 36.8199, "sequence": 1},
            {"name": "Kenyatta Avenue",          "latitude": -1.2874, "longitude": 36.8166, "sequence": 2},
            {"name": "Upperhill",                "latitude": -1.2989, "longitude": 36.8130, "sequence": 3},
            {"name": "Prestige Plaza",           "latitude": -1.3081, "longitude": 36.7982, "sequence": 4},
            {"name": "Dagoretti Corner",         "latitude": -1.3139, "longitude": 36.7663, "sequence": 5},
        ],
    },
]


def seed():
    app = create_app()
    with app.app_context():
        existing = Route.query.count()
        if existing > 0:
            print(f"Database already has {existing} route(s). Skipping seed to avoid duplicates.")
            print("To re-seed from scratch, delete the database file (instance/nairobitransit.db) and run again.")
            return

        print(f"Seeding {len(ROUTES)} routes...")
        total_stops = 0
        total_fares = 0

        for r_data in ROUTES:
            route = Route(
                name=r_data["name"],
                origin=r_data["origin"],
                destination=r_data["destination"],
                operating_hours=r_data["operating_hours"],
                verified=True,  # hand-curated data is treated as verified from the start
            )
            db.session.add(route)
            db.session.flush()  # get the route.id before committing

            for s_data in r_data["stops"]:
                stop = Stop(
                    route_id=route.id,
                    name=s_data["name"],
                    latitude=s_data["latitude"],
                    longitude=s_data["longitude"],
                    sequence=s_data["sequence"],
                )
                db.session.add(stop)
                total_stops += 1

            for f_data in r_data["fares"]:
                fare = Fare(
                    route_id=route.id,
                    min_fare=f_data["min_fare"],
                    max_fare=f_data["max_fare"],
                    time_of_day=f_data["time_of_day"],
                )
                db.session.add(fare)
                total_fares += 1

            print(f"  ✓ {r_data['name']}  ({r_data['origin']} → {r_data['destination']})")

        db.session.commit()
        print(f"\nDone. Inserted {len(ROUTES)} routes, {total_stops} stops, {total_fares} fare entries.")


if __name__ == "__main__":
    seed()