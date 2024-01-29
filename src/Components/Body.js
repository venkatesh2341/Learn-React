import RestoList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
    // console.log("body loading");
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText]  = useState("");
    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async ()=>{
        const info = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4400802&lng=78.3489168&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await info.json();
        console.log(json); 
        //optional chaining
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

   
    return (listOfRestaurants.length === 0)? (<Shimmer/>) : (
        <div className= "body">
            <div className= "filter">
               
                <div className="search">
                    <input type="text"  value = {searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                       
                    }} />
                    <button className="search-btn" onClick={()=>{
                        const searchedRestaurantsList= listOfRestaurants.filter(restaurant => restaurant.info.cuisines.join("").toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(searchedRestaurantsList);
                    }}>Search </button>
                </div>

                <button className="filter-btn"  
                    onClick={ () => {
                        let topRatedList = listOfRestaurants.filter(restaurant => restaurant.info.avgRating > 4.2)
                        setListOfRestaurants(topRatedList);
                    } }
                >Top Rated Restaurants</button>
            </div>
            <div className= "resto-container">
            {
                filteredRestaurants.map(
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