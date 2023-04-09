import React from 'react'

const Register = ({ username, setUsername, password, setPassword, handleSubmit }) => {
    return (
        <div className='auth-container'>
            <form onSubmit={handleSubmit} id="registerForm">
                <h2>Register</h2>

                <div className='form-group'>
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

                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register