import React, { useState } from "react";
import {LOGO_LINK} from "../utils/constants";
import { useState } from "react";

const Header = () => {
    let  [btnName, setBtnName]= useState( "Login");
    return (
        <div className= "header">
            <div className = "logo-container">
                <img 
                className="logo"
                src={LOGO_LINK} alt="Image not loaded" />
            </div>
            <div className = "nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li>
                        <button className="login-btn" onClick={ ()=>{
                            setBtnName((btnName==="Login")?"Logout":"Login");
                        }}>{btnName}</button>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Header;