import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/customeHooks/useRestaurantMenu"

const RestaurantMenu = () => {
    const {resId} = useParams();
    const menuInfo= useRestaurantMenu(resId);
    if(menuInfo === null)
    {
        return <Shimmer />
    }  
    const {name, costForTwoMessage, locality,} = menuInfo?.data?.cards[0]?.card?.card?.info;
    const itemsList= menuInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards ;
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