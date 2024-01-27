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
        <div className="resto-card">
            <img className="resto-logo"  alt="resto-logo" src= {CDN_LINK+ cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>Rating : {avgRating}</h4>
            <h4>Delivery Time : {restoData.info.sla.deliveryTime}</h4>
        </div>
    )
}

export default RestaurantCard;