import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer'
import logo from '../assets/logo.png';


function Login() {


    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {

                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
                console.log(result.user)
            })
            .catch((error) => alert(error.message))
    }

    return (
        <div className="login">
            <div className="login__container">
                <img
                    src={logo}
                    alt="Logo"
                />

                <h3>Projeto Fiap</h3>

            <button className="login__button" onClick={signIn} type="submit">
                Sign In
            </button>
            </div>
        </div>
    
    )
}

export default Login
