import React from "react";
import { Container, Row } from "react-bootstrap";
import bannerbg from '../assets/img/banner-bg.png';
import '../styles/Banner.css';

class TrainerListBanner extends React.Component {

  render() {
    return(
      <div
        className="banner"
        style = {{ backgroundImage: `url(${ bannerbg })`,
          backgroundColor: "#fbfafa",
          backgroundRepeat: "repeat-x",
          height: "100px",
          backgroundPosition: "center",
          width: "100%",
        }}>
        <Container className="banner-div">
          <Row>
            <div className="col-sm-10">
              <h1 className="banner-title">Our Experienced Trainers</h1>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default TrainerListBanner;
