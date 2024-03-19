import { useState } from "react";

function Statetest() {


   const [value,setvalue] = useState({firstname:"vicky", lastname: "jaitpuriya"})

   function updatevalue(){
    setvalue({...value,lastname:"saini" })
   }


    return (
        <>
            <h1>First name:- {value.firstname} last name:- {value.lastname} </h1>
            <button onClick={updatevalue}>pdate value</button>
        </>
      );
}

export default Statetest;