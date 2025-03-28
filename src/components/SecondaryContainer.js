import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    movies.nowPlayingMovies && movies.popularMovies && movies.topRated && movies.upcoming && (
      <div className='bg-black'>
      <div className='-mt-12 pl-12 relative z-20'>
        <MovieList title = {"Now Playing"} movies = {movies.nowPlayingMovies}/>
        <MovieList title = {"Popular"} movies = {movies.popularMovies}/>
        <MovieList title = {"Top Rated"} movies = {movies.topRated}/>
        <MovieList title = {"Upcoming"} movies = {movies.upcoming}/>
      </div>
    </div>
    )
  )
}

export default SecondaryContainer