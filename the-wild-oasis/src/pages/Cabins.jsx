import React, { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import {Row, Filter} from "../ui";
import { getCabins } from "../services/apiCabins";
import CabinTable from "../features/cabins/CabinTable"
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

function Cabins() {
  // fetching data without react-query
  //   useEffect(() => {
  //     getCabins().then((data) => console.log(data))
  //   }, []);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>
      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
