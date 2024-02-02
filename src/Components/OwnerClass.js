import React from "react";
class OwnerClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count: 1
        }
    }

    render(){
        return (

            <div className="owner-card">
                <h1>Count1 :  {this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count+1
                    });
                }}>Increase Count</button>
                
                <h1>Name: {this.props.name}</h1>
                <h2>Location : {this.props.location}</h2>
                <h3>Contact : @V.mail.com</h3>
            </div>
        )
    }
}

export default OwnerClass;