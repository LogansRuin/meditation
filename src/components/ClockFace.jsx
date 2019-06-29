import React from 'react'

const ClockFace = ({seconds, minutes, microSeconds}) => {
  return (
    <div>
      <span id="minutes">{minutes}</span>
      <span class="clockSeperator">:</span>
      <span id="seconds">{seconds}</span>
      <span class="clockSeperator">:</span>
      <span id="microSeconds">{microSeconds}</span>
    </div>
  )
}

export default ClockFace