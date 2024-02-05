import { CDN_LINK } from "../utils/constants";
import {useState} from "react";

const ItemCard= ({itemCard})=>{
    const {name, isVeg, price, defaultPrice, description, imageId} = itemCard?.card?.info
    return (
        <div className ="text-left  border-b-2 p-2 m-2 flex "> 
            <div className="w-9/12">
                <div className="font-semibold">{name} <span>{isVeg?"🟩":"🟥"}</span> </div>
                <div className="">₹ {price /100 || defaultPrice /100  }</div>
                <p className="font-extralight text-sm my-2">{itemCard?.card?.info?.description} </p>
            </div>
            <div className="w-3/12 ">
               
                {imageId  && <img className="h-20 w-28 mx-auto rounded-md" src={CDN_LINK + imageId}  alt = "Item Image"/>}
                <div className="mx-auto text-center">
                    <button className= "rounded-md bg-white text-green-400  ">Add +</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCard;