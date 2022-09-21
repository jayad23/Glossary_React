import React, {useState} from 'react'
import {Search, SearchIconWrapper, StyledInputBase, appBarStyles, appBarStylesMargin, Link} from "./NavStyled";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useLocation } from 'react-router-dom'; 

const NavBar = () => {
    const [anchorElNav, setAnchorElNav]=useState(null);
    const location = useLocation();
    const evaluator = (param) => {
        const result = location.pathname.includes(param)
        return result;
    }
    const homePath = location.pathname.includes("home");
    const dynamicPath = location.pathname.includes("character")

  return (
    <Box >
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
                        <nav>
                            <ul style={{ display: "flex", gap: "20px"}}>
                                <Link to="/" >Home</Link>
                                <Link to="/about" >About</Link>
                                <Link to="/contact">Contact</Link>
                            </ul>
                        </nav>
                        </Typography>
                        <form>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{'aria-label': 'search'}}
                                />
                            </Search>
                        </form>
                    </Toolbar>
                </AppBar>
            </Box>
  )
}

export default NavBar