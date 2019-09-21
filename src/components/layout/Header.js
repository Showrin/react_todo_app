import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header style={ headerStyle }>
            <h1>
                Todo List
            </h1>
            <Link style={ linkStyle } to="/">Home</Link> | <Link style={ linkStyle } to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px"
}

const linkStyle = {
    textDecoration: "none",
    color: "#fff"
}

export default Header
