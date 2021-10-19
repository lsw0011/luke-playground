import * as React from 'react'; 

const App = () => {

    const testDict = {a:{b:{c:{d: ['e','f','g']}}}};
    const [field, setField] = React.useState('initial');
    const [value, setValue] = React.useState('state');
    const [backendField, setBackendField] = React.useState('');
    const [backendValue, setBackendValue] = React.useState('');

    const send = () => {
        fetch('http://localhost:1113/', { headers: {'content-type':'application/json'}, method: 'post', body: JSON.stringify(testDict)})
            .then(response => response.json())
            .then(res => console.log(res))
    }    

    return (
        <>
            <div>Hey</div>
            <input value={field} onChange={(e) => setField(e.target.value)} />
            <input value={value} onChange={(e) => setValue(e.target.value)}/>
            <button onClick={send}>Submit</button>
            <div> field = {field} </div>
            <div> value = {value} </div>
        </>
    )
}

export default App;

