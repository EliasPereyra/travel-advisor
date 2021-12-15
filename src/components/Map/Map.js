import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'

import useStyles from './styles'

const Map = () => {
    const classes = useStyles();

    return (
        <div className={classes.mapContainer}>
        </div>
    )
}

export default Map
