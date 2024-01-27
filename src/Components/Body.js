import RestoList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
    let [listOfRestaurants, setListOfRestaurants] = useState(RestoList);
    return (
        <div className= "body">
            <div className= "filter">
                <button className="filter-btn"  
                    onClick={ () => {
                        let topRatedList = listOfRestaurants.filter(restaurant => restaurant.info.avgRating >= 4)
                        setListOfRestaurants(topRatedList);
                    } }
                >Top Rated Restaurants</button>
            </div>
            <div className= "resto-container">
            {
                listOfRestaurants.map(
                    (restaurant) => 
                        (
                            <RestaurantCard key={restaurant.info.id} restoData= {restaurant} />
                        )
                )
            }
            </div>
        </div>
    )
}

export default Body;