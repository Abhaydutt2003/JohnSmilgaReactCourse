import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { loader as landingLoder } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";
import { action as newsletterAction } from "./pages/NewsLetter";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError,
} from "./pages/index";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: landingLoder,
        errorElement: <SinglePageError></SinglePageError>,
        element: <Landing />,
      },
      {
        path: "cocktail",
        element: <Cocktail />,
      },
      {
        path: "cocktail/:id",
        loader: singleCocktailLoader,
        element: <Cocktail />,
        errorElement: <SinglePageError />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
        action: newsletterAction,
        errorElement: <SinglePageError />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <SinglePageError />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};
export default App;
