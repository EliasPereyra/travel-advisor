import React from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'

import PlaceDetails from '../PlaceDetails/PlaceDetails'
import useStyles from './styles.js'

const List = ({ places, type, setType, rating, setRating, childClicked, isLoading }) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography variant="h4">Food & Dining around you</Typography>
            {isLoading ? (
                <div className={classes.loading}>
                    <CircularProgress size="5rem" />
                </div>
            ) : (
                <>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="type">Type</InputLabel>
                        <Select id="type" >
                            <MenuItem value="restaurants">Restaurants</MenuItem>
                            <MenuItem value="hotels">Hotels</MenuItem>
                            <MenuItem value="attractions">Attractions</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="rating">Rating</InputLabel>
                        <Select id="rating">
                            <MenuItem value="">All</MenuItem>
                            <MenuItem>Above 3.0</MenuItem>
                            <MenuItem>Above 4.0</MenuItem>
                            <MenuItem>Above 4.5</MenuItem>
                        </Select>
                    </FormControl>
                    <Grid container spacing={3} className={classes.list}>
                        {places?.map((place, i) => (
                            <Grid item xs={12}>
                                <PlaceDetails place={place} />
                            </Grid>
                        ))}
                    </Grid>
                </>
            )
            }
        </div>
    )
}

export default List
