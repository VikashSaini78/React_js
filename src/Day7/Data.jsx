import "./Data.css"
import { useEffect, useState } from "react"


function Data() {

    
const[count,setcount]=useState(1)
const[image,setimage]=useState('')
const[title,settitle]=useState('')
const[price,setprice]=useState('')
const[category,setcategory]=useState('')


 async function mydata(){
    let result = await fetch(`https://dummyjson.com/products/${count}`)
    let data = await result.json()
    console.log(data)
    setimage(data.images[0])
    settitle(data.title)
    setprice(data.price)
    setcategory(data.category)

 }

 function hendalvalue(){
    setcount(count+1)
 }


 useEffect(()=>{
    mydata()
 })



    return (  
        <>
          <div>
            <h1></h1>
           

           <div className="card_div">
           <div className="card" style={{width: "18rem;"}}>
           <div className="img_data"><img src={image} className="card-img-top" alt="errer"/></div>
           <div className="card-body">
           <h5 className="card-title">Title :- {title} </h5>
           <h3 className="card-text">Category :- {category} </h3>
           <h4 className="card-text">price :- {price} </h4>
         
           <button onClick={hendalvalue} className="div_btn">Next value</button>

  </div>
</div>

           </div>


           {/* <h1>{count} </h1> */}
            
          </div>  
        </>
    );
}

export default Data;




