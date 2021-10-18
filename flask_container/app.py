
from logging import error
from typing import Dict
from flask import Flask, send_from_directory, render_template_string, make_response, request
from flask import json
from flask.helpers import make_response
from flask.json import jsonify
from flask.wrappers import Response

import requests


app = Flask(__name__)


@app.route('/')
def home(): 
    r = requests.get("http://playground:1111").json()
    response = make_response(r)
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "*")
    response.headers.add("Access-Control-Allow-Methods", "*")
    response.headers.add("Referrer-Policy", "unsafe-url")
    response.headers.add("content-type", "application/json")

    return response

@app.route('/test')
def test(): 
    response = make_response(jsonify(dict(status = "ok", data = "test" )))
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "*")
    response.headers.add("Access-Control-Allow-Methods", "*")
    response.headers.add("content-type", "application/json")

    return response


