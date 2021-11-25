import { Switch, Route } from "react-router-dom";
import AddProduct from "./AddProduct";
import Home from "./Home";
import NotFound from "./NotFound";
import Product from "./Products";
import RegisterUser from "./RegisterUser";
import User from "./User";
const Content = (props)=>{
    return(
        <Switch>
            <Route exact path="/" component={Home} ></Route>
            <Route exact path="/users" component={User} ></Route>
            <Route exact path="/users/register" component={RegisterUser} ></Route>
            <Route exact path="/products" component={Product} ></Route>
            <Route exact path="/products/add" component={AddProduct} ></Route>
            <Route component={NotFound} ></Route>
        </Switch>
    );
}
export default Content;