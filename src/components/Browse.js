import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import useUpcoming from '../hooks/useUpcoming';
import GptSearch from './GptSearch';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcoming();
  const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
  if(!movies) return;
  const mainMovie = movies[0];
  return (
    <div>
      <Header/>
      {
        showGptSearch ? (<GptSearch/>):
                        (
                          <>
                            <MainContainer movie={mainMovie}/>
                            <SecondaryContainer/>
                          </>
                          
                        )
      } 
    </div>
  )
}

export default Browse;