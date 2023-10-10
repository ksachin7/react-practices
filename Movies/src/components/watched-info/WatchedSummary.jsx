import PropTypes from "prop-types";
import styled from "styled-components";

const WatchedSummaryContainer = styled.div`
  background-color: #60526e24;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 16px;
`;

const WatchedSummaryTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  /* Ensure it doesn't overflow its parent container */
  transition: white-space 0.7s ease;
`;

const WatchedDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const WatchedDetailLabel = styled.span`
  font-weight: bold;
  display: block;
  font-size: 14px;
  color: #eee;
`;

const WatchedDetailValue = styled.span`
  font-size: 16px;
  color: #dfccf1;
`;


function WatchedSummary({ watched }) {
  // console.log(watched);

  // Check if watched array is null or empty
  if (!watched || watched === null) {
    watched = [];
    // return <p>You haven&apos;t watched anything yet!</p>
  }

  const formatRuntime = (runtime) => {
    // console.log(runtime)
    const hr = Math.floor(runtime / 60);
    const min = Math.ceil(runtime % 60);
    return `${hr} hr ${min} min`;
  }

  // const average = (arr) => arr.reduce((acc, cur) => acc + cur / arr.length, 0);
  // const avgRuntime = average(watched.map((movie) => (isNaN(movie.runtime) || movie.runtime === "N/A") ? 0 : (movie.runtime)));

  const validMovies = watched.filter((movie) => !isNaN(movie.runtime) && movie.runtime !== "N/A");
  const totalRuntime = validMovies.reduce((total, movie) => total + parseFloat(movie.runtime ?? 0), 0);

  // fetching ratings from localstorage 
  // const userRatingsCount = watched.reduce((count, movie) => count + movie.userRatings, 0);
  const userRatings = JSON.parse(localStorage.getItem('user-ratings'));
  const ratingCount = userRatings && Object.keys(userRatings).length;

  return (
    <WatchedSummaryContainer>
      <WatchedSummaryTitle>Movies You Watched</WatchedSummaryTitle>
      <WatchedDetails className="watched-details">
        <WatchedDetailLabel> 🎬 <WatchedDetailValue>{watched.length}</WatchedDetailValue> movies</WatchedDetailLabel>
        <WatchedDetailLabel> 🌟 <WatchedDetailValue>{ratingCount}</WatchedDetailValue> ratings</WatchedDetailLabel>
        <WatchedDetailLabel> ⏳ <WatchedDetailValue>{formatRuntime(totalRuntime)}</WatchedDetailValue></WatchedDetailLabel>
      </WatchedDetails>
    </WatchedSummaryContainer>
  )
}

WatchedSummary.propTypes = {
  watched: PropTypes.array,
};

export default WatchedSummary;