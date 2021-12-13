import React from 'react'
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/Rating'


const PlaceDetails = ({ place }) => {
    return (
        <Card elevation={6}>
            <CardMedia 
                image={place.photo ? place.photo.images.large.url : ''}
                title={place.name}
            />
            <CardContent>
                <Typography>{place.name}</Typography>
                <Box>
                    <Rating value="Rating" />
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
