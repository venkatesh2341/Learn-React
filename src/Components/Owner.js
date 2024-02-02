import { useState } from "react"



const Owner = (props)=>{

    const [count, setCount] = useState(1);
   
    return (

        <div className="owner-card">
            <h1>Count1 :  {count}</h1>
            <button onClick={()=>{
                 setCount(count+1);
                }}>Increase Count</button>
            <h1>Name: {props.name}</h1>
            <h2>Location : Hyd</h2>
            <h3>Contact : @V.mail.com</h3>
        </div>
    )
}

export default Owner;