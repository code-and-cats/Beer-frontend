import React from 'react'
import backgroundVid from './background.mp4'
import { styled } from 'styled-components'

const VideoWrapper = styled.video`
  display: block;
  height: 100vh;
  object-fit: cover;
  object-position: center;
  overflow: hidden;

  @media (min-width: 1624px) {
    width: 140vw;
`
const Background = () => {
  return <VideoWrapper src={backgroundVid} autoPlay loop muted />
}

export default Background
