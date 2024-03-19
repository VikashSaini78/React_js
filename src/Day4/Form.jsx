import { useState } from "react";

function Form() {
  const[fname,setfname] = useState('vicky')
  const[lname,setlname] = useState('jaitpuriya')
  const [fvalue,setfvalue] = useState('')
  const [lvalue,setlvalue] = useState('')

function Submithendal(e){
  e.preventDefault()
  // console.log(fname,lname)
  setfvalue(fname)
  setlvalue(lname)
}

function handlefname(e){
  setfname(e.target.value)
  
}


function handlelname(e){
  setlname(e.target.value)
}

  
  return (
    <>
      <h1>Form</h1>
      <h1>hello {fvalue} {lvalue} </h1>
     <form onSubmit={Submithendal}>
     <label><strong> First name </strong></label>
      <input type="text"
      value={fname}
      onChange={handlefname}
      
      />


      <label><strong> Last name </strong></label>
      <input type="text"
        value={lname}
        onChange={handlelname}
      />
      <button type="submit">Submit Form</button>
     </form>
    </>
  );
}

export default Form;