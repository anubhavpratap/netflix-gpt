import Login from './login';
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
//import { auth } from '../utils/firebase';
import MovieDetail from './MovieDetail';
import Watchlist from './WatchList';


const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "/browse",
      element: <Browse/>,
    },
    {
      path: "/movieDetails",
      element: <MovieDetail/>,
    },
    {
      path: "/watchlist",
      element: <Watchlist/>

    },
  ]);
  
  return (
    <div>
        <RouterProvider router = {appRouter}/>
    </div>
  );
}

export default Body;