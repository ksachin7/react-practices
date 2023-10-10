// import React from "react";
import PropTypes from "prop-types";
import "../../assets/scss/MoviesList.scss";
import noimage from "../../assets/images/no-image.jpeg";

function MoviesList({ movies, onSelectMovie }) {
  return (
    <ul className='list'>
      {movies?.map((movie) => (
        <li
          className='list-item'
          key={movie.imdbID}
          onClick={() => onSelectMovie(movie.imdbID)}
        >
          <img
            className='poster-sm'
            style={{ width: 50 }}
            src={movie.Poster == "N/A" ? noimage : movie.Poster}
            alt={`${movie.Title} poster`}
          ></img>
          <div className='movie-info'>
            <h4 className='title'>{movie.Title}</h4>
            <p>Category: {movie.Type}</p>
            <p>
              <span>🗓 </span>
              <span>{movie.Year}</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  onSelectMovie: PropTypes.func.isRequired,
};

export default MoviesList;
