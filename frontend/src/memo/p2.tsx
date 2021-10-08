import * as React from 'react';
import C3 from './p2/c3';
import C4 from './p2/c4';

const P2 = (props) => {

    const c3Memo = React.useMemo(() => {
        return <C3 />
    }, [])

    const c4Memo = React.useMemo(() => {
        return <C4 c4={props.p2} setC4={props.setP2} />
    }, [props.p2])

    return (
        <>
            {c3Memo}
            {c4Memo}
        </>
    )
}

export default P2;