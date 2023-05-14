import React from "react";
import Lottie from 'lottie-react'
import barrel from './Lotties/barrel.json'

const  Loading = () => {


  return (
<Lottie style={{ width: '300px' }} animationData={barrel} />

  )
}


export default Loading