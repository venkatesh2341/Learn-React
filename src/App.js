import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestauarantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter , RouterProvider, Outlet} from "react-router-dom";


const AppLayout= () => {
    return (
        <div className="app-layout">
        <Header />
        <Outlet />
        </div>
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
                path: "/restaurant/:resId",
                element: <RestauarantMenu />
            }
        ] ,
        errorElement : <Error />
    }
    
])

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router= {appRouter} />);





