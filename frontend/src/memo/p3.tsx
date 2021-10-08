import * as React from 'react';
import C5 from './p3/c5';
import C6 from './p3/c6';

const P3 = (props) => {
    const c5Memo = React.useMemo(() => {
        return <C5 c5={props.p3} setC5={props.setP3} />
    }, [props.p3])

    const c6Memo = React.useMemo(() => {
        return <C6 />
    }, [])

    return (
        <>
            {c5Memo}
            {c6Memo}
        </>
    )
}

export default P3;