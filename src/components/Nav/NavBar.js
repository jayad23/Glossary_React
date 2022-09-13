import React, {useState} from 'react'
import {Search, SearchIconWrapper, StyledInputBase, appBarStyles, appBarStylesMargin, Link} from "./NavStyled";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
    const [anchorElNav, setAnchorElNav]=useState(null);
    const location = useLocation();
    const styledNav = ({isActive}) => {
        if(isActive){
            return {
                borderBottom: "2px solid blue",
                paddingBottom: "5px",
                textDecoration: "none",
                color: "white",
                fontWeight: "bolder"
            }
        }
        return {
            textDecoration: "none"
        }
    }
    console.log(location)
  return (
    <Box sx={location.pathname === "/home" ? appBarStyles : appBarStylesMargin}>
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
                                <Link to="/home" >Home</Link>
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