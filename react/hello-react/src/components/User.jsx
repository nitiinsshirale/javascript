import React from "react";
//import UserVO from "../vo/user.vo";
export default class User extends React.Component{
   // _msg = "hola"
    render(){
        //const usr = new UserVO(0,"","");
        return <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        console.log(this.props.userVo.getUsers())
                    } */}
                    {
                        this.props.userVo.getUsers().map(u=> <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                        </tr>)
                    }
                </tbody>
            </table>
            {/* {
                usr.getUsers().forEach(u=>console.log( u.name))
            } */}
        </>
    }
}