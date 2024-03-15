import { useState } from "react";
import PropTypes from "prop-types"
import { EmptyStarIcon, FilledStarIcon } from './SVGStarIcon';
import { useLocalStorage } from "../hooks/useLocalStorage";

function StarRatings({ imdbID, onSetRatings, max }) {
    const [ratings, setRatings] = useLocalStorage({}, 'user-ratings');
    const [hoveredRatings, setHoveredRatings] = useState(0);

    // Get the rating for the current movie from userRatings
    const movieRatings = ratings[imdbID] || 0;

    const handleOnStarClick = (newRating) => {
        // Update the userRatings object with the new rating for the current movie
        const updatedRatings = { ...ratings, [imdbID]: newRating };
        setRatings(updatedRatings);

        // Pass the updated ratings object to the parent component
        onSetRatings(updatedRatings);
    };

    // console.log('ratings:', ratings);
    const handleMouseEnter = (hoveredRating) => {
        setHoveredRatings(hoveredRating);
    };

    const handleMouseOut = () => {
        // setRatings(ratings);
        setHoveredRatings(0);
    }

    // star icon color logic for emoji-star
    // const getStarColor = (index) => {
    //     if (index < ratings) {
    //         return "gold"; // Filled stars
    //     }
    //     else if (index < hoveredRatings) {
    //         return "gold"; // Stars that are hovered (not clicked)
    //     }
    //     else {
    //         return "gray"; // Empty stars
    //     }
    // };


    const getStarIcon = (index) => {
        try {
            if (index < movieRatings) {
                return <FilledStarIcon />; // Filled star icon
            } else if (index < hoveredRatings) {
                return <FilledStarIcon />; // Filled star icon for hovered (not clicked)
            } else {
                return <EmptyStarIcon />; // Empty star icon
            }
        }
        catch (err) {
            console.log(err);
        }
    };
    // console.log(ratings[imdbID]);

    // Logic for rendering stars
    return (
        <div className='stars'>
            {ratings[imdbID] !== undefined ? (
                <p>You rated it {ratings[imdbID]} ★</p>
            )
                :
                Array.from({ length: max }).map((_, index) => (
                    <span
                        key={index}
                        className={index < movieRatings ? 'star-filled' : ''}
                        // style={{ color: getStarColor(index) }}
                        style={{ cursor: "pointer" }}
                        onClick={() => handleOnStarClick(index + 1)}
                        onMouseEnter={() => handleMouseEnter(index + 1)}
                        // onMouseLeave={() => handleMouseOut()} // can be used this way too
                        onMouseLeave={handleMouseOut}
                    >
                        {getStarIcon(index)}
                    </span>
                ))}
        </div>
    );
}

StarRatings.propTypes = {
    onSetRatings: PropTypes.func.isRequired,
    imdbID: PropTypes.string.isRequired
};

export default StarRatings;