import React from 'react'
import styled from 'styled-components'

const StyledPopup = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 350px;
  background-color: rgba(243, 235, 212);
  padding: 15px 25px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  overflow-y: scroll;
  z-index: 3;

  @media (min-width: 768px) {
    gap: 0.7rem;
  }
`
const SubHeading = styled.h2`
  font-size: 18px;
  color: #a62f03;
  margin-top: 0;
`

const CloseButton = styled.button`
  background-color: rgba(243, 235, 212);
  border: none;
  color: #a62f03;
  font-weight: 800;
  cursor: pointer;
  align-self: flex-end;
`

const Content = styled.p`
  margin-top: 0;
`

const Popup = ({ title, content, setIsShowing }) => {
  // Handling clicking outside of the popup (the overlay)
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsShowing(false)
    }
  }

  return (
    <StyledPopup>
      <CloseButton type="button" onClick={setIsShowing}>
        X
      </CloseButton>
      <SubHeading>{title}</SubHeading>
      <Content>{content}</Content>
    </StyledPopup>
  )
}

export default Popup
