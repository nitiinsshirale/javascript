import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import config from "../config";
import loader from "../images/loading.gif";
const Product = (props)=>{
    const [data, setData] = useState([]);
    const [loaded,isLoaded] = useState(false);

    useEffect(()=>{
        // load data from rest api into react component
        fetch(config.baseUrl.concat('/products'))
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.length > 0){
                isLoaded(true);
                setData(data);
                localStorage.setItem("data",JSON.stringify(data));
            }
        }).catch(err=>{
            console.error('Err ',err)
            isLoaded(false);
        });
    },[]);
    
    if(!loaded){
        return <>
            <img src={loader} alt="Products are being loaded"/>
            <NavLink to="/products/add">Add Product</NavLink>
        </>
    }else{
        return (
            <>
                 <NavLink to="/products/add">Add Product</NavLink>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>PRICE</th>
                        </tr>
                    </thead>
                    <tbody>
                        { data.map(item=> <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                </tr>)}
                    </tbody>
                </table>
            </>
        );
    }
}
export default Product;