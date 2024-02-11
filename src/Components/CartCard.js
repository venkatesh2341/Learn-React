import { useSelector, useDispatch } from "react-redux";
import ItemCard from "./ItemCard";
import { clearItems } from "../utils/Redux/cartSlice";

const CartCard = ()=>{

    const cartItems= useSelector((store)=> store.cart.items)
    const dispatch = useDispatch();
    console.log(cartItems)
    return (
        <div className="CardCard">
            <button className="p-2 m-2 bg-black text-white rounded-lg shadow-lg" onClick={()=>{
                    dispatch(clearItems())
            }}>Clear Cart</button>
            <div className="text-center p-5 my-10 border w-6/12 mx-auto">
                <h1 className="title font-bold text-2xl text-red-300 border-b-4">Cart</h1>
                {
                   cartItems.length ===0 && <h1 className="my-10 p-2 font-bold bg-red-100 rounded-3xl">Cart is empty..! Please add few items</h1>
                }
                <div className="py-4">
                    {
                    cartItems.map(cartItem=> (
                        <ItemCard key={cartItem?.card?.info?.id} itemCard={ cartItem} cartFlag={true}/>
                    ))

                    
                    }
                    
               </div>
            </div>
        </div>
    )
}

export default CartCard;