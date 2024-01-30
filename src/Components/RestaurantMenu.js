import Menu from "../utils/MenuMockData"
import {useEffect} from "react";






const RestauarantMenu = () => {
    
   

    // useEffect( () => {
    //     fetchResturantData()
    // } , []);

    // fetchResturantData = async () =>{

    //     const info = await fetch("https://www.google-analytics.com/j/collect?v=1&_v=j101&a=1220655802&t=pageview&_s=1&dl=https%3A%2F%2Fwww.swiggy.com%2Frestaurants%2Fpista-house-restaurant-and-bakery-kondapur-hyderabad-27447&ul=en-gb&de=UTF-8&dt=Pista%20House%20Restaurant%20%26%20Bakery%20%7C%20Home%20delivery%20%7C%20Order%20online%20%7C%20Kondapur%20Kondapur%20Hyderabad&sd=30-bit&sr=1440x900&vp=1440x476&je=0&_u=QACAAEABAAAAACAAI~&jid=884404692&gjid=1735543093&cid=1304770878.1706267253&uid=39424326&tid=0&_gid=1372853354.1706437063&_r=1&_slc=1&gtm=45He41t0h2n81MJV7Q8Qv78036788&gcd=11l1l1l1l1&dma=0&z=999237191");
    //     const json = await info.json();
    //     console.log(info);
    // }

    return (
        <div className="restaurant-menu">
            <h1>{Menu.name}</h1>
            <h3>{Menu.Rating}</h3>
            <h3> Menu</h3>
            <ul className="items-list">
               {
                Menu.Items.map(item => (<li  key = {item.id } >{item.foodName} - {item.cost}</li>))
               }
            </ul>
        </div>
    )
}

export default RestauarantMenu;