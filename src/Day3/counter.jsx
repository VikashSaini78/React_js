import { useState } from "react";
import "./Counter.css"
function Counter() {


    const[count,setcount] = useState(0)

    function heandalincrement(){
        setcount(count+1)
       
    }
    function heandaldecrement(){
        if (count>0){
 setcount(count-1)
        }
       
    }


    return (
        <>
            <div className="counter">
                <h1>counter App</h1>
                {count===10 ? <p>yahooo</p>:  <></> }
                <button onClick={heandalincrement}>+</button> <h2>{count} </h2> <button onClick={heandaldecrement}>-</button>
            </div>
        </>
      );
}

export default Counter;