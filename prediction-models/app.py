from flask import Flask, jsonify, request
from scripts.chd import run_chd_model
from scripts.diabetes import run_diabetes_model

app = Flask(__name__)

@app.route('/')
def home():
   return 'Flask server is working!', 200

@app.route('/diabetes', methods=['POST'])
def run_diabetes():
    try:
        data = request.get_json()
    except:
        response = {
            'success': False,
            'msg': 'Health data missing',
        }
        return jsonify(response), 400
        
    try:
        glucose = data['glucose']
        blood_pressure = data['bloodPressure']
        res = run_diabetes_model(glucose, blood_pressure)
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

@app.route('/coronary-heart-disease', methods=['POST'])
def run_chd():
    try:
        data = request.get_json()
    except:
        response = {
            'success': False,
            'msg': 'Health data missing',
        }
        return jsonify(response), 400
    try:
        res = run_chd_model()
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