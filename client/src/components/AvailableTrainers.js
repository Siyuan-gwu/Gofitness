import React from "react";
import {Col, Row} from "react-bootstrap";
import {Button} from "antd";
import trainer1 from "../assets/img/trainer1.jpg";
import {Link} from "react-router-dom"
import {API_ROOT} from "../constants"
import _ from 'lodash';
import '../styles/AvailableTrainers.css';

class AvailableTrainers extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activatedFilter: "",
      trainerData: [],
      trainers: [],
      filters: [
        {label: "All", value: ""},
        {label: "Yoga", value: "Yoga"},
        {label: "Fitness", value: "Fitness"},
        {label: "HIIT", value: "HIIT"},
        {label: "Boxing", value: "Boxing"},
        {label: "Palates", value: "Palates"},
        {label: "Taichi", value: "Taichi"}
      ],
    };
  }

  componentDidMount() {
    fetch(`${API_ROOT}trainee/getAllTrainer`, {
      method: 'GET',
      headers: {'Content-Type':'application/json; charset=utf-8; Access-Control-Allow-Origin: *'},
    }).then(res => res.json()).then(
      data => {
        this.setState({
          trainerData: data,
          trainers: this.filterTrainer(data, "")
        });
      }
    ).catch((status) => {
      window.alert(status);
    });
  }

  filterTrainer(trainerData, targetValue){
    const resultTrainers = [];
    trainerData.forEach((trainer) => {
      const categories = trainer.categories;
      if(_.find(categories, (category) => {
        return !targetValue || category === targetValue;
      })) {
        resultTrainers.push(trainer);
      }
    })
    return resultTrainers;
  }

  onClickFilter(value) {
    //console.error(value);
    this.setState({
      activatedFilter: value,
      trainers: this.filterTrainer(this.state.trainerData, value)
    });
  }

  render() {
    const {trainers, filters, activatedFilter} = this.state;
    return(
      <div>
        <Row className="filterP">
          <ul className="trainer-filter">
            {filters.map(filter =>
              <li className={activatedFilter === filter.value ? 'active' : ''}
                  onClick={() => {this.onClickFilter(filter.value)}}
                  value={filter.value}><a>{filter.label}</a></li>
            )}
          </ul>
        </Row>
        <Row id="trainer-block">
          {trainers.map(({firstname, lastname, categories}) =>
            <Col xs={6} sm={4} md={3} className="trainerInfo">
              <img
                className="trainerImg"
                src={trainer1}
                alt="Trainer 1"
              />
              <h4 className="trainerName">{firstname} {lastname}</h4>
              {categories.map(category =>
                <p className="trainerState">{category}</p>
              )}
              <div><Link to="/chat" className="chatBtn btn-learn">Chat</Link></div>
            </Col>
          )}
        </Row>
      </div>
    );
  }
}

export default AvailableTrainers;
