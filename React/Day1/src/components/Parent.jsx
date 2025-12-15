import React, { useState } from 'react'

function Parent(props) {
    const [fruit,setFruit] = useState(["Mango","Banana","Apple"]);
    return (
    <>
      <h3>This is the Parent Component</h3>
        <h4>Gift : {props.gift}</h4>
        <button onClick={()=>props.giftFromChild(fruit)}>Send Gift</button>
    </>
  )
}

export default Parent;
