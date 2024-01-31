import Menu from "../utils/MenuMockData"
import Shimmer from "./Shimmer";
import {useEffect , useState} from "react";
import { MENU_LINK } from "../utils/constants";
import {useParams} from "react-router-dom";




const RestaurantMenu = () => {
   
    const [menuInfo, setMenuInfo] = useState(null);
    const {resId} = useParams();
 
  
   
   
    useEffect( ()=>{
        fetchData()
    }, [])    
   
    const fetchData = async ()=>{
       
        const info= await fetch(MENU_LINK + resId);
        const json= await info.json();
        console.log(json);
        setMenuInfo(json?.data?.cards);
    }       
    if(menuInfo === null)
    {
        return <Shimmer />
    }  
    const {name, costForTwoMessage, locality,} = menuInfo[0]?.card?.card?.info;
    const itemsList= menuInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards ;
    return (
        <div className="restaurant-menu">
            <h1>{name}</h1>
            <h3>{costForTwoMessage}</h3>
            <h3>{locality}</h3>
            <h3>Menu</h3>
            <ul className="items-list">
               {
                 itemsList.map((item) =>  (<li key = {item?.card?.info?.id}>{item?.card?.info?.name} - Rs: {item?.card?.info?.price/100}</li>) )
               }
            </ul>
        </div>
    )
}

export default RestaurantMenu;