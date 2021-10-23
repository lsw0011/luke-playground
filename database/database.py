from flask import Flask, request
from flask.helpers import make_response

from flask.json import jsonify

import sqlalchemy



app = Flask(__name__)


@app.route('/', methods=["GET", "POST", "OPTIONS"])
def home(): 
    # engine = sqlalchemy.create_engine('postgresql://user:root@database_db:5432/database')
    # connection = engine.connect()
    # result = connection.execute(sqlalchemy.text('select * from data'))
    # print(result.fetchone())
    print(request.get_data().decode('utf-8'))
    # connection.close()
    response = make_response(jsonify(dict(status = "ok", data = "database" )))
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "*")
    response.headers.add("Access-Control-Allow-Methods", "*")
    return response