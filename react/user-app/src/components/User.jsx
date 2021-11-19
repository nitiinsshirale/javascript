import { useEffect, useState } from 'react';
import '../App.css';
import AddUser from './AddUser';
import {users as userData} from "../data/users";

const User = (props)=>{
    const [users, setUsers] = useState([]);

    // on load function
    useEffect(()=>{
        setUsers(userData);
    },[]);

    const handleAddUser = (_newUser) => {
        setUsers([...users,_newUser])
    }
    return <>
        <h3>User Component</h3>
         { /** render list of users  */}
         <table>
             <thead>
                 <tr>
                     <th>ID</th>
                     <th>NAME</th>
                     <th>SALARY</th>
                 </tr>
             </thead>
             <tbody>
             {users.map(u=>
                 <tr key={u.id}>
                     <td>{u.id}</td>
                     <td>{u.name}</td>
                     <td>{u.salary}</td>
                 </tr>
                 )}
             </tbody>
         </table>
         <AddUser addUser={handleAddUser}/>
    </>
}

export default User;