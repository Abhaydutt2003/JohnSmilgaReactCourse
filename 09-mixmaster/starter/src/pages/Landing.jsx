import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import axios from 'axios';
const cocktailSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async ()=>{
    const searchTerm = 'margarita';
    const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
    return {drinks:response.data.drinks,searchTerm};
}

export default () => {
    const data = useLoaderData();
    const {searchTerm,drinks} = data;
    return (
        <CocktailList drinks = {drinks}></CocktailList>
    );
};
  