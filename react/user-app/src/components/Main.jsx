import { Route,Switch } from "react-router-dom";
import Aboutus from "./Aboutus";
import Home from "./Home";
import User from "./User";
const Main = ()=>{
    return(
        <>
            <Switch>
                <Route exact path="/" component={Home}>
                </Route>
                <Route path="/aboutus" component={Aboutus}>
                </Route>
                <Route path="/users" component={User}>
                </Route>
            </Switch>
        </>
    );
}

export default Main;