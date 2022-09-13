import React, { useState, useEffect} from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Container } from "../../gralStyledComponents/gralStyledComponents";
import {Loader} from "../../components/Loader/Loader";
import { useFetchDataGithub } from "../../hooks/useFetchDataGithub";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CardComponent = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const { username } = useParams();
  const url = `https://api.github.com/users/${username}`;
  const { data, isLoading, error } = useFetchDataGithub(url);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container>
      {
        isLoading ? (
          <Loader />
        ): (
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="card_info">
                  {data?.login.slice(0, 1).toUpperCase()}
                </Avatar>
              }
              action={
                <IconButton aria-label="Volver a home" onClick={() => navigate("/home")}>
                  <NavigateBeforeIcon />
                </IconButton>
              }
              title={data?.login.toUpperCase()}
              subheader={data?.created_at.slice(0, 10)}
            />
            <CardMedia
              component="img"
              height="194"
              image={data?.avatar_url}
              alt={data?.login}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {
                  data?.bio ? data.bio :  "Este usuario no cuenta con una descripción del perfil disponible."
                }
                <br/>
                <Link to={`${data?.html_url}`}>Ir a github</Link>
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", textAlign: "left"}}>
                  <Typography paragraph>Información Detallada:</Typography>
                  <Typography paragraph>
                    Repositorios Públicos: {data?.public_repos}
                  </Typography>
                  <Typography paragraph>
                    Personas que te siguen: {data?.followers}
                  </Typography>
                  <Typography paragraph>
                    Personas que tú sigues: {data?.following}
                  </Typography>
                  <Typography>
                    Blog: {data?.blog ? data?.blog : "Este Usuario no tiene blog"}
                    <br/>
                    Cuenta en Twitter: {data?.twitter_username ? data?.twitter_username : "No hay cuenta disponible"}
                    <br/>
                    Nombre: {data?.name ? data?.name : "El usuario no tiene registro"}
                    <br/>
                    Ubicación: {data?.location ? data?.location : "El usuario no tiene registro"}
                  </Typography>
                </div>
              </CardContent>
            </Collapse>
          </Card>
        )
      }
    </Container>
  );
}


export default CardComponent;

