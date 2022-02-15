import React, { useState } from "react";

function Multiples(props) {

  const [count, setCount] = useState(1);

  
  return (
    <>
     
     <h4> Multiples of : {props.of < 0  ? 0 : props.of}</h4>
     <p>{props.of < 0  ? 0 : (props.of*count)}</p> 
     <button onClick={() => setCount(count + 1)}>Next Multiple</button>

    </>
  );
};

export default Multiples;