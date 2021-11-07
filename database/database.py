from flask import Flask, request
from flask.helpers import make_response
import json
from flask.json import jsonify

import sqlalchemy



app = Flask(__name__)


@app.route('/', methods=["GET", "POST", "OPTIONS"])
def home(): 
    engine = sqlalchemy.create_engine('postgresql://user:root@database_db:5432/database')
    connection = engine.connect()
    request_dict = json.loads(request.get_data().decode('utf-8'))
    print(request_dict.get("first_name"))	
    connection.execute(sqlalchemy.text("insert into users( id, first_name, last_name ) values ( default, :first_name, :last_name)"), first_name=request_dict["first_name"], last_name=request_dict["last_name"])
    print(connection.execute(sqlalchemy.text("select * from users order by id desc")).scalars().all())
    connection.close()
    response = make_response(jsonify(dict(status = "ok", data = "database" )))
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "*")
    response.headers.add("Access-Control-Allow-Methods", "*")
    return response
