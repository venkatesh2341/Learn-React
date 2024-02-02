import React from "react"

class ChildClass extends React.Component
{
    constructor(props){
        super(props)
        console.log(this.props.name + "Child constructor");
    }

    componentDidMount(){
        console.log(this.props.name + "Child mounted");
      
    }

    render(){
        console.log(this.props.name + "Child render")
        return (
            <h2>Child Class</h2>
          
        )
    }
}

export default ChildClass;