import * as React from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
} from '@mui/material';
import {Link} from 'react-router-dom';

const CardList=({char}) => {
    return (
        <Card sx={{maxWidth: 345}}>
            <CardMedia
                component="img"
                height="140"
                image={char.avatar_url}
                alt={char.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {char.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/character/${char.login}`}>Ver más información</Link>
            </CardActions>
        </Card>
    )
}

export default CardList