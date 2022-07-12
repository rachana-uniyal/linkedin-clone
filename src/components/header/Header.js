import React from 'react';
import { useDispatch } from 'react-redux';
import './header.css';
import HeaderOption from './HeaderOption';

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { auth } from './Firebase';
import {logout } from './features/userSlice'

function Header() {
    const dispatch = useDispatch();

    const logouOfApp = ()=>{
        dispatch(logout());
        console.log("loggng out")
        auth.signOut()
    }
    return (
        <div className='header'>
            <div className="header__left">

                <img src="https://img.icons8.com/fluency/96/000000/linkedin.png" alt='logo'/>
              <div className='header__search'>
                    <SearchIcon/>
                    <input placeholder='search' type='text'/>
                </div>

            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home'/>
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOption Icon={ChatIcon} title='Messaging'/>
                <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
                <HeaderOption avatar={true}
                  onClick={logouOfApp}/>
            </div>
        </div>
    )
}

export default Header

