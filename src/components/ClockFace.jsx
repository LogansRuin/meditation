import React from 'react'

const ClockFace = ({seconds, minutes}) => {
  return (
    <div>
      <span id="minutes">{minutes}</span>
      <span id="clockSeperator">:</span>
      <span id="secons">{seconds}</span>
    </div>
  )
}

export default ClockFace