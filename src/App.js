import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com/?apikey=e78b4829";

// const movie = {
//   Title: "Thor: Ragnarok",
//   Year: "2017",
//   imdbID: "tt3501632",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg",
// };

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Thor");
  }, []);

  const handleChangeSearchBar = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClickSearch = () => {
      searchMovies(searchTerm);
  }

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search your movie"
          value={searchTerm}
          onChange={handleChangeSearchBar}
        />
        <img src={SearchIcon} alt="search" onClick={handleClickSearch}/>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
