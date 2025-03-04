from flask import Flask, jsonify

app = Flask(__name__)

# sample data to start

todos = [
    {"id": 1, "task": "Grocery shopping", "completed": False},
    {"id": 2, "task": "Walk the dog", "completed": False},
]

# API route to get todos
@app.route("/todos", methods=["GET"])
def get_todos():
    return jsonify(todos)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')