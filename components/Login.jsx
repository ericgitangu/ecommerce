import React from 'react'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useStateContext } from '../context/StateContext'
import Link from 'next/link'
import { auth } from '../firebase'
import { SiThesoundsresource } from 'react-icons/si'

const Login = () => {
    const { setUser } = useStateContext();
    const provider = new GoogleAuthProvider();
    const signIn = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            // The signed-in user info.
            const usr = result.user;
            console.warn(`User: ${JSON.stringify(usr)}`)
            const userInfo = {
                name: usr.displayName,
                email: usr.email,
                photo: usr.photoURL,
                id: usr.uid,
                token: token
            }
            localStorage.setItem('user', JSON.stringify(userInfo))
            setUser(JSON.stringify(userInfo))
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code
            if(errorCode) {
                console.error(`Google Login Error Code: ${errorCode}`)
            }
            const errorMessage = error.message
            if(errorMessage) {
                console.error(`Google Login Error: ${errorMessage}`)
            }
            const email = error.customData.email;
            if(email) {
                console.error(`Google Login Error: ${email}`)
            }
            const credential = GoogleAuthProvider.credentialFromError(error);
            if(credential) {
                console.error(`Google Login Error: ${credential}`)
            }
        });
        <Link href='/' />
    }

    return (
        <div className='login-container'>
            <div className='login-content'>
                <SiThesoundsresource size={140}/>
                <h4>Eric's Audio Shop</h4>
                <button className = 'login-with-google-btn' style={{cursor:'pointer'}}
                    onClick={signIn}
                >
                    Sign in with Google
                </button>
            </div>
        </div>
    )
}

export default Login
