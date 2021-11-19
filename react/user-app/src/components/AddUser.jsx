import { useState } from "react";


const AddUser = (props) =>{

    const [usr,addUsr] = useState({});

    const handleChange =(e) =>{
        addUsr({...usr,[e.target.name]:e.target.value});
    }
    const handleSave = (e)=>{
        e.preventDefault();
        props.addUser(usr);
    }
    return <fieldset>
            <legend><h3>ADD USER</h3></legend>
            <form onSubmit={handleSave}>
                <input type="number" name="id" placeholder="Enter Id" className="input" onChange={handleChange}/>
                <input type="text" name="name" placeholder="Enter Name" className="input" onChange={handleChange}/>
                <input type="number" name="salary"  placeholder="Enter Salary" className="input" onChange={handleChange}/>
                <input type="submit" value="Save User" />
            </form>
        </fieldset>
}

export default AddUser;