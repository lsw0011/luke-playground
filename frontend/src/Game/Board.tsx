import * as React from 'react'
import { Grid } from '@material-ui/core'

import Square from './Square'

const Board = () => {
    
    const printBoard = (arr) => {
        arr.reduce((prev, curr, index) => {
            const next = prev + ' ' + curr
            if(index % 4 === 3) {
                if(index === 3) console.log(' ' + next);
                else console.log(next);
                return('')
            }
            return(next)
        })
    }
    
    const generateRandomSquare = (array) => {
        const openIndexes = [];
        for(let i = 0; i < array.length; i++) {
            if(array[i] === 0) openIndexes.push(i);
        }
        if (openIndexes.length === 0) return false;
        const newLocation = Math.floor(Math.random() * openIndexes.length);
        array[openIndexes[newLocation]] = 2
        return true;
    }
    
    
    const shiftValue = (array, i1, i2) => {
        array[i1] = array[i2];
        array[i2] = 0;
    }
    
    const doubleValue = (array, i1, i2) => {
        array[i1] *= 2;
        array[i2] = 0;
    }
    
    const getRow = (array, row) => {
        const nRow = []
        for(let i = row * 4; i < row * 4 + 4; i++) {
            nRow.push(array[i])
        }
        return nRow;
    }
    
    const insertRow = (array, nRow, row) => {
        for(let i = 0; i < 4; i++) {
            array[row * 4 + i] = nRow[i];
        } 
    }
    
    const getColumn = (array, column) => {
        const nColumn = [];
        for(let i = column; i / 4 < 4; i += 4) {
            nColumn.push(array[i])
        }
        return nColumn;
    }
    
    const insertColumn = (array, nColumn, column) => {
        for(let i = 0; i < 4; i ++) {
            array[i * 4 + column] = nColumn[i]
        }
    }
    
    const shiftZeros = (row, start, stop, dir) => {
        if(start === stop) return;
        if(row[start] === 0) {
            shiftZeros(row, start - dir, stop, dir);
            shiftValue(row, start, start - dir);
        }
        shiftZeros(row, start - dir, stop, dir);
    }
    
    
    const shiftForward = (row, end) => {
        for(let i = end - 1; i > 0; i--) {
            shiftZeros(row, i, 0, 1);
            if(row[i - 1] === row[i]) {
                doubleValue(row, i, i - 1);
                shiftZeros(row, i, 0, 1);
                shiftForward(row, i - 1);
            }
        }
    }
    
    const shiftBackward = (row, start) => {
        for(let i = start; i < row.length - 1; i++) {
            shiftZeros(row, i, row.length - 1, -1)
            if(row[i + 1] === row[i]) {
                doubleValue(row, i, i + 1);
                shiftZeros(row, i, row.length - 1, -1)
                shiftBackward(row, i + 1);
            }
        }
    }
            
    const right = (arr) => {
        for(let i = 0; i < 4; i++) {
            const row = getRow(arr, i);
            shiftForward(row, row.length);
            insertRow(arr, row, i);
        }
    }
    
    const down = (arr) => {
        for(let i = 0; i < 4; i++) {
            const column = getColumn(arr, i);
            shiftForward(column, column.length);
            insertColumn(arr, column, i);
        }
    }
    
    const left = (arr) => {
        for(let i = 0; i < 4; i++) {
            const row = getRow(arr, i);
            shiftBackward(row, 0);
            insertRow(arr, row, i);
        }
    }
    
    const up = (arr) => {
        for(let i = 0; i < 4; i++) {
            const column = getColumn(arr, i);
            shiftBackward(column, 0);
            insertColumn(arr, column, i);
        }
    }
    
    const movement = (arr, handler) => {
        const arrClone = Object.assign([], arr);
        handler(arr)
        for(let i = 0; i < 16; i++) {
            if(arr[i] !== arrClone[i]) return true;
        }
        return false
    }
    const [gameArray, setGameArray] = React.useState(new Array(16).fill(0))
    const [workingArray, setWorkingArray] = React.useState(new Array(16).fill(0))
    const [change, setChange] = React.useState(false)
    
    React.useEffect(() => {
        const localArray = Object.assign([], gameArray)
        generateRandomSquare(localArray)
        generateRandomSquare(localArray)
        setGameArray(Object.assign([], localArray))
    }, [])

    const handler = React.useCallback((e) => {
        const localArray = Object.assign([], gameArray)
        let move:boolean;
        if(e.code === 'ArrowUp') {
            move = movement(localArray, up)
        } else if (e.code === 'ArrowDown') {
            move = movement(localArray, down)
        } else if (e.code === 'ArrowLeft') {
            move = movement(localArray, left)
        } else if(e.code === 'ArrowRight') {
            move = movement(localArray, right)
        }
        if(move) {
            generateRandomSquare(localArray)
            setWorkingArray(Object.assign([], localArray))
            setChange(move)
            window.removeEventListener('keydown', handler)
        }
    }, [gameArray])

    React.useEffect(() => {
        window.addEventListener('keydown', handler)
        setChange(false)
    }, [handler])
    
    React.useEffect(() => {
        if(change) {
            printBoard(workingArray)
            setGameArray(Object.assign([], workingArray))
            setChange(false)            
        }
    }, [change])

    return (
        <>
            {/* <Grid container spacing={2} style={{height: '100vw'}}>
            </Grid> */}
            <button onClick={() => console.log(gameArray)}>print</button>
        </>

    )
}

export default Board
