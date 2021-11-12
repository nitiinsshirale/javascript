export default class UserVO{
    
    // assign default values to the const args
    constructor(id=0,name="",email=""){
        this.id = id
        this.name = name
        this.email = email
    }
    getUser(){
        return {
            id: this.id,
            name: this.name,
            email: this.email
        };
    }

    getUsers(){
        this.users=[];
        // add user 
        let u1 = new UserVO(1,"User1","usr1@gmail.com");
        let u2 = new UserVO(2,"User2","usr2@gmail.com");
        let u3 = new UserVO(3,"User3","usr3@gmail.com");
        this.users.push(u1);
        this.users.push(u2);
        this.users.push(u3); 
        return this.users;
    }
}