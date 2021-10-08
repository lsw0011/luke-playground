import * as React from 'react';

const C1 = (props) => {
    console.log('c1')

    const onClick = () => {
        props.setC1(props.c1 + 1)
    }

    return (<div onClick={onClick}>C1 - {props.c1}</div>)
}

export default C1;