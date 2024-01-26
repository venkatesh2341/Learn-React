import React from "react";
import ReactDOM from "react-dom";

/*
 header:
    - logo
    - nav-items
 body:
    restaurants container
        -restaurants cards
 footer:
    contacts
    links
*/

const Header = () => {
    return (
        <div className= "header">
            <div className = "log-container">
                <img 
                className="logo"
                src="https://marketplace.canva.com/EAFowsrK6x8/1/0/1600w/canva-red-and-yellow-catering-flat-illustrative-food-place-logo-rYbQJ_qtaz8.jpg" alt="Image not loaded" />
            </div>
            <div className = "nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const AppLayout= () => {
    return (
        <Header></Header>
    )
}

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);





