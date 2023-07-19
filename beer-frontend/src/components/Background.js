import React from 'react'
import backgroundVid from './background.mp4'
import { styled } from 'styled-components'

const VideoWrapper = styled.video`
  object-fit: cover;
  object-position: center;
`
const Background = () => {
  return <VideoWrapper src={backgroundVid} autoPlay loop muted />
}

export default Background

/* import styled, { keyframes } from 'styled-components'

const GradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
  `
export const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(-60deg, #f3e834, #dc7d51, #ff6634);
  background-size: 400% 400%;
  animation: ${GradientAnimation} 10s ease infinite;
`
 */
