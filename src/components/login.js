import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { addUser} from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import {updateProfile } from "firebase/auth";

const Login = () => {
  const [isSignInForm,setIsSignForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
  const navigate = useNavigate();
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
                    displayName: name.current.value, photoURL: "https://assets.leetcode.com/users/pratap_anubhav/avatar_1737688960.png"
                  }).then(() => {
                    // Profile updated!
                    const {uid,email,displayName,photoURL} = auth.currentUser;
                    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL,}));
                    navigate("/browse");
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
                navigate("/browse");
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
                src='https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_medium.jpg'
                alt='login-back' />
        </div>
        <form onSubmit = {(e)=> e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-60 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-90'>
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