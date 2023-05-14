import React from 'react'
import backgroundVid from './background.mp4'
import { styled } from 'styled-components'

const VideoWrapper = styled.div`
height: 100vh;
object-fit: contain;
`

const Background = () => {
  return (
    <VideoWrapper>
    <video src={backgroundVid} autoPlay loop muted />
    </VideoWrapper>
  )
}

export default Background
