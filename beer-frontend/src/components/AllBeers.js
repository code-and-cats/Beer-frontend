import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'
import Loading from './Loading'
import forward from './hopsrightwhite.svg'
import back from './hopsleftwhite.svg'

const AllBeers = () => {
  const [beers, setBeers] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(8)
  const BASE_URL = `https://project-mongo-api-rrnpfp2gjq-lz.a.run.app/beers?page=${page}&perPage=${perPage}`

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        setBeers(data.body)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [page, perPage])

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const handleNextPage = () => {
    setPage(page + 1)
  }

  return (
    <StyledMain>
      {loading ? (
        <LottieDiv>
          <Loading />
        </LottieDiv>
      ) : null}
      <StyledWrapper>
        <NavWrapper>
          <NavIcon src={back} alt="back to main page" />
          <NavLink to="/">hop back to homepage</NavLink>
        </NavWrapper>
        <StyledH1>All beers</StyledH1>
        <SubHeadingWrapper>
          {beers.map((beer) => (
            <div key={beer.name}>
              <NavLink to={`/beers/${beer._id}`}>{beer.name}</NavLink>
              <BeerStyle>{beer.style}</BeerStyle>
            </div>
          ))}
        </SubHeadingWrapper>
        <StyledPagination>
          <Icon
            src={back}
            onClick={handlePreviousPage}
            disabled={page === 1}
            alt="back"
          />
          <p>Page: {page}</p>
          <Icon src={forward} onClick={handleNextPage} alt="forward" />
        </StyledPagination>
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

const StyledH1 = styled.h1`
  font-size: 40px;
  margin-bottom: 16px;
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 375px;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 12px 24px;
  border-radius: 8px;

  @media (min-width: 740px) {
    max-width: 600px;
`

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

const SubHeadingWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
`

const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  button {
    margin: 0 5px;
  }
`

const BeerStyle = styled.h2`
  font-size: 12px;
  margin-top: 0;
  margin-bottom: 1rem;
`

const LottieDiv = styled.div`
  position: relative;
  margin: auto;
  z-index: 3;
`

const NavIcon = styled.img`
  width: 25px;
  cursor: pointer;
`

// TODO: disabled styling change, hover styling change, button??
const Icon = styled.img`
  width: 25px;
  margin: 10px;
  cursor: pointer;
`

export default AllBeers
