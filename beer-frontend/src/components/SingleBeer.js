import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'
import { useParams } from 'react-router-dom'

const SingleBeer = () => {
  const { id } = useParams()
  const [beer, setBeer] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBeerDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/beers/${id}`)
        if (response.ok) {
          const data = await response.json()
          console.log(data)
          setBeer(data.body)
        } else {
          console.log('Error: ', response.status)
        }
      } catch (error) {
        console.log('Error: ', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBeerDetails()
  }, [id])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!beer) {
    return <div>Beer not found</div>
  }

  const {
    name,
    style,
    appearance,
    impression,
    aroma,
    flavor,
    mouthfeel,
    comments,
    history,
    ingredients,
    examples
  } = beer

  return (
    <StyledMain>
      <StyledWrapper>
        <NavLink to="/beers">Back to all beers</NavLink>
        <HeaderWrapper>
          <BeerName>{name}</BeerName>
          <BeerStyle>{style}</BeerStyle>
        </HeaderWrapper>
        <TextWrapper>
          <SubHeading>Impression</SubHeading>
          <p>{impression}</p>
        </TextWrapper>
        <SubHeading>Appearance</SubHeading>
        <p>{appearance}</p>
        <h3>Aroma</h3>
        <p>{aroma}</p>
        <h3>Flavor</h3>
        <p>{flavor}</p>
        <h3>Mouthfeel</h3>
        <p>{mouthfeel}</p>
        <h3>Comments</h3>
        <p>{comments}</p>
        <h3>History</h3>
        <p>{history}</p>
        <h3>Ingredients</h3>
        <p>{ingredients}</p>
        <h3>Examples</h3>
        <ul>
          {examples.map((example, index) => (
            <li key={index}>{example}</li>
          ))}
        </ul>
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

const HeaderWrapper = styled.div`
  text-align: center;
  color: #a62f03;
  background-color: #f2b749;
  padding: 10px 2px 10px 2px;
  border-radius: 8px;
  margin-top: 8px;
`

const BeerName = styled.h1`
  margin-top: 0;
  font-size: 40px;
`

const BeerStyle = styled.h2`
  font-size: 12px;
  margin-top: 0;
`
const SubHeading = styled.h3`
  font-size: 18px;
  color: #a62f03;
`

const TextWrapper = styled.div`
  background-color: rgba(243, 235, 212, 0.8);
  padding: 15px;
  border-radius: 8px;
`

const StyledWrapper = styled.div`
  max-width: 600px;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px;
  border-radius: 8px;
`

export default SingleBeer
