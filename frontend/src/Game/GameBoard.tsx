import { Box } from '@material-ui/core';
import * as React from 'react'

const GameBoard = (props: {gameArray: number[]}) => {
    const [rowifiedArray, setRowifiedArray] = React.useState(new Array(4).fill(new Array(4).fill(0)))
    const [board, setBoard] = React.useState()
    console.log('rerender props.gameArray', props.gameArray)
    console.log('rerender rowifiedArray', rowifiedArray)
    console.log('rerender board', board)

    const rows = (gameArray): number[][]  => {
        console.log('rows', gameArray)
        const rowifiedArray: number[][] = [];
        let currentRow: number[] = [];
        for(let i = 0; i < gameArray.length; i++){
            currentRow.push(gameArray[i]);
            if(i % 4 === 3){
                rowifiedArray.push(currentRow);
                currentRow = [];
            }
        }
        console.log(rowifiedArray)
        return rowifiedArray;
    }

    const constructBoard = (rowifiedArray) => {
        const board = rowifiedArray.map((el, i) => {
            const row = el.map((el, i) => {
                return <Box key={i} width={'25%'}>{el}</Box>
            })
            return (
                <Box display={'flex'} key={i}>
                    {row}
                </Box>
            )
        })
        return board
    }

    React.useEffect(() => {
        setRowifiedArray(rows(props.gameArray))
    }, [props.gameArray])

    React.useEffect(() => {
        setBoard(constructBoard(rowifiedArray))
    }, [rowifiedArray])

    return (
        <>
            {board}
        </>
    )
}

export default GameBoard