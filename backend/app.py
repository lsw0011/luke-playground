from typing import Dict
from flask import Flask, send_from_directory, render_template_string, make_response, request
from flask import json
from flask.helpers import make_response
from flask.json import jsonify
from flask.templating import render_template, render_template_string
from flask.wrappers import Response


app = Flask(__name__)

# @app.route("/")
# def build_cors_preflight_response():
    # print(request)
    # response = make_response()
    # response.headers.add("Access-Control-Allow-Origin", "*")
    # response.headers.add("Access-Control-Allow-Headers", "*")
    # response.headers.add("Access-Control-Allow-Methods", "*")

@app.route('/path')
def path(): 
    response = make_response(jsonify(dict(status = "ok", data = dict(message = "path") )))
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "*")
    response.headers.add("Access-Control-Allow-Methods", "*")
    response.headers.add("content-type", "application/json")
    return response


@app.route('/')
def home(): 
    response = make_response(jsonify(dict(status = "ok", data = dict(message = "home") )))
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "*")
    response.headers.add("Access-Control-Allow-Methods", "*")
    response.headers.add("content-type", "application/json")
    return response



