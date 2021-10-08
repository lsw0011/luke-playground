import * as React from 'react';
import C1 from './p1/c1';
import C2 from './p1/c2';

const P1 = (props) => {
    
    const c1Memo = React.useMemo(() => {
       return ( <C1 c1={props.p1} setC1={props.setP1}/> )
    }, [props.p1])

    const c2Memo = React.useMemo(() => {
        return (<C2 />)
    }, [])


    return (
        <>
            {c1Memo}
            {c2Memo}
        </>
    )
}

export default P1;