import React from 'react'
import Lottie from 'lottie-react'
import loadingvid from './Lotties/loading.json'

const Loading = () => {
  return (
    <Lottie
      style={{ width: '300px', margin: 'auto' }}
      animationData={loadingvid}
      loop
    />
  )
}

export default Loading
