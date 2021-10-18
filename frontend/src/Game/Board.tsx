import * as React from 'react'
import { Grid } from '@material-ui/core'

import Square from './Square'

const Board = () => {
    
    React.useEffect(() => {
        const square = { value: 0, merged: false}
        const location = {filled: false, square: square}
        const grid = new Array(4).map(() => {
            const loc = { value: 0, square: Object.assign({}, square) }
            return Object.assign({}, location)
        })

        grid[1].square.value = 2
        console.log(grid)
    },[])

    return (
        <>
            <Grid container spacing={2} style={{height: '100vw'}}>
            </Grid>
        </>

    )
}

export default Board