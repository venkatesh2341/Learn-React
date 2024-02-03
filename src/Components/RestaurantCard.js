import {CDN_LINK} from "../utils/constants";

const RestaurantCard = (props) => {
    const {restoData}= props;
    
    const {
        name,
        cloudinaryImageId, 
        cuisines, 
        costForTwo,
        avgRating } = restoData?.info;
    return (
        <div className="resto-card w-52 mx-3 my-5 p-3 rounded-lg bg-gray-50  hover:bg-slate-200 ">
            <img className="resto-logo m-auto w-56 h-36"  alt="resto-logo" src= {CDN_LINK+ cloudinaryImageId}/>
            <h3 className="font-bold my-2">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>Rating : {avgRating}</h4>
            <h4>Delivery Time : {restoData.info.sla.deliveryTime}</h4>
        </div>
    )
}

export default RestaurantCard;