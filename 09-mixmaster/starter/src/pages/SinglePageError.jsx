import { useRouteError } from "react-router-dom"

export default ()=>{
    const error = useRouteError();
    console.log(error);
    return <h2>{error.message}</h2>;
}