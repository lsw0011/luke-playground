import { Box, Grid, makeStyles } from '@material-ui/core';
import * as React from 'react'
import Square from './Square';

const useStyles = makeStyles((theme) => ({
    board: {
        borderRadius: '6px',            
        height: '95vw',
        backgroundColor: '#BBADA0',
        padding: '0.5rem'
    },
    row: {
        height: '25%'
    }
}));

const GameBoard = (props: {gameArray: number[]}) => {
    const [rowifiedArray, setRowifiedArray] = React.useState(new Array(4).fill(new Array(4).fill(0)))
    const [board, setBoard] = React.useState()
    const classes = useStyles()

    const rows = (gameArray): number[][]  => {
        const rowifiedArray: number[][] = [];
        let currentRow: number[] = [];
        for(let i = 0; i < gameArray.length; i++){
            currentRow.push(gameArray[i]);
            if(i % 4 === 3){
                rowifiedArray.push(currentRow);
                currentRow = [];
            }
        }
        return rowifiedArray;
    }

    const constructBoard = (rowifiedArray) => {
        const board = rowifiedArray.map((el, i) => {
            console.log(el)
            const row = el.map((el, j) => {
                return <Square value={el} key={`${i}${j}`} />
            })
            return (
                <>
                    <Grid className={classes.row} container justifyContent={'center'} wrap={'wrap'}>
                        {row}
                    </Grid>
                </>
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
        <Grid className={classes.board} >
            {board}
        </Grid>
    )

}

export default GameBoard