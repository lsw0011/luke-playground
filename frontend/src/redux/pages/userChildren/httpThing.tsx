import * as React from 'react'; 

const httpThing = () => {
    console.log('fuck')
    const [data, setData] = React.useState()
    React.useEffect(() => {
        console.log('hey')
        fetch('http://localhost:1111/surveys')
            .then(res => res.json())
            .then(res => setData(res.data.name))
    }, [])
    return (<>{data}</>)

}

export default httpThing