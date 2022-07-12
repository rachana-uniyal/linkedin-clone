import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../../Firebase';
import './login.css'
import {login} from '../../features/userSlice';
import {  signInWithEmailAndPassword,createUserWithEmailAndPassword,updateProfile } from "firebase/auth";

function Login() {
    const[email, setEmail]  = useState('')
    const[password, setPassword]  = useState('')
    const[name, setName]  = useState('')
    const [profileUrl, setProfileUrl] = useState('')
    const dispatch = useDispatch()

    const loginToApp = (e)=>{
        e.preventDefault()
        
        signInWithEmailAndPassword(auth,email,password).then(
            (userAuth) =>{
                dispatch(
                    login(
                        {
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoUrl: profileUrl
                        }
                    )
                )
            }
        ).catch(error => alert(error))
    }
    const register = ()=>{
        if(!name){
            return alert("Please enter a full name!");
        }
        createUserWithEmailAndPassword(auth,email,password)
        .then((userAuth) => {
            updateProfile(userAuth.user,{
                displayName: name,
                photoUrl: profileUrl
            })
            .then(()=>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profileUrl
                }))
            })
        })
        .catch((error)=> alert(error))
    }
    return (
        <div className='login'>
           <img 
           src="https://www.technipages.com/wp-content/uploads/2020/09/LinkedIn-Does-Not-Load-Images-fix.jpg"
           alt=''
           />
           <form>
                <input value={name} onChange={e=>setName(e.target.value)} placeholder='full name (required if registering)'type="text"/>
                <input value={profileUrl} onChange={e=>setProfileUrl(e.target.value)} placeholder='Profile pic URL (optional)' type="text"/>
                <input value={email} onChange={e=>setEmail(e.target.value)} placeholder='Email' type='email'/>
                <input value={password} onChange={e=>setPassword(e.target.value)} placeholder='Password' type='password'/>
            <button type='submit' onClick={loginToApp}>Sign In</button>
           </form> 

           <p>Not a member? {' '}
            <span className='login__register' onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
