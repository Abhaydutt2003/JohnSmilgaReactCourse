import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SearchForm from "../components/SearchForm";
const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    },
  };
};

export const loader = (queryClient)=> async({request})=>{
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get('search') || '';
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
    return {searchTerm};
}

export default () => {
  const data = useLoaderData();
  const { searchTerm } = data;
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));
  return (
    <>
      <SearchForm searchTerm={searchTerm}></SearchForm>
      <CocktailList drinks={drinks}></CocktailList>
    </>
  );
};
