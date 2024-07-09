import logo from "../../assets/images/logo.svg";
import person from "../../assets/images/person.svg";
import search from "../../assets/images/search.svg";
import like from "../../assets/images/like.svg";
import korzina from "../../assets/images/korzina.svg";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <div className="header-all">
          <div className="header-left">
            <Link to={"/"}>
              <img src={logo} alt="" />
              <h1>Furniro</h1>
            </Link>
          </div>
          <div className="header-middle">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
          <div className="header-right">
            <button>
              <img src={person} alt="" />
            </button>
            <button>
              {" "}
              <img src={search} alt="" />
            </button>
            <button>
              {" "}
              <img src={like} alt="" />
            </button>
            <button>
              {" "}
              <img src={korzina} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
