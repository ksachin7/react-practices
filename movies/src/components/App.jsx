import { useState } from "react";
import "../assets/scss/App.scss";
import { Loading } from "./common/Loading";
import Navbar from "./common/Navbar";
import MoviesDetails from "./movie-details/MoviesDetails";
import MoviesList from "./movie-list/MoviesList";
import WatchedList from "./watched-info/WatchedList";
import WatchedSummary from "./watched-info/WatchedSummary";

import { useMovies } from "./hooks/useMovies";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [movies, loading, error] = useMovies(query);
  const [watched, setWatched] = useLocalStorage([], "watched",);
  // console.log('App', watched);

  const handleSelectMovie = (id) => {
    // toggle the selection of a movie (selecting/deselecting)
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  };

  // console.log(selectedId);
  // console.log("m", movies);

  const handleCloseMovie = () => {
    setSelectedId(null);
  };

  const handleWatched = (movie) => {
    setWatched(() => [...watched, movie]);
  }

  const handleRemoveWatched = (imdbID) => {
    const updatedWatched = watched.filter((movie) => movie.imdbID !== imdbID);
    setWatched(updatedWatched);
  }

  return (
    <div className="body">
      <Navbar
        query={query}
        setQuery={setQuery}
        movies={movies}
      />
      {loading ? (
        <Loading />
      ) : error ? (
        <div className='err'>❌ Error: {error}</div>
      ) : query.trim() === "" ? null : (
        <div className='grid-container'>
          <aside className='aside'>
            <MoviesList
              movies={movies}
              onSelectMovie={handleSelectMovie}
            />
          </aside>
          <div className='movie-details-container'>
            {selectedId ? (
              <MoviesDetails
                selectedId={selectedId}
                onAddToWatch={handleWatched}
                watched={watched}
                onCloseMovie={handleCloseMovie}
              />
            ) : (
              <>
                <WatchedSummary watched={watched} />
                <WatchedList
                  watched={watched}
                  onSelectMovie={handleSelectMovie}
                  onRemove={handleRemoveWatched}
                />
              </>
            )
            }
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
