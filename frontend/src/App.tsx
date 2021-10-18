import * as React from 'react'; 

const App = () => {
    
    React.useEffect(() => {
        fetch('http://localhost:1113/')
            .then(response => response.json())
            .then(res => console.log(res))
    },[])

    return (
        <div>Hey</div>
    )
}

export default App;

