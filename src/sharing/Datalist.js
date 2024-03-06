import React from 'react'

function Datalist({text,value}) {
    console.log("textvalue", `${text}::${value}`);
  return (
    <div>
      <h1>
        {text}:{value}
      </h1>
    </div>
  )
}

export default React.memo(Datalist)
