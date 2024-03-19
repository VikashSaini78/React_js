import { Link } from "react-router-dom";
import "./Navbar.css"
function Navbar() {
    return ( 
        <>
          <div className="div-container">
            <ul>
                {/* <li><Link to="">home </Link></li> */}
                <li><Link to ="/HomePage">Home</Link></li>
                <li><Link to ="/Example">Example</Link></li>
                <li><Link to ="./Card">Card</Link></li>
                <li><a href="">Home</a></li>
                <li><a href="">Home</a></li>
                <li><a href="">Home</a></li>
                
               
              
            </ul>
          </div>
        </>
     );
}

export default Navbar;