import styles from "./App.module.css";
import SearchBar from "./components/SearchBar/SearchBar";
import MovieGrid from "./components/MovieGrid/MovieGrid";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import MovieModal from "./components/MovieModal/MovieModal";
import type { Movie } from "./types/movie";
import { useState } from "react";

function App() {
  const [error, setError] = useState(false);

  return (
    <div className={styles.app}>
      <SearchBar />

      {error ? (
        <ErrorMessage message="There was an error, please try again..." />
      ) : (
        <MovieGrid />
      )}
      <Loader />
      <MovieModal />
    </div>
  );
}

export default App;
