import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import MovieGrid from "./components/MovieGrid/MovieGrid";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import MovieModal from "./components/MovieModal/MovieModal";
import type { Movie } from "./types/movie";
import { useState } from "react";

function App() {
  return (
    <>
      <SearchBar />
      <MovieGrid />
      <Loader />
      <ErrorMessage />
      <MovieModal />
    </>
  );
}

export default App;
