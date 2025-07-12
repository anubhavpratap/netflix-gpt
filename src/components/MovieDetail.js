import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import MainContainer from './MainContainer';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { API_OPTIONS } from '../utils/constants';
import MovieList from './MovieList';
import MovieHeader from './MovieHeader';
import { addWatchlist, removeFromWatchlist } from '../utils/movieSlice';
//import { toggleGptSearchView } from '../utils/gptSlice';

const MovieDetail = () => {
  const movie = useSelector((store) => store.movies?.current);
  const navigate = useNavigate();
  //const dispatch = useDispatch();
  
  const [details, setDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [similar, setSimilar] = useState([]);

  const watchlist = useSelector((store) => store.movies.watchlist);
  const dispatch = useDispatch();

  const isInWatchlist = watchlist.some((item) => item.id === movie.id);

  const handleWatchlistClick = () => {
    if (isInWatchlist) {
      dispatch(removeFromWatchlist(movie.id));
    } else {
      dispatch(addWatchlist(movie));
    }
  };

  useEffect(() => {
    if (!movie) return;

    const fetchDetails = async () => {
      try {
        const [detailsRes, creditsRes, similarRes] = await Promise.all([
          fetch(`https://api.themoviedb.org/3/movie/${movie.id}`,API_OPTIONS),
          fetch(`https://api.themoviedb.org/3/movie/${movie.id}/credits`,API_OPTIONS),
          fetch(`https://api.themoviedb.org/3/movie/${movie.id}/similar`,API_OPTIONS),
        ]);

        const detailsData = await detailsRes.json();
        const creditsData = await creditsRes.json();
        const similarData = await similarRes.json();

        setDetails(detailsData);
        setCast(creditsData.cast?.slice(0, 5));
        setSimilar(similarData.results?.slice(0, 6));
      } catch (error) {
        console.error('Failed to fetch movie detail info:', error);
      }
    };

    fetchDetails();
  }, [movie]);

  if (!movie) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-center px-4">
        <p className="text-xl mb-4">🎬 Movie not found. Please go back and select a movie.</p>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
        >
          ⬅ Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <div className="pt-20 px-4 md:px-12">
        <MovieHeader movie={movie} />
        <button
          onClick={handleWatchlistClick}
          className={`mt-4 px-4 py-2 rounded-md font-medium ${
            isInWatchlist
              ? 'bg-red-600 hover:bg-red-700'
              : 'bg-purple-700 hover:bg-purple-800'
          }`}
        >
          {isInWatchlist ? '➖ Remove from Watchlist' : '➕ Add to Watchlist'}
        </button>

        {details && (
          <div className="mt-8">
            <p className="text-lg">
              ⭐ <strong>Rating:</strong> {details.vote_average.toFixed(1)}
            </p>
            <p className="text-lg mt-2">
              🎭 <strong>Genres:</strong> {details.genres.map((g) => g.name).join(', ')}
            </p>
          </div>
        )}

        {/* Cast Section */}
        {cast.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">Top Cast</h2>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {cast.map((actor) => (
                <div key={actor.id} className="min-w-[120px] text-center">
                  <img
                    src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                    alt={actor.name}
                    className="w-24 h-32 object-cover rounded"
                  />
                  <p className="mt-2 text-sm">{actor.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Similar Movies Carousel */}
        {similar.length > 0 && (
          <MovieList title = {"Similar Movies"} movies = {similar}/>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;

