import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../cartIcon/cartIcon";
import { Navbar, Nav } from "react-bootstrap";
// import { auth } from '../../firebase';
// import { UserContext } from '../../context/user-context'
import "./header.css";

const Header = () => {
  return (
    <Navbar className="navbar__custom">
    <Navbar.Brand ><Link to="/" style={{textDecoration: 'none'}} ><h1 className="nav__brand">LeavesBeat</h1></Link></Navbar.Brand>
    <Nav className="mr-auto">
          <Link  to="/shop" className="nav__link"><span ><h4 >Store</h4></span ></Link>
    </Nav>
    <CartIcon />
  </Navbar>
  );
};

export default Header;
