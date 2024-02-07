import React from "react";
import Shimmer from "./Shimmer"
import UserContext from "../utils/UserContext";
class OwnerClass extends React.Component
{
    constructor(){
        super()

        this.state = {
            ownerData :null
        }
    }
    
    async componentDidMount()
    {
        const info = await fetch("https://api.github.com/users/venkatesh2341");
        const json= await info.json();
       // console.log(json);
        this.setState({
            ownerData : json
        })

    }

    componentDidUpdate(){
        // console.log("Component Updated");
    }
     
    componentWillUnmount(){
        // console.log("Compoenet will unmount");
    }


    render(){
        if(this.state.ownerData === null )
        {
            return (<Shimmer/>)
        }
        // debugger
        const {name, avatar_url, location} = this.state.ownerData
        return (
            
            <div className="m-5 items-center" >
                <img className="h-32 w-32"  src= {avatar_url} />
                <h1>Name : {name}</h1>
                <h2>Location : {location} </h2>
                <h2>
                    <UserContext.Consumer>
                       {
                        ({loggedInUser})=> <li>{loggedInUser}</li>
                       }
                    </UserContext.Consumer>
                </h2>
                
                
            </div>

        )
    }
}

export default OwnerClass;