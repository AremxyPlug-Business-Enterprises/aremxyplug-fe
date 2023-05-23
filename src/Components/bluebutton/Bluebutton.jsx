import React from 'react'
import { primaryColor } from '../Screens/cardIssuing/cardIssuing'

function Bluebutton({...props}) {
  return (
    
    <div
      className="text-[#fff] w-[200px] text-center rounded-lg py-2 font-semibold  cursor-pointer"
      style={{
        backgroundColor: primaryColor,
      }}
    >
     {props.text}
    </div>

  )
}

export default Bluebutton