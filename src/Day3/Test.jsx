import { useState } from "react";

function Test() {
    
    let x=20
 


    
    const [num,setnum]=useState(x)

    // function clickuse(){
    //     setnum(x=10)
    // }

    return (
        <>
            <h1>hello vicky</h1>
            <h2> value:-{num} </h2>
            {/* <button onClick={clickuse}>Tap to more info</button> */}
        </>
      );
}

export default Test;
