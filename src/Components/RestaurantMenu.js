import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/customeHooks/useRestaurantMenu"
import ItemCard from "./ItemCard";
import {useParams} from "react-router-dom";
import {useState} from "react";
import ItemsCategoryCard from "./ItemCategoryCard";


const RestaurantMenu = () => {
    const {resId} = useParams();
    const menuInfo= useRestaurantMenu(resId);
  
   
    if(menuInfo === null)
    {
        return <Shimmer />
    }  
    const {name, costForTwoMessage, locality,} = menuInfo?.data?.cards[0]?.card?.card?.info;
    var itemsTypeList= menuInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    itemsTypeList= itemsTypeList.filter(item=> ( item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"  || item?.card?.card?.["@type"] ===  "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"))
    // console.log(itemsTypeList)
    return (
        <div className="restaurant-menu m-10">
            <h1 className="text-center font-bold text-4xl text-cyan-950">{name}</h1>
            <div className="menu-header my-2 border flex justify-center" >
                
                <h3 className="p-5 font-semibold"> {costForTwoMessage}</h3>
                <h3 className="p-5 font-semibold">{locality}</h3>
            </div>
            
       
            <ul className="items-list bg-purple-50 w-8/12 m-auto">
               {
                    itemsTypeList.map(itemType => 
                        (  
                            <ItemsCategoryCard key={itemType?.card?.card?.title} itemType={itemType}/>   
                        )
                    )
               }
            </ul>
        </div>
    )
}

export default RestaurantMenu;