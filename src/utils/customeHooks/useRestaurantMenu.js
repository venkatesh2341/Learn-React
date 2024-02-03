
import { MENU_LINK } from "../constants";
import {useState, useEffect} from "react";
const useRestaurantMenu = (resId)=>{

    const [menuInfo, setMentInfo ]= useState(null);
    useEffect(()=>{
        fetchData()
    },[]);

    fetchData = async ()=>{
        const info = await fetch(MENU_LINK + resId);
        const json = await info.json();
        setMentInfo(json); 
    }
    return menuInfo;
}

export default useRestaurantMenu;