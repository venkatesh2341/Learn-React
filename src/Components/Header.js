import React, { useState } from "react";
import {LOGO_LINK} from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/customeHooks/useOnlineStatus"

const Header = () => {
    let  [btnName, setBtnName]= useState( "Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className= "header">
            <div className = "logo-container">
                <img 
                className="logo"
                src={LOGO_LINK} alt="Image not loaded" />
            </div>
            <div className = "nav-items">
                <ul>
                    <li>
                        Online Status : {onlineStatus ? "✅"  : "❌"}
                    </li>
                    <li>
                        <Link to="/">Home</Link> 
                    </li>
                    <li>
                        <Link to="/about">About Us</Link> 
                        {/* <a href="/about" >About Us</a> */}
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
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