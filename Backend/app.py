from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow requests from frontend (like React/Express frontend)

# Root route - just for testing in browser
@app.route('/')
def home():
    return jsonify({"message": "Flask backend is running successfully!"})

# Example GET route
@app.route('/api/data', methods=['GET'])
def get_data():
    sample_data = {"name": "tute", "type": "edu", "language": "Python"}
    return jsonify(sample_data)

# Example POST route (custom form handler)
@app.route('/submit', methods=['POST'])
def submit():
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    age = data.get("age")

    return jsonify({
        "message": f"Hello {name}! Your email is {email} and your age is {age}. Form submitted successfully."
    })

if __name__ == '__main__':
    # Listen on all interfaces (important for AWS/Docker)
    app.run(host='0.0.0.0', port=5000)
