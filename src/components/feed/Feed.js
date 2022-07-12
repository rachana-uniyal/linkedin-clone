import React,{useState, useEffect} from 'react'
import './feed.css'
import InputOption from './InputOption';
import Post from '../post/Post'

import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import { db } from './Firebase';
import { selectUser } from './features/userSlice';
import {useSelector} from 'react-redux';
import FlipMove from 'react-flip-move';
import { collection, query, orderBy, getDocs, addDoc,serverTimestamp } from "firebase/firestore";



function Feed() {
    const user  = useSelector(selectUser)
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const querySnapshot = getDocs(query(collection(db,"post"), orderBy('timestamp','desc')))
        querySnapshot.forEach(doc =>{
           setPosts(doc.map(doc =>(
               {
                   id: doc.id,
                   data: doc.data()
               }
           )))
       });
    }, [])

    const sendPost = e =>{
        e.preventDefault();
        addDoc(collection(db,'posts'),{
            name: user.displayName,
            description: user.email,
            message:input,
            photoUrl: user.photoUrl || '',
            timestamp: serverTimestamp()
        })
        setInput('')
    }

    return (
        <div className='feed'>
            <div className='feed_inputContainer'>
                <div className='feed__input'>
                    <CreateIcon/>
                    <form>
                        <input value={input} onChange={e=> setInput(e.target.value)} type='text'/>
                        <button onClick={e=>sendPost(e)} type='submit'> Send </button>
                    </form>
                </div>
                <div className='feed__inputOptions'>
                    <InputOption Icon={ImageIcon} title='Photo' color='#7005F9'/>
                    <InputOption Icon={SubscriptionsIcon} title='Video' color='#C7A33C'/>
                    <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD'/>
                    <InputOption Icon={CalendarViewDayIcon} title='write article' color='#7FC15E'/>
                </div>
            </div>
            {/* {post} */}
            <FlipMove>
            {
                posts.map(({id, data:{name,description,message,photoUrl}})=>(
                    <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                    />
    ))
            }
            </FlipMove>
             </div>
    )
}

export default Feed
