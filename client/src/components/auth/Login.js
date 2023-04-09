import React from 'react'

const Login = ({ username, setUsername, password, setPassword, handleSubmit }) => {
    return (
        <div className='auth-container'>
            <form onSubmit={handleSubmit} id="loginForm">
                <h2>Login</h2>

                <div className='form-group login-form'>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login