import React , {lazy, Suspense, useState}from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import UserContext from "./utils/UserContext";
// import RestaurantMenu from "./Components/RestaurantMenu";
// import Grocery from "./Components/Grocery";
import { createBrowserRouter , RouterProvider, Outlet} from "react-router-dom";
const RestaurantMenu = lazy(()=> {return import("./Components/RestaurantMenu")})
const Grocery = lazy(()=> import("./Components/Grocery"))

const AppLayout= () => {

    const [userName, setUserName] = useState("Venky")
    
    return (
        <UserContext.Provider value= {{loggedInUser: userName, setUserName}}>
            <div className="app-layout">
            
                <Header />
            
                <Outlet />
            </div>
        </UserContext.Provider>
    )
}

const appRouter= createBrowserRouter([
    {
        path: "/",
        element : <AppLayout />,
        children:[
            {
                path : "/" ,
                element : <Body />
            },
            {
                path : "/about" ,
                element : <About />
            },
            {
                path: "/contact",
                element : <Contact/>,
            },
            {
                path: "/grocery",
                element: (<Suspense fallback={<h1>Loading Grocery...</h1>}><Grocery/></Suspense>)
            },
            {
                path: "/restaurant/:resId",
                element: (<Suspense fallBack={<h1>Loading Menu...</h1>}><RestaurantMenu/></Suspense> )
            }
        ] ,
        errorElement : <Error />
    }
    
])

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router= {appRouter} />);





