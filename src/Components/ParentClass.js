import React from "react";
import ChildClass from "./ChildClass";
class ParentClass extends React.Component{
    constructor(){
        super()
        console.log("Parent constructor")
    }

    componentDidMount()
    {
        console.log("Parent Mounted")
    }

    render(){
        console.log("Parent render");
        return (
            <div>
                <h1>Base class</h1>
                <ChildClass name = "first "/>
                <ChildClass name="second" />
               
            </div>
            
        )
    }
}

export default ParentClass;