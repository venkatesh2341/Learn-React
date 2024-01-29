
import { useRouteError } from "react-router-dom";

const Error = () => {
    const routeError= useRouteError();
    // console.log(routeError);
    return (
        <div>
            <h1>Oops..!</h1>
            <h3>Something went wrong !</h3>
            <h4>{routeError.status}</h4>
            <h4>{routeError.statusText}</h4>
        </div>
    )
}

export default Error;