import React, { useState, useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCurrent } from "../utils/movieSlice";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length < 2) {
        setSuggestions([]);
        return;
      }

      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${query}`,
          API_OPTIONS
        );
        const data = await res.json();
        setSuggestions(data.results.slice(0, 5)); // Top 5 suggestions
      } catch (error) {
        console.error("Error fetching movie suggestions:", error);
      }
    };

    const timer = setTimeout(fetchSuggestions, 300); // debounce
    return () => clearTimeout(timer);
  }, [query]);

  const handleSuggestionClick = (movie) => {
    dispatch(addCurrent(movie));
    navigate("/movieDetails");
    setQuery("");
    setSuggestions([]);
  };

  return (
    <div className="relative w-full md:w-96 mx-auto">
      <input
        type="text"
        className="w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 bg-white text-black mt-1 rounded-md overflow-hidden shadow-md z-50">
          {suggestions.map((movie) => (
            <li
              key={movie.id}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSuggestionClick(movie)}
            >
              {movie.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
