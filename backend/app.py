from typing import Dict
from flask import Flask, send_from_directory, render_template_string, make_response, request
from flask.helpers import make_response
from flask.json import jsonify
from flask.templating import render_template, render_template_string


app = Flask(__name__)

@app.route('/users')
def users(): 
    response = make_response(jsonify(dict(status = "ok", data = dict(name = "users") )))
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "*")
    response.headers.add("Access-Control-Allow-Methods", "*")
    response.headers.add("content-type", "application/json")
    return response


@app.route('/surveys')
def surveys(): 
    response = make_response(jsonify(dict(status = "ok", data = dict(name = "surveys") )))
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "*")
    response.headers.add("Access-Control-Allow-Methods", "*")
    response.headers.add("content-type", "application/json")
    return response


@app.route('/')
def home(): 
    response = make_response(jsonify(dict(status = "ok", data = "home" )))
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "*")
    response.headers.add("Access-Control-Allow-Methods", "*")
    response.headers.add("Referrer-Policy", "unsafe-url")
    response.headers.add("content-type", "application/json")

    return response

