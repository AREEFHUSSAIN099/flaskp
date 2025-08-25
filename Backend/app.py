from  flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/submit", methods=["POST"])
def submit():
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    age = data.get("age")

    return jsonify({
        "message": f"Hello {name}! Your email is {email} and your age is {age}. Form submitted successfully."
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
