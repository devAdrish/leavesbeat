import React from "react";
import { withRouter } from 'react-router-dom';
import { Jumbotron, Button } from "react-bootstrap";
import "./hero.css";

const Hero = ({history}) => {
  return (
    <Jumbotron fluid className="hero hero__img">
      <p className="hero__text">Bags Reimagined for Modern Life.</p>
      <Button className="btn btn-dark hero__btn" onClick={()=> history.push('/shop')}>
        Shop Now</Button>
    </Jumbotron>
  );
}

export default withRouter(Hero);
