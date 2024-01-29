import RestoList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";

const Body = () => {
    let [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async ()=>{
        const info = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4400802&lng=78.3489168&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await info.json();
        console.log(info); 
        setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

    };

    return (
        <div className= "body">
            <div className= "filter">
                <button className="filter-btn"  
                    onClick={ () => {
                        let topRatedList = listOfRestaurants.filter(restaurant => restaurant.info.avgRating > 4.2)
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