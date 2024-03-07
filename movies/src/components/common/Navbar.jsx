// import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../assets/scss/NavBar.scss";
import { useEffect, useRef } from "react";

function Navbar({ query, setQuery, movies }) {
  // const handleInputChange = (e) => {
  //   const query = ;
  //   setQuery(query);
  // };

  const inputEl = useRef(null);

  useEffect(function () {
    inputEl.current.focus();
    // console.log("useEffect called")
  }, []);

  const handleClear = () => {
    setQuery("");
  };

  return (
    <div className='nav'>
      {/* <p>find your</p> */}
      <h1 className='logo'>🎬 movies</h1>
      <div className="search">
        <input
          type='text'
          placeholder='Enter a movie name...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          ref={inputEl}
        />
        <button className='clear' onClick={handleClear}>
          ✖️
        </button>
      </div>
      {movies.length <= 0 ? <h1><strong>🍿</strong></h1> : (
        <p className='results'>
          <span className="result-txt">Found </span>
          <strong style={{ color: "greenyellow" }}>{movies?.length ?? 0}</strong>{" "}
          <span className="result-txt">results </span>
          {/* 
          // Use optional chaining to safely access the "length" property of "movies"
          // If "movies" is null or undefined, this part will result in "undefined"
            movies?.length 

          // The nullish coalescing operator (??) is used to provide a default value
          // If the left side is undefined (due to "movies" being null or undefined), it defaults to 0
            ?? 0
        */}
        </p>
      )}

    </div>
  );
}

Navbar.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func.isRequired,
  movies: PropTypes.array,
};

export default Navbar;
