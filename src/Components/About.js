import Owner from "./Owner";
import OwnerClass from "./OwnerClass";
import ParentClass from "./ParentClass";

const About= ()=>{
    return (
        <div >
            
            <h2 className="text-center font-semibold">AnVe App delivers your food from nearby restaurants</h2>
            {/* <Owner name="Venkatesh (Function)"/> */}
            <OwnerClass />
            
        </div>
    )
}

export default About;