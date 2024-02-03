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
        <div className="restaurant-menu m-10">
            <h1 className="text-center font-bold text-4xl text-cyan-950">{name}</h1>
            <div className="menu-header my-2 border flex justify-center" >
                
                <h3 className="p-5 font-semibold"> {costForTwoMessage}</h3>
                <h3 className="p-5 font-semibold">{locality}</h3>
            </div>
            
       
            <ul className="items-list bg-purple-50">
               {
                 itemsList.map((item) =>  (
                 <li className=" p-3 m-2 text-center cursor-pointer" key = {item?.card?.info?.id}>
                    {item?.card?.info?.name} - Rs: {item?.card?.info?.price/100}</li>) 
                 )
               }
            </ul>
        </div>
    )
}

export default RestaurantMenu;