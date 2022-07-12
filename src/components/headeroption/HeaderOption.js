import React from 'react';
import './headeroption.css';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import {selectUser} from '../../features/userSlice'

function HeaderOption({avatar,Icon, title, onClick}) {
    const user  = useSelector(selectUser)
    return (
        <div onClick={onClick} className='headerOption'>
            {Icon && <Icon className='headerOption__icon'/>}
            {avatar && 
                (<Avatar className='headerOption__icon' >
                    { user ?user.email[0] : null}
                </Avatar>)}
            <h3 className='headerOption__title'>{title}</h3>
        </div>
    )
}

export default HeaderOption
