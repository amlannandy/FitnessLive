from flask import Flask, jsonify
from scripts.diabetes import run_diabetes_model

app = Flask(__name__)

@app.route('/')
def home():
   return 'Flask server is working!', 200

@app.route('/diabetes')
def run_diabetes():
    try:
        res = run_diabetes_model()
        response = {
            'success': True,
            'result': res,
        }
        return jsonify(response), 200
    except:
        response = {
            'success': False,
            'msg': 'Server Error'
        }
        return jsonify(response), 500

@app.route('/coronary-heart-disease')
def run_chd():
   pass

