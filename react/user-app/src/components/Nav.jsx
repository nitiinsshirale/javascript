import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ()=>{
    return(
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/aboutus">Aboutus</NavLink></li>
                    <li><NavLink to="/users">Users</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;