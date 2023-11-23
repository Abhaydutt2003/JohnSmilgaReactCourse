import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as landingLoder } from "./pages/Landing";
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement:<Error></Error>,
    children: [
      {
        index:true,
        loader:landingLoder,
        errorElement:<SinglePageError></SinglePageError>,
        element: <Landing />,
      },
      {
        path: 'cocktail',
        element: <Cocktail />,
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);


const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
