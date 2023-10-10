import PropTypes from "prop-types";
import styled from "styled-components";
import noimage from "../../assets/images/no-image.jpeg";

const MovieGrid = styled.div`
  display: flex;
  flex-wrap: wrap;          /* Allow items to wrap to the next row */
  justify-content: center; 
  gap: 7px; 
  margin: 47px 16px 27px 16px;
  max-width: 100%;          /* Ensure the grid doesn't exceed the parent's width */

  > * {
    flex: 1;                /* Distribute available space equally among items */
    min-width: 100px;       /* Minimum width for each item */
    margin: 0;              /* Remove any margin */
    box-sizing: border-box; /* Include padding and border in width */
  }
`;


const MovieCardContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;         /* Prevent image overflow */
  text-align: center;       /* Center align content horizontally */

  img {
    max-width: 100%;
    height: 100%;           /* Make the image fill the container's height */
    object-fit: cover;      /* Crop and center the image */
    display: block;         /* Ensure images are centered */
    margin: 0 auto;         /* Center align images horizontally */
  }
`;

// const MovieTitle = styled.p`
//   font-size: 14px;
//   font-weight: bold;
//   white-space: nowrap;      /* Prevent text from wrapping to the next line */
//   overflow: hidden;         /* Hide overflowing text */
//   text-overflow: ellipsis;  /* Show ellipsis (...) for truncated text */
//   margin: 0;                /* Remove any margin to prevent extra spacing */
// `;

const RemoveButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 0 0 3px 1px;
  width: 24px; 
  height: 24px; 
  background-color: rgba(10, 10, 10, 0.9);
  border: none;
  border-radius: 50%;
  color: red;
  box-shadow: 0 2px 4px rgba(250, 250, 250, 0.7);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 21px;
  font-weight: 800;
  transition: background-color 0.3s;
  &:hover {
    &::before {
      color: white;
      font-size: 11px;
      background-color: rgba(0, 0, 0, 0.7);
      padding: 5px;
      content: 'remove'; 
      text-align: center; 
      margin-right: 21px; 
      border-radius: 5px;
    }
  }
`;


function WatchedList({ watched, onRemove, onSelectMovie }) {
  return (

    <MovieGrid className='WatchedList'>
      {
        watched.map((movie) => (
          <MovieCardContainer key={movie.imdbID} onClick={() =>
            onSelectMovie(movie.imdbID)} // You should pass a function reference to onClick, not the result of a function call. So use arrow function.
            className='movie-crd'
          >
            <img
              src={movie.poster === "N/A" ? noimage : movie.poster}
              alt={movie.title}
            />
            {/* <MovieTitle>{movie.title}</MovieTitle> */}
            <RemoveButton type='button' value="remove" onClick={() => onRemove(movie.imdbID)}>&#215;</RemoveButton>
          </MovieCardContainer>
        ))
      }
    </MovieGrid>
  )
}

WatchedList.propTypes = {
  watched: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
  onSelectMovie: PropTypes.func.isRequired
};

export default WatchedList;