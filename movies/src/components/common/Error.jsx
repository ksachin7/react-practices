import React from "react";

function Error() {
  return (
    <>
      <span className='err' style={{ color: "red" }}>
        ✖️
      </span>{" "}
      Error: Something went wrong!{" "}
    </>
  );
}

export default Error;
