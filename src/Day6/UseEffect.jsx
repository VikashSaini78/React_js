// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";



// function UseEffect() {


//   const[value,setvalue] = useState(0)
//  const[name,setname] = useState("jaitpuriya")



//  useEffect(()=>{
//     console.log("hello vicky jaitpuriya")
// },[value,name])


//     function hendalvalue(){
//         setvalue(value+1)

//     }   
//     function hendalchange(){
//         setname('vicky')
//     } 

//     function valuedecrnment(){
//         setvalue(value-1);
//     }

//     return (  
//         <>
//             <h1>hello vicky</h1>
//             <button onClick={valuedecrnment}>valueDecrnment</button>
//             <p>value incerment :- {value} </p>
//             <button onClick={hendalvalue}>valueincernmenet</button>
//             <h1> name :-{name} </h1>
//             <button onClick={hendalchange}> changevalue</button>
//         </>
//     );
// }

// export default UseEffect;










// secont useEffect








// function UseEffect() {

//   const[count,setcount] = useState(0)


//   useEffect(()=>{
    

//     setTimeout(()=>{
//       setcount(count+1)
//     },1000)



//   },[count])


//     return ( 
//         <>
//             <h1>hello vicky</h1>
//             <h2>value :-{count} </h2>
           
//         </>
//      );
// }

// export default UseEffect;









// therd ud]seeffect









function UseEffect() {
  const[name,setname]=useState("jaitpuriya")
  function hendalvalue(){
   setname("vicky")
  }
  useEffect(()=>{
    alert("hello")
   })
  return ( 
    <>
      <h1>value :-{name} </h1>
      <button onClick={hendalvalue}>updatevalue</button>
    
    </>
   );
}

export default UseEffect;