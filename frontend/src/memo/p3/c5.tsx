import * as React from 'react';

const C5 = (props) => {
    console.log('c5')

    const onClick = () => {
        props.setC5(props.c5 + 1)
    }

    return (<div onClick={onClick}>C5 - {props.c5}</div>)
}

export default C5;