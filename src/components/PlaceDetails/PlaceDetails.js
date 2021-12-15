import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/Rating'

import useStyles from './styles'


const PlaceDetails = ({ place, selected, refProp }) => {
    if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start'})
    const classes = useStyles();

    return (
        <Card elevation={6}>
            <CardMedia 
                style={{ height: 350 }}
                image={place.photo ? place.photo.images.large.url : ''}
                title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">{place.name}</Typography>
                <Box display="flex" justifyContent="space-between" my={2}>
                    <Rating name="read-only" value={Number(place.rating)} readOnly />
                    <Typography></Typography>
                </Box>
                <Box>
                    <Typography>Price</Typography>
                    <Typography></Typography>
                </Box>
                <Box>
                    <Typography>Ranking</Typography>
                    <Typography></Typography>
                </Box>

            </CardContent>
            <CardActions>
                <Button>Trip Advisor</Button>
                <Button>Website</Button>
            </CardActions>
        </Card>
    )
}

export default PlaceDetails
