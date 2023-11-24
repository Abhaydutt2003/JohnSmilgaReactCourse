import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import axios from 'axios';
import SearchForm from "../components/SearchForm";
const cocktailSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async ({request})=>{
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get('search') || '';
    const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
    return { drinks: response.data.drinks, searchTerm };
}

export default () => {
    const data = useLoaderData();
    const {searchTerm,drinks} = data;
    return (
        <>
        <SearchForm searchTerm = {searchTerm}></SearchForm>
        <CocktailList drinks = {drinks}></CocktailList>
        </>
    );
};
  