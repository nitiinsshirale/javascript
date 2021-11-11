import React from "react";

export default class Home extends React.Component {
    nums = [1,2,5,5,6,12]
    render(){
        return <> { /** react fragment */}
                <h2>
                    Home Component {this.nums.forEach(n=>console.log(n))}
                </h2>
                <h3>
                    Welcome to React
                </h3>
            </> 
    }
}