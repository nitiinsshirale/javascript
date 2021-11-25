import { NavLink } from "react-router-dom";

const NotFound = (props)=>{
    return(
        <h3>Oops, Page not found, please  <NavLink to="/">click here</NavLink></h3>
    );
}

export default NotFound;