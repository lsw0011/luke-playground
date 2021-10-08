import * as React from 'react';

const C4 = (props) => {
    console.log('c4')

    const onClick = () => {
        props.setC4(props.c4 + 1)
    }

    return (<div onClick={onClick}>C4 - {props.c4}</div>)
}

export default C4;