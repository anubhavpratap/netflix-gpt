import React from 'react';

const MovieHeader = ({ movie }) => {
  const { original_title, overview, poster_path } = movie;

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-gradient-to-r from-black via-gray-900 to-black rounded-lg p-6 shadow-2xl">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={original_title}
        className="w-64 rounded-xl shadow-lg transition-transform hover:scale-105 duration-300"
      />
      <div className="text-white max-w-3xl">
        <h1 className="text-4xl font-extrabold mb-4 leading-snug">
          {original_title}
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          {overview}
        </p>
      </div>
    </div>
  );
};

export default MovieHeader;
