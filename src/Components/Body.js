import RestoList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
        <div className= "body">
            <div className= "search">
                <h3>Search</h3>
            </div>
            <div className= "resto-container">
            {
                RestoList.map(
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