import { useState, useEffect } from "react";

export function useMovies(query) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const KEY = "5841f519";
    // const movieName = searchValue;

    const fetchMovies = async (query) => {
        try {
            setLoading(true);
            const res = await fetch(
                `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`
            );
            const data = await res.json();
            // console.log(data);

            if (data.Response === "True") {
                setMovies(data.Search);
                setError(null); // Clear error when data is fetched successfully
            } else {
                setMovies([]);
                setError(data.Error);
            }
        } catch (err) {
            setError("Network error or API request failed."); // Handle network or API errors
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (query.trim() != "") {
            fetchMovies(query);
        } else {
            // Clear movies and error when the query is empty
            setMovies([]);
            setError(null);
        }
    }, [query]);

    return [movies, loading, error];
}

