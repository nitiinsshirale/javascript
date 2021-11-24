import { NavLink } from "react-router-dom";
const NotFound = ()=>{
    return(
        <h2>Invalid Route , GO Home <NavLink to="/">Home</NavLink></h2>
    );
}
export default NotFound;