import PropTypes from "prop-types";
import "../../assets/scss/MoviesDetails.scss";
import { useState, useEffect } from "react";
import StarRatings from "./StarRatings";
import styled from "styled-components";
import noimage from "../../assets/images/no-image.jpeg";
import { LoadingSpinner } from "../common/Loading";

// Define the styled component for the "Add to Watchlist" button
const AddToWatchButton = styled.button`
    background-color: #af70ff;
    color: #eee;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #ba70fa;
    } `
  ;

function MoviesDetails({ selectedId, onAddToWatch, onCloseMovie, watched }) {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [userRatings, setUserRatings] = useState(0);
  // const [addToWatched, setAddToWatched] = useState(false);
  // const selectedMovie = movies.find((movie) => movie.imdbID === selectedId) || null;
  // destructuring the movie object
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    Language: lang,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
    Type: type
  } = movie;

  useEffect(() => {
    const KEY = "5841f519";
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();
        // console.log('data: ', () => data);

        if (data.Response === "True") {
          setMovie(data);
          // setError(null); // Clear error when data is fetched successfully
        } else {
          setMovie([]);
          // setError(data.Error);
        }
      } catch (err) {
        // setError("Network error or API request failed."); // Handle network or API errors
        // console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [selectedId]);

  const handleAddToWatch = () => {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      genre,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRatings,
      // countRatingDecisions: countRef.current,
    };
    onAddToWatch(newWatchedMovie);
    // setAddToWatched(true);

    // const add = document.getElementById(`add-btn-${movieId}`);
    // add.textContent = "Added to watched!";
    // add.style.backgroundColor = "grey";
    // add.disabled = true;
  }

  // Reset addedToWatched when selectedId changes or when the component unmounts
  // useEffect(() => {
  //   setAddToWatched(false);
  // }, [selectedId]);

  const isAddedToWatched = watched.some(movie => movie.imdbID === selectedId);
  // const isAddedToWatched = watched.hasOwnProperty(selectedId);

  // fixing card-overflow issue by adding classname on overflowed
  // const cardInfoRef = useRef(null);
  // useEffect(() => {
  //   if (cardInfoRef.current) {
  //     if (cardInfoRef.current.scrollHeight > cardInfoRef.current.clientHeight) {
  //       cardInfoRef.current.classList.add("overflowed");
  //     }
  //   }
  // }, []);

  return (
    loading ? (<LoadingSpinner />) : (
      <div id='movie-details'>
        <button id='back-btn' onClick={onCloseMovie}>
          ←
        </button>
        <div className='movie-card'>
          <img
            src={movie.Poster == "N/A" ? noimage : movie.Poster}
            alt={`${title} poster`}
          />
          <div className='card-info'>
            <h2 className="title">{title}</h2>
            <div className="crd-details">
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{lang} &bull; {type}</p>
              <p>
                <span>⭐️ </span>
                {imdbRating} IMDB Rating
              </p>
              <p>{genre}</p>
            </div>

          </div>
        </div>
        <div className="details">
          <div className="buttons">
            <StarRatings imdbID={selectedId} max={10} onSetRatings={setUserRatings} />
            {isAddedToWatched ?
              (<strong>Added to watched!</strong>)
              : (
                <AddToWatchButton id={`add-btn-${movie.imdbID}`} onClick={handleAddToWatch}>Add to watched</AddToWatchButton>
              )}
          </div>
          <div className="movie-text">
            <p> <>{plot}</></p><br />
            <p><strong>{actors}</strong></p><br />
            <p><strong>Directed by: </strong>{director}</p>
          </div>
        </div>
      </div>
    )
  );
}

MoviesDetails.propTypes = {
  selectedId: PropTypes.string.isRequired,
  onAddToWatch: PropTypes.func.isRequired,
  onCloseMovie: PropTypes.func.isRequired,
  watched: PropTypes.array
};

export default MoviesDetails;
