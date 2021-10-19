import requests
import json

def post(endpoint, data=None):
    dataDict = json_data_to_dict(data)
    dataDict['api_key'] = 'backend'
    data = json_dict_to_data(dataDict)
    return requests.post(endpoint, headers={'content-type': 'application/json'}, data=data).json()

def json_data_to_dict(data): 
    decodedData = data.decode('utf-8')
    if(decodedData == ''):
        return dict()
    else: 
        dataDict = json.loads(decodedData)
        return dataDict

def json_dict_to_data(dataDict):
    return json.dumps(dataDict).encode('utf-8')

        

