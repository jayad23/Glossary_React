import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Loader} from '../../components/Loader/Loader'
import {Search, SearchIconWrapper, StyledInputBase, appBarStyles} from "./HomeStyled";
import {Container} from "../../gralStyledComponents/gralStyledComponents";
import CardList from '../ListofCards/CardList';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Home=() => {
    const [data, setData]=useState(null);
    const [loading, setLoading]=useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get("https://api.github.com/users")
            .then(res => setData(res.data))
            .then(() => setLoading(false))
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
            <Box sx={appBarStyles}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{mr: 2}}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                        >
                            MUI
                        </Typography>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{'aria-label': 'search'}}
                            />
                        </Search>
                    </Toolbar>
                </AppBar>
            </Box>
            <Container>
                {
                    loading? (
                        <Loader />
                    ):(
                        data&&data.map(char => (
                            <CardList key={char.id} char={char} />
                        ))
                    )
                }
            </Container>
        </>
    )
}

export default Home