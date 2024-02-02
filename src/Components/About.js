import Owner from "./Owner";
import OwnerClass from "./OwnerClass";

const About= ()=>{
    return (
        <div >
            <h1>About</h1>
            <h2>AnVe App delivers your food from nearby restaurants</h2>
            {/* <Owner name="Venkatesh (Function)"/> */}
            <OwnerClass name="Karri Venkatesh (Class)" location = "Vizag"/>
        </div>
    )
}

export default About;