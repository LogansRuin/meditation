import React from 'react'

const ClockFace = ({seconds, minutes}) => {
  return (
    <div>
      <span id="minutes">{minutes}</span>
      <span class="clockSeperator">:</span>
      <span id="seconds">{seconds}</span>
    </div>
  )
}

export default ClockFace