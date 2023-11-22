import { useLoaderData } from "react-router-dom";

export const loader = ()=>{
    return 'something';
}

export default () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <h2>Landing page</h2>
    );
};
  