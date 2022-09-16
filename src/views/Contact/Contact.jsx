import {IconButton} from '@mui/material';
import React, {Fragment} from 'react'
import FlashlightOnIcon from '@mui/icons-material/FlashlightOn';
import FlashlightOffIcon from '@mui/icons-material/FlashlightOff';
// import {useFetchDataGithub} from "../../hooks/useFetchDataGithub";
// import CardList from '../ListofCards/CardList';
// import IncrementorComponent from '../../components/Incrementor/IncrementorComponent';
// import ListOfUsers from '../../components/ListofUsers/ListOfUsers';

const url="https://api.github.com/users";
const darkColor="#413F42";
const lightColor="#eee";

const Contact=() => {
    return (
        <div style={{width: "100%", height: "100vh", overflow: "scroll"}}>
            <h1>Vista Contact</h1>
            <nav>
                <IconButton>
                    <FlashlightOnIcon />
                    <FlashlightOffIcon />
                </IconButton>
            </nav>
        </div>
    )
}

export default Contact