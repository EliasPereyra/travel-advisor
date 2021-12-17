import GoogleMapReact from 'google-map-react'

import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'

import mapStyles from '../../mapStyles'
import useStyles from './styles'

const Map = ({coords, places, setCoords, setBounds, setChildClicked }) => {
    const classes = useStyles();
    const matches = useMediaQuery('')

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: process.env.GOOGLE_MAPS_API_KEY}}
                defaultCenter={coords}
                center={coords}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={{disableDefaultUI:true, zoomControl: true, styles: mapStyles }}
                onChange={(e) => {
                    setCoords({ lat: e.center.lat, lng: e.center.lng})
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                }}
                onChildClick={(child) => setChildClicked(child)}
            >
                {places.length && places.map((place,i) => (
                    <div className={classes.markerContainer} lat={Number(place.latitude)} lng={Number(place.longitude)} ley={i}>
                        {!matches}
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    )
}

export default Map
