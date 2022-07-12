import React,{useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux'
import './App.css';
import { selectUser } from './features/userSlice';
import Feed from './components/feed/Feed';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Login from './components/login/Login'
import {auth }from './Firebase';
import { login,logout} from './features/userSlice'
import Widgets from './components/widgets/Widgets';
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {

  const user  = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, (userAuth) => {
      if(userAuth){
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl:userAuth.photoURL
        }));
      }else{
          dispatch(logout());
      }
    })
  },[])

  return (
    <div className="app">
      <Header/>
      {!user ? (
        <Login/>
   ) : (
        <div className='app__body'>
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </div>
   )}
    </div>
  );
}

export default App;
