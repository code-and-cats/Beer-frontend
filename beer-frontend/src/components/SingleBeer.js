import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'
import { useParams } from 'react-router-dom'
import Loading from './Loading'
import Popup from './Popup'

const SingleBeer = () => {
  const { id } = useParams()
  const [beer, setBeer] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isShowing, setIsShowing] = useState(false)
  const [activePopup, setActivePopup] = useState(null)

  useEffect(() => {
    const fetchBeerDetails = async () => {
      try {
        const response = await fetch(
          `https://project-mongo-api-rrnpfp2gjq-lz.a.run.app/beers/${id}`
        )
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
    examples,
    ibu,
    abv
  } = beer

  const handlePopupClick = (title, content) => {
    setActivePopup({ title, content })
    setIsShowing(true)
  }

  const handleClosePopup = () => {
    setIsShowing(false)
  }

  return (
    <StyledMain>
      {isShowing && (
        <Overlay onClick={handleClosePopup}>
          <Popup
            title={activePopup.title}
            content={activePopup.content}
            setIsShowing={handleClosePopup}
          />
        </Overlay>
      )}
      <StyledWrapper>
        <NavLink to="/beers">Back to all beers</NavLink>
        {loading ? (
          <LottieDiv>
            <Loading />
          </LottieDiv>
        ) : null}
        <HeaderWrapper>
          <BeerName>{name}</BeerName>
          <BeerStyle>{style}</BeerStyle>
          <IBUABVWrapper>
            <BeerStyle>
              IBU: {ibu.low} - {ibu.high}
            </BeerStyle>
            <BeerStyle>
              ABV: {abv.low} - {abv.high}
            </BeerStyle>
          </IBUABVWrapper>
        </HeaderWrapper>
        <SubHeadingWrapper>
          <SubHeading
            onClick={() => handlePopupClick('Impression', impression)}>
            Impression
          </SubHeading>
          <SubHeading onClick={() => handlePopupClick('Mouthfeel', mouthfeel)}>
            Mouthfeel
          </SubHeading>
          <SubHeading
            onClick={() => handlePopupClick('Appearance', appearance)}>
            Appearance
          </SubHeading>
          <SubHeading onClick={() => handlePopupClick('Aroma', aroma)}>
            Aroma
          </SubHeading>
          <SubHeading onClick={() => handlePopupClick('Flavor', flavor)}>
            Flavor
          </SubHeading>
          <SubHeading onClick={() => handlePopupClick('Comments', comments)}>
            Comments
          </SubHeading>
          <SubHeading onClick={() => handlePopupClick('History', history)}>
            History
          </SubHeading>
          <SubHeading
            onClick={() => handlePopupClick('Ingredients', ingredients)}>
            Ingredients
          </SubHeading>
        </SubHeadingWrapper>
        <TextWrapper>
          <h3>Examples</h3>
          <ul>
            {examples.map((example, index) => (
              <li key={index}>{example}</li>
            ))}
          </ul>
        </TextWrapper>
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

const IBUABVWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  padding-top: 1rem;
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
const SubHeadingWrapper = styled.div`
  background-color: rgba(243, 235, 212, 0.8);
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 15px;
  border-radius: 8px;
`

const StyledWrapper = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px;
  border-radius: 8px;
`

const Overlay = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 2;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
`

const LottieDiv = styled.div`
  position: relative;
  margin: auto;
  z-index: 3;
`

export default SingleBeer
