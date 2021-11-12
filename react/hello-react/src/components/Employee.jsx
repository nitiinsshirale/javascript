
const Employee = (props)=>{
    return <>
    <p><strong>Welcome</strong>, to Employee Component</p>
    <h3>Message : {props.message}</h3>
    {
        console.log(props.userVo)
    }
    </>
}

export default Employee;