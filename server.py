from flask import Flask, jsonify
from flask_cors import CORS
import http

from function.conversion import Conversion

app = Flask(__name__)
CORS(app)

def get_response(data):
    if data is None:
        return jsonify(dict(message='error getting data')), http.HTTPStatus.NOT_FOUND
    else: 
        return jsonify(data)



@app.route("/api/conversion/romanTOarabic/<input>")
def romanTOarabic(input):
    return get_response(Conversion(input).RomanToArabic())


if __name__ == "__main__":
    app.run(debug=True)