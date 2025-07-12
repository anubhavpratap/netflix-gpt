import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCurrent, addWatchlist, removeFromWatchlist } from '../utils/movieSlice';

const MovieCard = ({ movie }) => {
  const posterPath = movie.poster_path;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const watchlist = useSelector((store) => store.movies.watchlist);
  const isInWatchlist = watchlist.some((item) => item.id === movie.id);

  if (!posterPath) return null;

  const handleCardClick = () => {
    dispatch(addCurrent(movie));
    navigate('/movieDetails');
  };

  const handleWatchlistToggle = (e) => {
    e.stopPropagation(); // Prevent card click
    if (isInWatchlist) {
      dispatch(removeFromWatchlist(movie));
    } else {
      dispatch(addWatchlist(movie));
    }
  };

  return (
    <div
      className="relative w-36 md:w-48 pr-4 hover:cursor-pointer group"
      onClick={handleCardClick}
    >
      <img
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
        className="rounded-md shadow-lg"
      />

      <button
        onClick={handleWatchlistToggle}
        className="absolute bottom-2 left-2 px-2 py-1 text-xs md:text-sm bg-purple-700 text-white rounded-md opacity-0 group-hover:opacity-100 transition duration-300"
      >
        {isInWatchlist ? '➖ Remove' : '➕ Watchlist'}
      </button>
    </div>
  );
};

export default MovieCard;
