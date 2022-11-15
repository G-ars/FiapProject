import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer'
import logo from '../assets/logo.png';
import banner from '../assets/banner-login.jpg';


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
        <div className='login__section'>

            <div>
                <img
                    src={banner}
                    alt="Logo"
                />
            </div>

            <div>
                <div className='login__title'>
                    <h1>O <span>Recycle</span> te conecta com pessoas que querem salvar o mundo, assim como você!</h1>
                </div>

                <div className="login">
                    <div className="login__container">
                        <img
                            src={logo}
                            alt="Logo"
                        />
                        <button className="login__button" onClick={signIn} type="submit">
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
