import * as React from 'react'; 
import { createStore } from 'redux'


const counterReducer = (state = { value: 0 }, action) => {
    switch (action.type) {
        case 'up':
            return { value: state.value + 1 }
        case 'down':
            return { value: state.value - 1 }
        default:
            return state
    }
}



const App = () => {

    let store = createStore(counterReducer)
    store.subscribe(() => console.log(store.getState()))
    


    const up = () => {
        store.dispatch({ type: 'up' })
    }

    const down = () => {
        store.dispatch({ type: 'down' })
    }


    return (
        <>
            <div onClick={() => up()}>up</div>
            <div onClick={() => down()}>down</div>
        </>
    )

    
}

export default App;

