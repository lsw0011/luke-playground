import sys

from requests.api import options

sys.path.insert(1, "./common")
import common.services


from logging import error
from typing import Dict
from flask import Flask, send_from_directory, render_template_string, make_response, request
from flask import json
from flask.helpers import make_response
from flask.json import jsonify
from flask.wrappers import Response

import common.services



app = Flask(__name__)


@app.route("/send_dict", methods=["GET", "POST", "OPTIONS"])
def send_dict(): 
    if(request.method == "OPTIONS"): 
        response = make_response()
    if(request.method == "POST"):
        response = make_response(common.services.post("http://backend:1111/send_dict", request.get_data()))
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "*")
    response.headers.add("Access-Control-Allow-Methods", "*")
    response.headers.add("Referrer-Policy", "unsafe-url")
    response.headers.add("content-type", "application/json")

    return response

@app.route("/debouncer", methods=["GET", "POST", "OPTIONS"])
def debouncer(): 
    response = make_response(jsonify(dict(status = "ok", message = "recieved" )))
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "*")
    response.headers.add("Access-Control-Allow-Methods", "*")
    response.headers.add("content-type", "application/json")

    return response


@app.route("/test")
def test(): 
    response = make_response(jsonify(dict(status = "ok", data = "test" )))
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "*")
    response.headers.add("Access-Control-Allow-Methods", "*")
    response.headers.add("content-type", "application/json")

    return response


