import React, { useState } from 'react'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import axios from "axios"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"

const Auth = () => {
    const [usernameLogin, setUsernameLogin] = useState("")
    const [passwordLogin, setPasswordLogin] = useState("")
    const [usernameRegister, setUsernameRegister] = useState("")
    const [passwordRegister, setPasswordRegister] = useState("")
    const [_, setCookies] = useCookies(["access_token"])

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const loginForm = "loginForm"
        const registerForm = "registerForm"
        const loginTarget = e.target.id

        if (loginTarget === loginForm) {
            try {
                const response = await axios.post("http://localhost:3001/auth/login", {
                    username: usernameLogin,
                    password: passwordLogin
                })

                setCookies("access_token", response.data.token)
                window.localStorage.setItem("userID", response.data.userID)
                window.localStorage.setItem("username", usernameLogin) 
                navigate("/")
                
                // console.log({ response });
            } catch (error) {
                console.log(error);
            }
        }

        if (loginTarget === registerForm) {
            try {
                await axios.post("http://localhost:3001/auth/register", {
                    username: usernameRegister,
                    password: passwordRegister
                })

                alert("Registration completed. You can now login.")
            } catch (error) {
                console.log(error);
            }
        };
    }

    return (
        <div className='auth'>
            <Login
                username={usernameLogin}
                setUsername={setUsernameLogin}
                password={passwordLogin}
                setPassword={setPasswordLogin}
                handleSubmit={handleSubmit}
            ></Login>
            <Register
                username={usernameRegister}
                setUsername={setUsernameRegister}
                password={passwordRegister}
                setPassword={setPasswordRegister}
                handleSubmit={handleSubmit}
            ></Register>
        </div>
    )
}

export default Auth