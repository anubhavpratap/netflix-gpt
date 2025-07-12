// src/components/Watchlist.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import Header from './Header';
import { clearWatchlist } from '../utils/movieSlice';

const Watchlist = () => {
  const watchlist = useSelector((store) => store.movies.watchlist);
  const dispatch = useDispatch();

  const handleClearWatchlist = () => {
    if (window.confirm("Are you sure you want to clear your entire watchlist?")) {
      dispatch(clearWatchlist());
    }
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <div className="pt-24 px-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">🎥 My Watchlist</h1>
          {watchlist.length > 0 && (
            <button
              onClick={handleClearWatchlist}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              🗑️ Clear Watchlist
            </button>
          )}
        </div>

        {watchlist.length === 0 ? (
          <p className="text-lg text-gray-400">Your watchlist is empty. Go add some movies!</p>
        ) : (
          <div className="flex flex-wrap gap-4">
            {watchlist.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
