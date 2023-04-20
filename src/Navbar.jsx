import { Link } from "react-router-dom";
import house from "./house.png";
import contactIcon from "./contact-icon.png";
import cake from "./cake.png";

function Navbar() {
  return (
    <div>
      <nav className="header">
        <ul className="nav-links">
          <div className="house-container">
            <Link to="/">
              <img src={house} alt="" />
            </Link>
          </div>
          <li>
            <Link to="/">Home</Link>
          </li>
          <div className="contact-icon-container">
            <Link to="/contacto">
              <img src={contactIcon} alt="" />
            </Link>
          </div>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
        <div className="banner">
          <h2>Happy Cake</h2>
          <div className="cake-container">
            <img src={cake} alt="" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
