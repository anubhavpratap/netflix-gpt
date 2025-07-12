import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { addUser} from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import {updateProfile } from "firebase/auth";
import { LOGIN_BACKG, PROFILE_AVATAR} from '../utils/constants';

const Login = () => {
  const [isSignInForm,setIsSignForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const name = useRef();
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm);
  };
  const handleButtonClick = () =>{
        const  message = checkValidData(email.current.value,password.current.value);
        setErrorMessage(message);
        if(!isSignInForm){
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: name.current.value, photoURL: PROFILE_AVATAR
                  }).then(() => {
                    // Profile updated!
                    const {uid,email,displayName,photoURL} = auth.currentUser;
                    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL,}));
                  }).catch((error) => {
                    // An error occurred
                    setErrorMessage(error.message);
                  });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
            });
        }else{
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
            });
        }
    
    }

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img 
                className='h-screen object-cover'
                src= {LOGIN_BACKG}
                alt='login-back' />
        </div>
        <form onSubmit = {(e)=> e.preventDefault()} className='w-full md:w-3/12 absolute p-12 bg-black my-60 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4 text-center'>
                {isSignInForm? "Sign In": "Sign Up"}
            </h1>
            {!isSignInForm && <input type='text'
                ref = {name}
                placeholder='Full Name'
                className='p-4 my-4 w-full bg-gray-700'
            />}
            <input type='text'
                ref = {email}
                placeholder='Email Address'
                className='p-4 my-4 w-full bg-gray-700'
            />
            <input type='text'
                ref = {password }
                placeholder='Password'
                className='p-4 my-4 w-full bg-gray-700'
            />
            <p className='text-red-500 font-bold test-lg py-2'>{errorMessage}</p>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
                {isSignInForm ? "Sign In":"Sign Up"}
            </button>
            <p className='py-4 cursor-pointer' onClick = {toggleSignInForm}>
                {
                    isSignInForm? "New to Netflix? Sign Up Now":
                                    "Already registered? Sign In Now"
                }
            </p>
        </form>
    </div>
    
    
  )
}

export default Login;