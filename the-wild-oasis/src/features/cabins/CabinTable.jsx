import React from 'react'
import CabinRow from "../cabins/CabinRow";
import { Empty, Spinner, Table } from '../../ui';
import { useCabins } from './useCabins';
import { useSearchParams } from 'react-router-dom';
// import styled from "styled-components";

// const Table = styled.div`
//   border: 1px solid var(--color-grey-200);

//   font-size: 1.4rem;
//   background-color: var(--color-grey-0);
//   border-radius: 7px;
//   overflow: hidden;
// `;

// const TableHeader = styled.header`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;

//   background-color: var(--color-grey-50);
//   border-bottom: 1px solid var(--color-grey-100);
//   text-transform: uppercase;
//   letter-spacing: 0.4px;
//   font-weight: 600;
//   color: var(--color-grey-600);
//   padding: 1.6rem 2.4rem;

//   /* @media (max-width: 1300px) { 
//     grid-template-columns: 0.6fr 1.7fr 2.3fr 0.9fr 1.1fr 1fr;
//   } */
// `;

function CabinTable() {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />
  if (!cabins.length) return <Empty resourceName="cabins" />;

  // filter
  const filterValue = searchParams.get('discount') || 'all';
  // console.log(filterValue);

  let filteredCabins;
  if (filterValue === 'all') filteredCabins = cabins;
  if (filterValue === "no-discount")
    filteredCabins = cabins.filter(cabin => cabin.discount === 0);
  if (filterValue === "with-discount")
    filteredCabins = cabins.filter(cabin => cabin.discount > 0);

  // sort
  const sortBy = searchParams.get('sortBy') || 'startDate-asc';
  const [field, direction] = sortBy.split('-');
  const modifier = direction === 'asc' ? 1 : -1;
  const sortedCabins = filteredCabins.sort((a, b) => (a[field] - b[field]) * modifier);

  return <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
    <Table.Header role='row'>
      <div></div>
      <div>Cabin</div> 
      <div>Capacity</div>
      <div>Price</div>
      <div>Discount</div>
      <div></div>
    </Table.Header>
    <Table.Body data={sortedCabins} render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />} />
  </Table>
}

export default CabinTable;