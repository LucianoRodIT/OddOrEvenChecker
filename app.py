from flask import Flask, render_template, request, jsonify

app = Flask(__name__, static_url_path='/static')

def OddOrEven(n):
    if n.isdigit():
        n = int(n)
        if n <= 1000:
            if n % 2 == 0:
                return " it's even"
            else:
                return " it's odd"
        else:
            return f"Please enter a number from 1 to 1000."
    else:
        return " is not an integer"

@app.route("/", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        number = request.form["number"]
        result = OddOrEven(number)
        return jsonify({"number": number, "result": result})
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
