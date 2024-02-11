import React, { useState } from "react";
import {LOGO_LINK} from "../utils/constants";
import { useState , useContext} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/customeHooks/useOnlineStatus"
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    let  [btnName, setBtnName]= useState( "Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser }= useContext(UserContext);
    //Subscribing to the Redux store using a Selector( useSelector Hook)
    const cartItems= useSelector((store)=> store?.cart?.items);


    return (
        <div className= "header flex justify-between border border-black border-1 h-28 my-2 bg-slate-100 shadow-orange-200 shadow-lg">
            <div className = "logo-container">
                <img 
                className="logo h-24 w-36 my-2" 
                src={LOGO_LINK} alt="Image not loaded" />
            </div>
            <div className = "nav-items ">
                <ul className="flex my-10 mx-10">
                    <li className="px-1 mx-1">
                        Online Status : {onlineStatus ? "✅"  : "❌"}
                    </li>
                    <li className="px-1 mx-1">
                        <Link to="/">Home</Link> 
                    </li>
                    <li className="px-1 mx-1">
                        <Link to="/about">About Us</Link> 
                        {/* <a href="/about" >About Us</a> */}
                    </li>
                    <li className="px-1 mx-1">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-1 mx-1">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-1 mx-1 ">
                        <Link to="/CartCard"> <span className=" rounded-sm  text-center bg-green-100">{cartItems.length} </span>   Cart </Link>
                    </li>
                    <li className="px-1 mx-1">
                        <button className="login-btn" onClick={ ()=>{
                            setBtnName((btnName==="Login")?"Logout":"Login");
                        }}>{btnName}</button>
                    </li>
                    <li>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;