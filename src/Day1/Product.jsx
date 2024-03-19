import "./Product.css"
function Product(props) {
   
    return ( 
        <>
          <div className="container1">
          <h2>productname :- {props.pname} </h2> 
           <h3>price :-{props.price} </h3>
           <p>Rating :-{props.rating} </p>
           <h5>Id :-{props.id} </h5>
          </div>
        </>
     );
}

export default Product;