import { Box, Grid, makeStyles } from '@material-ui/core'
import * as React from 'react'




const Square = (props: {value: number }) => {
    const backgroundColorMap = {'0': 'rgba(238, 228, 218, 0.35)', '2':'#eee4da', '4':'rgb(238, 225, 201)', '8':'#f3b27a', '16':'#f69664', '32':'#f77c5f', '64':'#f75f3b', '128': '#edd073', '256':'#edcc62', '512': '#edc950', '1024':'#edc53f', '2048': '#edc22e' }
    const colorMap = {'0':'transparent', '2':'#776e65', '4':'#776e65', '8':'#f9f6f2', '16':'#f9f6f2', '32':'#f9f6f2', '64':'#f9f6f2', '128':'#f9f6f2', '256':'#f9f6f2', '512':'#f9f6f2', '1024':'#f9f6f2', '2048':'#f9f6f2' }
    const useStyles = makeStyles((theme) => ({
        squareContainer: {
            padding: '0.5rem'
        },
        square: {
            borderRadius: '3px',            
            height:'100%',
            fontSize: '4rem',
            color: colorMap[`${props.value}`],
            backgroundColor: backgroundColorMap[`${props.value}`]
        }
    }));
    const classes = useStyles()
    console.log('fuck')
    
    return (
        <Grid className={classes.squareContainer} container item xs={3}>
            <Grid className={classes.square} container alignItems={'center'} justifyContent={'center'}>
                {props.value}
            </Grid>
        </Grid>
    )
}

export default Square;