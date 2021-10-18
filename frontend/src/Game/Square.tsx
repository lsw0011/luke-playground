import { Box, Grid, makeStyles } from '@material-ui/core'
import * as React from 'react'


const useStyles = makeStyles((theme) => ({
    div: {
        width: '100%',
        height: '100%',
    },
    square: {
        width: '100%',
        height: '100%',
        backgroundColor: 'red'
    },
    emptySquare: {
        width: '100%',
        height: '100%',
        color: 'transparent'
    }
}));

const Square = (props) => {
    const classes = useStyles()

    
    return (
        <Grid item xs={3}>
            <Box className={classes.div}>
                {props.filled ? 
                    <Box alignItems={'center'} justifyContent={'center'} display={'flex'} className={classes.square}>
                        2
                    </Box>
                :
                    <Box alignItems={'center'} justifyContent={'center'} display={'flex'} className={classes.emptySquare}>
                        FUCK
                    </Box>
                }
            </Box>
        </Grid>
    )
}

export default Square;