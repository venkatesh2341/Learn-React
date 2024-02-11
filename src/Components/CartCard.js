import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";

const CartCard = ()=>{

    const cartItems= useSelector((store)=> store.cart.items)
    console.log(cartItems)
    return (
        <div className="CardCard">
            <div className="text-center p-5 my-10 border w-6/12 mx-auto">
                <h1 className="title font-bold text-lg text-red-300">Cart</h1>
                <div>
                    {
                        //  <ItemCard value={cartItems[1]?.card?.info?.id} itemCard={ cartItems[1]} />
                    cartItems.map(cartItem=> (
                        <ItemCard key={cartItem?.card?.info?.id} itemCard={ cartItem} />
                    ))

                    // itemType?.card?.card?.itemCards.map( itemCard => ( 
                    //     <ItemCard key={itemCard?.card?.info?.id} itemCard = {itemCard} />
                    // ))
                    }
                    
               </div>
            </div>
        </div>
    )
}

export default CartCard;