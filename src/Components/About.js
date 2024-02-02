import Owner from "./Owner";
import OwnerClass from "./OwnerClass";
import ParentClass from "./ParentClass";

const About= ()=>{
    return (
        <div >
            <h1>About</h1>
            <h2>AnVe App delivers your food from nearby restaurants</h2>
            {/* <Owner name="Venkatesh (Function)"/> */}
            {/* <OwnerClass name="Karri Venkatesh (Class)" location = "Vizag"/> */}
            <ParentClass />
        </div>
    )
}

export default About;