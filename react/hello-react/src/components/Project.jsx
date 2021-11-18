import { useState } from "react";

const Project = (props) =>{
    // one of the react hooks
    const [message, setMessage ] =  useState('Welcome to Project');

    // const [name, setName] = useState('');
    // const [budget, createBudget] = useState(0);
    const [project, setProject] = useState({});

    const handleChange = (e) =>{
        console.log(e);
        // in case we want to update the existing state 
        setProject({...project, [e.target.name]: e.target.value});
        // in case we want to over write the existing state
        // setProject({[e.target.name]: e.target.value});
    }

    const handleName = e=>{
        setProject({...project, "name": e.target.value});
    }

    const handleBudget = e=>{
        setProject({...project, "budget": e.target.value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault(); // this will stop the page from reloading 
        console.log(project.name +',',project.budget);
    }
    const handleMessage = ()=>{
        setMessage('Message updated')
    }
    return <>
        <h3>Project Component = {message}</h3>
        <div>
            <button onClick={handleMessage}>Update Message</button>
        </div>
        <form onSubmit={handleSubmit}>
            <p>
                <label>Name:</label>
                <input type="text" name="name" id="name" onChange={handleName}/>
            </p>
            <p>
                <label>Budget:</label>
                <input type="number" name="budget" id="budget" onChange={handleBudget}/>
            </p>
            {/* { project.name !== '' && project.budget !== 0 ? <p>Name : {project.name} , Budget : {project.budget}</p>:'' } */}
            <button type="submit">Submit</button>
        </form>
    </>
}

export default Project;