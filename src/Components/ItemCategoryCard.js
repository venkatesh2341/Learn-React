import ItemCard from "./ItemCard";
import {useState} from "react"

const ItemsCategoryCard = ({itemType})=>{

    
    const [hideItems, setHideItems] = useState(true);
    const [hideButton , setHideButton] = useState("🔽");
    return (
        <li key={itemType?.card?.card?.title} className= "text-center my-4 p-2 border-2 shadow-lg "> 
        <div className="justify-between flex cursor-pointer" onClick={()=>{
            if(itemType?.card?.card?.itemCards?.length > 0)
            setHideItems(!hideItems);
            setHideButton(hideButton=== "🔽" ? "🔼" : "🔽")
        }}>
            <div className="font-bold"> {itemType?.card?.card?.title} ({itemType?.card?.card?.itemCards?.length || 0}) </div>
            <div>{hideButton}</div>
        </div>
        { hideItems=== false &&  <div className="items-list">
            {
                itemType?.card?.card?.itemCards.map( itemCard => ( 
                    <ItemCard key={itemCard?.card?.info?.id} itemCard = {itemCard} />
                ))
            }
        </div>
        }
        </li>
    )
}

export default ItemsCategoryCard;