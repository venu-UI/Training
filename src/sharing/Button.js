import React from 'react'

function Button({children,handleClick}) {
    console.log("clicks", `${children}`)
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  )
}

export default React.memo(Button)
