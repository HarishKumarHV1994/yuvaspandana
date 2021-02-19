from bottle import *
#from pymongo import MongoClient
#from bson.json_util import dumps
from datetime import datetime
import time
import json
import os

from config_vars import *
#from all_functions import *
#from offline_functions import *
from ys_data_json import *

app = Bottle(__name__)

#client = MongoClient(MONGODB_URI)
#db = client.cas


@route('/hello/<name>')
def index(name):
    return template('<b>Hello {{name}}</b>!', name=name)


@route('/yuvaspandana')
def ncd_yuvaspandana():
	data = get_ys_json()
	return template('templates/assessment_ys_home.tpl', data=data)


@route('/<filename:re:.*\.*>')
def javascripts(filename):
    return static_file(filename, root='static')

@hook('after_request')
def enable_cors():
	response.headers['Access-Control-Allow-Origin'] = '*'
	response.headers['Access-Control-Allow-Methods'] = 'PUT, GET, POST, DELETE, OPTIONS'
	response.headers['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token'

run(host='localhost', port=8080)