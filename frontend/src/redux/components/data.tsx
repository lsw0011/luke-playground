import * as React from 'react'; 

const data = (props: {children?, endpoint: string}) => {
    const [data, setData] = React.useState('')
    
    React.useEffect(() => {
        fetch('http://localhost:1111/' + props.endpoint)
            .then(res => res.json())
            .then(res => setData(res.data))

    }, [])


    return(<div>{props.children}</div>)
}

export default data;