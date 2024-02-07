import RestaurantCard , {withPromotedLabel}from "./RestaurantCard";
import { RESTAURANT_LINK } from "../utils/constants";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/customeHooks/useOnlineStatus";
import UserContext from "../utils/UserContext";
import {Link} from "react-router-dom";
import { useState , useEffect , useContext} from "react";


const Body = ({changeUserName}) => {
    // console.log("body loading");
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText]  = useState("");
    const PromotedRestaurant = withPromotedLabel(RestaurantCard);
    const {loggedInUser,setUserName} = useContext(UserContext);
    useEffect(()=>{
        fetchData();
    },[])

   
    const fetchData = async ()=>{
        const info = await fetch(RESTAURANT_LINK);
        const json= await info.json();
        //console.log(json); 
        //optional chaining
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


        
    };

    const onlineStatus = useOnlineStatus();
    //console.log(onlineStatus)
    if(onlineStatus === false)
    {
        return (
            <h1>You are offline..! Check the internet connection.</h1>
        )
    }
   
    return (listOfRestaurants.length === 0)? (<Shimmer/>) : (
        <div className= "body">
            <div className= "filter flex my-5">
               
                <div className="search m-2">
                    <input className="bg-slate-200 border-2" type="text"  value = {searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                        const searchedRestaurantsList= listOfRestaurants.filter(restaurant => restaurant.info.cuisines.join("").toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(searchedRestaurantsList);
                       
                    }} />
                    <button className="search-btn px-3 py-0 mx-3 bg-green-200" onClick={()=>{
                        const searchedRestaurantsList= listOfRestaurants.filter(restaurant => restaurant.info.cuisines.join("").toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(searchedRestaurantsList);
                    }}>Search </button>
                </div>

                <button className="filter-btn px-1 py-0 my-2 bg-green-200"  
                    onClick={ () => {
                        let topRatedList = listOfRestaurants.filter(restaurant => restaurant.info.avgRating > 4.2)
                        setFilteredRestaurants(topRatedList);
                    } }
                >Top Rated Restaurants</button>
                
                <input placeholder="Enter user name" className="mx-3 px-3 py-0 border-2" value={loggedInUser} onChange={(e)=>{
                            setUserName(e.target.value)
                }}></input>

            </div>
            <div className= "resto-container flex flex-wrap">
            {
                filteredRestaurants.map(
                    (restaurant) => 
                        (
                          <Link  key={restaurant.info.id} to= {"/restaurant/" + restaurant.info.id }> 
                          { restaurant.info.avgRating < 4.2  ? (<PromotedRestaurant restoData= {restaurant} />) :  (<RestaurantCard restoData= {restaurant} />) }
                          {/* <RestaurantCard restoData= {restaurant} /> */}
                          </Link>
                        )
                )
            }
            </div>                   
        </div>            
    )                           
}                  

export default Body;