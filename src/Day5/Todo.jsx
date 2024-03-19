import { useEffect, useState } from "react";
import "./Todo.css"
function Todo() {


   const [value,setvalue]=useState('')
   const [ctask,setctask]=useState(0)
   const [rtask,setcrask]=useState(0)
   
  function handalvalue(e){
    setvalue(e.target.value)
   
  }
    const[Todo,settodo]=useState(
        [
            {task:"By i phone",completed:true},
            {task:"By new laptop",completed:true},
            {task:"By new home",completed:false},
            {task: "By Car",completed:false}, 
         ] 
    )
        function hendalsubmit(){
            if(value){
                settodo([...Todo,{task:value,completed:false}])
                setvalue ("")
            }
          
        }

        
        function hendalcheck(index){
            let mynewarry=[...Todo]
            mynewarry[index].completed = !mynewarry[index].completed
            settodo(mynewarry)
           


          let  completedtask = mynewarry.filter((value,index)=>(
                value.completed
            ))



            let Remainingtask = mynewarry.filter((value,index)=>{
                return !value.completed
            })

            setctask(completedtask.length)
            setcrask(Remainingtask.length)
        }
    


        function handaldelet(index){
            let mydelet = [...Todo]
          let deletitom =  mydelet.filter((value,id)=>(
                index!==id
            ))
            settodo(deletitom)
        }
        function hendaladit(index){
          const myadit = [...Todo]
          let newvalue = myadit[index]
          
          
          let editvalue = prompt(`Edit value :- ${newvalue}`,newvalue)
          let newobj = {task:editvalue,completed:false}
          myadit.splice(index,1,newobj)
          settodo(myadit)

        }


        useEffect(()=>{
            
            let mynewarry=[...Todo]

          let  completedtask = mynewarry.filter((value,index)=>(
            value.completed
        ))



        let Remainingtask = mynewarry.filter((value,index)=>{
            return !value.completed
        })

        setctask(completedtask.length)
        setcrask(Remainingtask.length)
        })
       

    return (  
        <>
            <div className="Todo_container">
            <h1>My TODO App</h1>
            <input type="text" 
                value={value}
                onChange={handalvalue} 
            />
            <button onClick={hendalsubmit} className="btn1">Add to hare</button>
           
            {Todo.map((value,index)=>(

                <ul>

                <div className="mydiv"> 
                  <input type="checkbox"
                    checked={value.completed}
                    onClick={()=>{hendalcheck(index)}}
                  />

                   <span style={{textDecoration :value.completed ? "line-through":" "}}>{value.task}</span>
                 <span class="material-symbols-outlined delet_icon" onClick={()=>{handaldelet(index)}}>cancel</span>
                  <span class="material-symbols-outlined adit_icon" onClick={(()=>{hendaladit(index)})}>edit</span>
                 </div>
                



                </ul>
            ))}
                  

            <span>completed task :- {ctask} </span> 
            <span>Remaining task :- {rtask} </span>

            </div>
        </>
    );
}

export default Todo;