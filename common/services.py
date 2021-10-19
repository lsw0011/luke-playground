import requests
import json
def post(endpoint, data=None):
    # decodedData = data.decode('utf-8')
    # if(decodedData != ''):
    #     testDict = json.loads(decodedData)
    #     testDict['api_key'] = 'backend'
    #     data = json.dumps(testDict).encode('utf-8')

    backendData = dict(apikey='commander', frontendData=data)
        
    return requests.post(endpoint, headers={'content-type': 'application/json'}, data=backendData).json()