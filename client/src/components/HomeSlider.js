import React from 'react';
import bg1 from '../assets/img/bg1.jpg';
import bg2 from '../assets/img/bg2.jpg';
import bg3 from '../assets/img/bg3.jpg';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

class HomeSlider extends React.Component {

  render() {
    return(
      <Carousel id="home-slider" fade='true'>
        <Carousel.Item>
          <img
            className="sliderpic"
            src={bg1}
            alt="First slide"
          />
          <div className="loginBtn">
            <h3><Link to="/signin" className="btn btn-primary btn-lg btn-learn">Login / Sign up</Link></h3>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="sliderpic"
            src={bg2}
            alt="Second slide"
          />

          <div className="loginBtn">
            <p><Link to="/signin" className="btn btn-primary btn-lg btn-learn">Login / Sign up</Link></p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="sliderpic"
            src={bg3}
            alt="Third slide"
          />

          <div className="loginBtn">
            <p><Link to="/signin" className="btn btn-primary btn-lg btn-learn">Login / Sign up</Link></p>
          </div>
        </Carousel.Item>
      </Carousel>

    );

  }
}



export default HomeSlider;
