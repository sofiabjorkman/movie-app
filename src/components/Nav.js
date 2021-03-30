import React from 'react'
import {Link} from "react-router-dom";

function Nav() {
    return (
        <div>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/admin">Admin</Link>
            </ul>
        </div>
    )
}

export default Nav
