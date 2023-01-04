import React from 'react';
import "./footer.css";

const Footer = () => {
    const year = new Date().getFullYear();
    return ( 
        <div className="container-fluid">
            <h4 className="copyright">LeavesBeat &copy; <span style={{fontSize: "1.4rem"}}> {year} </span></h4>
            <h6>123 Street, New York, USA</h6>
            <div className="footer__info">
                <a href={"tel:123-456-789"} className="link"><i className="fa fa-phone social"></i></a>
                <a href={"mailto:contact@leavesbeat.com"} className="link"><i className="fa fa-envelope social"></i></a>
                <a href=""><i className="fa fa-twitter social"></i></a>
                <a href=""> <i className="fa fa-facebook-f social"></i></a>
                <a href=""><i className="fa fa-instagram social"></i></a>
            </div>
        </div>
        );
}
 
export default Footer;