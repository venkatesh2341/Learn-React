// const heading = React.createElement("h1",{id:"abc"}, "Hello World by React" );
// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

import React from "react";
import ReactDOM from "react-dom";


const heading = React.createElement("h1", {id:"h1"}, "Im react heading")
const jsxHeading= <h1>
    Im jsx headdddding
    <br></br>
    <span> hellow boy</span>
</h1>

console.log(heading)
console.log(jsxHeading)

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

