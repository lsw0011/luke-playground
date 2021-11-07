import * as React from 'react'; 

const App = () => {

    const [first, setFirst] = React.useState('first name');
    const [last, setLast] = React.useState('last name');
    const [backendField, setBackendField] = React.useState('');
    const [backendValue, setBackendValue] = React.useState('');

    const send = () => {
        fetch('http://localhost:1113/', { headers: {'content-type':'application/json'}, method: 'post', body: JSON.stringify({first_name: first, last_name: last})})
            .then(response => response.json())
            .then(res => console.log(res))
    }    

    return (
        <>
            <div>Hey</div>
            <input value={first} onChange={(e) => setFirst(e.target.value)} />
            <input value={last} onChange={(e) => setLast(e.target.value)}/>
            <button onClick={send}>Submit</button>
            <div> field = {first} </div>
            <div> value = {last} </div>
        </>
    )
}

export default App;

