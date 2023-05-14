import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import Loading from "./Loading"


const StyledMain = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const StyledWrapper = styled.div`
max-width: 600px;
margin: auto;
background-color: rgba(255, 255, 255, 0.5); 
padding: 10px;
border-radius: 8px;
`


const AllBeers = () => {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true)
  const BASE_URL = 'https://project-mongo-api-rrnpfp2gjq-lz.a.run.app/beers';

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        const beersArray = Object.keys(data).map((key) => data[key]);
        setBeers(beersArray);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      })
      }, [])
  
      if (loading)
      return (
       <Loading />
      )
  return (
    <StyledMain>
      <StyledWrapper>
      <h1>Beer API</h1>
      {beers[1].map((beer) => (
        <div key={beer.name}>
          <h2>{beer.style}</h2>
          <p>{beer.name}</p>
        </div>
      ))}
    </StyledWrapper>
    </StyledMain>
  );
};

export default AllBeers;