import { FaSpinner } from 'react-icons/fa';

export function LoadingSpinner() {
  return (
    <div className="loading-spinner"
      style={{
        color: "whitesmoke",
        display: "grid",
        height: "100%",
        placeItems: "center",
        alignContent: "center"
      }}
    >
      <FaSpinner className="icon"
        style={{ margin: "0 0 10px 0" }}
      />
      {/* <p>Loading movie details...</p> */}
    </div>
  );
}

export function Loading() {
  return (
    <div
      style={{
        color: "whitesmoke",
        display: "grid",
        placeItems: "center",
        margin: "30% 0",
      }}
    >
      Loading...
    </div>
  );
}


