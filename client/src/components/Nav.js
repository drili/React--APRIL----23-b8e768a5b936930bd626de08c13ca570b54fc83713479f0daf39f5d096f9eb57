import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/create-recipe">Create Recipe</Link>
            <Link to="/saved-recipes">Saved Recipes</Link>
            <Link to="/auth">Login / Register</Link>
        </div>
    )
}

export default Nav