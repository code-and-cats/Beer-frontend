import React from 'react'
import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'

const Main = () => {
  return (
    <StyledMain>
      <StyledWrapper>
        <h1>Beer guidelines</h1>
        <p>
          This beer site is using a dataset from the "Beer Judge Certification
          Program 2015 guidelines" from Kaggle. The beer style guidelines are
          used in order to categorize beers and judge beer competitions.
        </p>
        <p>
          This is the API:
          <a href="https://project-mongo-api-rrnpfp2gjq-lz.a.run.app">
            https://project-mongo-api-rrnpfp2gjq-lz.a.run.app
          </a>
        </p>
        <p>These are the endpoints of the API: </p>
        <ul>
          <StyledLi>/beers - all beers</StyledLi>
          <StyledLi>
            /beers?style= - All beers in a certain style - example query:
            /beers?style=Kellerbier
          </StyledLi>
          <StyledLi>
            /beers/:id - A certain beer - example query:
            /beers/6460d8450c3f651774e546c8
          </StyledLi>
        </ul>
        <NavLink to="/beers">
          Or you can stay right here and see a list of all beers.
        </NavLink>
      </StyledWrapper>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
const StyledWrapper = styled.div`
  max-width: 375px;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px;
  border-radius: 8px;

  @media (min-width: 740px) {
    max-width: 600px;
`

const StyledLi = styled.li`
  list-style: none;
  font-family: 'Biryani', sans-serif;
  font-size: 12px;
`

export default Main
