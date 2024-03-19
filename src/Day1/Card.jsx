import "./Card.css"
function Card(props) {
  return ( 
    <>
     <div className="card">
     <div className="container">
      <img src="./media/dp.jpg" alt="errer"/>
      <h1>{props.name}</h1>
      <p>{props.Deccription}</p>
      <button>tap to more info</button>
      </div>
     </div>
    </>
   );
}

export default Card;