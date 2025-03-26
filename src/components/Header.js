import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import {signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import {onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from 'react';
import { LOGO_URL} from '../utils/constants';


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store)=>store.user);
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //console.log(user);
        const {uid,email,displayName, photoURL} = user;
        dispatch(
          addUser({
            uid:uid,
            email:email,
            displayName:displayName,
            photoURL:photoURL,}));
            navigate("/browse");

      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return ()=>unsubscribe();
  },[]);

  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img
            className='w-44'
            src= {LOGO_URL}
            alt='logo'
        />
        {user && (<div className='flex p-4'>
          <img className= "w-12 h-12 mx-2" alt= "usericon" src={user?.photoURL}/>
          <button className='font-bold text-white' onClick={handleSignOut}>(Sign Out)</button>
        </div>)}
    </div>

  )
}

export default Header