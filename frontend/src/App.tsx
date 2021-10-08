import * as React from 'react'; 
import P1 from './memo/p1';
import P2 from './memo/p2';
import P3 from './memo/p3';

const App = () => {
    const [index, setIndex] = React.useState(0);
    const [p1, setP1] = React.useState(0);
    const [p2, setP2] = React.useState(0);
    const [p3, setP3] = React.useState(0);


    const onClick = (event) => {
        setIndex(event.target.tabIndex)
    }



    const p1Memo = React.useCallback(() => {
        return (
            <P1 p1={p1} setP1={setP1}/>
        )
    }, [p1])()

    const p2Memo = React.useMemo(() => {
        return (
            <P2 p2={p2} setP2={setP2}/>
        )
    }, [p2])

    const p3Memo = React.useMemo(() => {
        return (
            <P3 p3={p3} setP3={setP3}/>
        )
    }, [p3])


    return (
        <>
            <div style={{width: '100%'}}>
                <div onClick={onClick} tabIndex={0}>0</div>
                <div onClick={onClick} tabIndex={1}>1</div>
                <div onClick={onClick} tabIndex={2}>2</div>
            </div>
            <div hidden={index !== 0}>
                {p1Memo}
            </div>
            <div hidden={index !== 1}>
                {p2Memo}
            </div>
            <div hidden={index !== 2}>
                {p3Memo}
            </div>
        </>
    )
}

export default App;

