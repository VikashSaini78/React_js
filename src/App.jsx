import Card from "./Day1/Card";
// import Example from "./Day1/Example";
// import Statetest from "./Day3/Statetest";
// import Test from "./Day3/Test";
// import Counter from "./Day3/counter";
// import Btn from "./Day5/Btn";
// import Ptr from "./Day5/Ptr";
// import Todo from "./Day5/Todo";
// import Form from "./Day4/Form";
// import UseEffect from "./Day6/UseEffect";
// import Data from "./Day7/Data";
// import Product from "./Day1/Product";
// import Navbar from "./Day8/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from "./Day8/Navbar";
import Footer from "./Day8/Footer";
import Example from "./Day8/Example";
import HomePage from "./Day8/HomePage";
import Matrialui from "./Day9/Matrialui";




function App() {

  // let productdata = [
  //   {
  //     productname:"i phone",
  //     price: "$25",
  //     rating: "4.3",
  //     id: "1453526"
  //   },
  //   {
  //     productname:"Samsung Tv",
  //     price: "$245",
  //     rating: "4.4",
  //     id: "145426"
  //   },
  //   {
  //     productname:"Apple laptop",
  //     price: "$584",
  //     rating: "4.9",
  //     id: "144526"
  //   },
  //   {
  //     productname:"Mi Tv",
  //     price: "$256",
  //     rating: "4.7",
  //     id: "1452645"
  //   },
  //   {
  //     productname:"Micromax phone",
  //     price: "$6",
  //     rating: "4.7",
  //     id: "14545"
  //   },
  //   {
  //     productname:"Mi phone",
  //     price: "$256",
  //     rating: "4.7",
  //     id: "1452645"
  //   },
  //   {
  //     productname:"Tv",
  //     price: "$26",
  //     rating: "4.5",
  //     id: "145245"
  //   },
  // ]


  return ( 
    <>

<Matrialui/>


{/* <Navbar/> */}
   
    {/* <BrowserRouter>
    <Navbar/>
    <Routes>

     <Route path="/HomePage" element={<HomePage/>}/> 
      <Route path="/Example" element={<Example/>}/>
      <Route path="/Card" element={<Card/>}/> 
      
      
    </Routes>
    <Footer/>
    </BrowserRouter> 

    */}
{/* 
   <Data/>
   <UseEffect/>
   <Todo/>
     <Btn/>
     <Ptr/> 
 <Form/> 
 <Statetest/>
<Counter/>
      <Card name = "vicky" Deccription = "hello vicky"/>
      <Card name = "jaitpuriya" Deccription = "hello vicky" />
      <Card name = "jaitpuriya" Deccription = "hello vicky"/>
      {
    productdata.map((value,index)=>(
    <Product pname={value.productname} price={value.price} rating={value.rating} id={value.id}/>
    ))
}
     <Example/>
     <Test/>  */}


    </>
   );
}

export default App;