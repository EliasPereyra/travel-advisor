import { useState, useEffect } from 'react'
import { CssBaseline, Grid } from '@material-ui/core'

import { getPlacesData } from './api/travelAdvisorAPI'
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'

const App = () => {
    const [places, setPlaces] = useState([])
    const [filteredPlaces, setFilteredPlaces] = useState([])

    useEffect(() => {
        getPlacesData()
            .then((data) => {
                setPlaces(data.filter((place) => place.name > 0));
                setFilteredPlaces([]);
            })
    })

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container xs={12} md={4} style={{width: '100%'}}>
                <Grid item xs={12} md={4}>
                    <List 
                        places={filteredPlaces.length ? filteredPlaces : places}
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} md={4} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Map />
            </Grid>
        </>
    )
}

export default App
