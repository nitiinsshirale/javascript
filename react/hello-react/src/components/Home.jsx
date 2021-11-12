import React from "react";
import User from "./User";
import UserVO from "../vo/user.vo";

export default class Home extends React.Component {
    nums = [1,2,5,5,6,12]
    usr = new UserVO();
    render(){
        return <> { /** react fragment */}
                <h2>
                    Home Component {this.nums.forEach(n=>console.log(n))}
                </h2>
                <h3>
                    Welcome to React
                </h3>
                <User userVo={this.usr}/>
            </> 
    }
}
/**
 * 
 * state & props
 * state - is always local to the component
 * props - is always with parent to send something to the child
 */

/**
 * Problem 1: Display list of users using User Component & User Form Component from App Component
 * My Github Id : mohsink786
 * 
 */