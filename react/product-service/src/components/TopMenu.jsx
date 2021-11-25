import { NavLink } from "react-router-dom";

const TopMenu = (props)=>{
    return(
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/users">User</NavLink>
            <NavLink to="/users/register">Register</NavLink>
            <NavLink to="/products">Product</NavLink>
            {/* <NavLink to="/users/edit/:id"></NavLink> */}
        </>
    );
}

export default TopMenu;