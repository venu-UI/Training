import React from 'react'

function Head() {
    console.log("Headings");
  return (
    <div>
      <h2>Counter Data</h2>
    </div>
  )
}

export default React.memo(Head)
