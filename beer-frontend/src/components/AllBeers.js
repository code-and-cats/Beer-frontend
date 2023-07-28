import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'
import Loading from './Loading'

const AllBeers = () => {
  const [beers, setBeers] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(5)
  const BASE_URL = `http://localhost:8080/beers?page=${page}&perPage=${perPage}`

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

  if (loading) return <Loading />
  return (
    <StyledMain>
      <StyledWrapper>
        <h1>All beers</h1>
        {beers.map((beer) => (
          <div key={beer.name}>
            <NavLink to={`/beers/${beer._id}`}>{beer.name}</NavLink>
            <BeerStyle>{beer.style}</BeerStyle>
          </div>
        ))}
        <StyledPagination>
          <button onClick={handlePreviousPage} disabled={page === 1}>
            Previous
          </button>
          <span>Page: {page}</span>
          <button onClick={handleNextPage}>Next</button>
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

const StyledWrapper = styled.div`
  max-width: 600px;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px;
  border-radius: 8px;
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

export default AllBeers
