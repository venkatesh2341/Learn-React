// const heading = React.createElement("h1",{id:"abc"}, "Hello World by React" );
// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

import React from "react";
import ReactDOM from "react-dom";


const MainTitle = <h1>Platinum Fish</h1>
const TitleCard = ()=>(
    <div>
       
        <h1>Gold Fish</h1>
    </div>
)
let num= 788;
const HeadingComponent = () =>
{ 
    return (
     (
        <div>
            {MainTitle}
            <TitleCard > </TitleCard>
            <TitleCard />
            {TitleCard()}
            <h1>React functional component</h1>
        </div>
    
    )
)
     }
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);



// root.render(HeadingReact)
