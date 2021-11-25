import { useState } from "react"
import config from "../config";
const AddProduct = (props) =>{
    const[product,setProduct] = useState({ name: '', price: 0});

    const saveForm = e =>{
        e.preventDefault();
        console.log(product);
        // save the product in api
        fetch(config.baseUrl.concat('/products'),{
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res=> res.json())
        .then(res=> {
            setProduct(res);
            alert('Product has been saved successfully!')
        })
        .catch(err=> console.error(err))
    }

    return <form onSubmit={saveForm}>
        <input type="text" name="name" onChange={e=> setProduct({...product,name: e.target.value})} />
        <input type="number" name="price" onChange={e=> setProduct({...product,price: e.target.value})}/>
        <input type="submit" name="Save" value="Save" />
    </form>
}

export default AddProduct;