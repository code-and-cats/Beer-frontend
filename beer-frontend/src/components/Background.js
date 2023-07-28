import React from 'react'
import backgroundVid from './background.mp4'
import Lottie from 'lottie-react'
import { styled } from 'styled-components'
import bubbles from './Lotties/bubbles.json'

const VideoWrapper = styled.video`
  max-width: 100vw;
  object-fit: contain;
  object-position: center;
  overflow: hidden;
`
const Background = () => {
  return <Lottie style={{ height: '100wh' }} animationData={bubbles} />
}

export default Background
