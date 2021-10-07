import * as React from 'react'
import { createStore } from 'redux';
import Child from './surveyChildren/child';

const surveyReducer = (state = '', action) => {
    switch (action.type) {
        case 'inc':
            state = action.text
            return state
        default:
            return state
    }
}

let store = createStore(surveyReducer)

export { store }

store.dispatch({type: 'inc', state: 'balls'})

console.log(store.getState())

const surveys = () => {

    const [data, setData] = React.useState('no name');


    React.useEffect(() => {
        fetch('http://localhost:1111/surveys')
            .then(res => res.json())
            .then(res => setData(res.data.name))
    }, [])



    return <Child />
}

export default surveys