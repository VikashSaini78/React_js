function Example() {
    let data=["vicky","jaitpuriya","manish","shyam","ram"]
    return ( 
        <>
        {
            data.map((value,index)=>(
                <ul>
                    <li>
                        {value} 
                        {/* {index} */}
                    </li>
                </ul>
            ))
        }
          
        </>
     );
}

export default Example;