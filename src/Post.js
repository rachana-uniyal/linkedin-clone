import { Avatar } from '@mui/material';
import React,{ forwardRef} from 'react';
import InputOption from './InputOption';
import './post.css';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';


const  Post = forwardRef(({name, description,message, photoUrl},ref)=> {
    return (
        <div ref={ref} className='post'>
            <div className='post__header'>
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className='post__info'>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
           <div className='post__body'>
               <p>{message}</p>
           </div>

           <div className='post__buttons'>
               <InputOption Icon={ThumbUpOffAltIcon} title="Like" color='gray'/>
               <InputOption Icon={ChatBubbleOutlineIcon} title="Comment" color='gray'/>
               <InputOption Icon={ShareIcon} title="Share" color='gray'/>
               <InputOption Icon={SendIcon} title="Send" color='gray'/>
           </div>
        </div>
    )
})

export default Post
