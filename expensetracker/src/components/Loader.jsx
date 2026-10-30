import React from 'react'
import { PulseLoader } from "react-spinners";

const override = {
    backgroundColor: '#f1f5f9',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: "0 auto"
}

const Loader = () => {
  return (
    <div className=''>
      <PulseLoader 
      color="#6366f1"
      cssOverride={override}
      size={20}
      aria-label="Loading Spinner"
      data-testid="loader"
      />
    </div>
    

  )
}

export default Loader
