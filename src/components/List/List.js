import React from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'

import useStyles from './styles.js'

const List = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography variant="h4">Food & Dining around you</Typography>
        </div>
    )
}

export default List
