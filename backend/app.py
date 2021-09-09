from flask import Flask, send_from_directory, render_template_string, make_response
from flask.helpers import make_response
from flask.json import jsonify
from flask.templating import render_template, render_template_string
from flask.wrappers import Response

app = Flask(__name__)

PATH_TO_TEMPLATES = "/code/frontend"

@app.route("/")
def hello_world():
    return send_from_directory(PATH_TO_TEMPLATES, "index.html")

@app.route("/script.js")
def js():
    return send_from_directory(PATH_TO_TEMPLATES, "script.js")

@app.route("/style.css")
def css():
    return send_from_directory(PATH_TO_TEMPLATES, "style.css")

@app.route("/test")
def test():
    response = Flask.make_response(app,  render_template_string("test"))
    return response