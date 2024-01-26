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
const nameStyle= {
    color: "red"
}

const RestoCard = (props) => {
    console.log(props)
    return (
        <div className="resto-card">
            <img className="resto-logo"  alt="resto-logo" src= "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/a390arrvxwcpzmrhozw3" />
            <h3 style={nameStyle} >{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.rating}</h4>
            <h4>28 Min</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className= "body">
            <div className= "search">
                <h3>Search</h3>
            </div>
            <div className= "resto-container">
                <RestoCard resName="Anu Kitchens" cuisine ="Biryani, Mandi, Tandoori"  rating="4.5 Rating" ></RestoCard>
                <RestoCard resName="VFC" cuisine ="Dosa, Idli, Parota"  rating="3.5 Rating" ></RestoCard>
                
            </div>
        </div>
    )
}

const AppLayout= () => {
    return (
        <div className="app-layout">
        <Header></Header>
        <Body></Body>
        </div>
    )
}

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);





