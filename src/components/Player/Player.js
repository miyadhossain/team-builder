import React from "react";
import { Container } from "react-bootstrap";
import "./Player.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
  const { img, name, age, playRole, batStyle, salary } = props.info;
  return (
    <div>
      <Container>
        {/* <div>
          <img src={img} alt="" />
          <h3>Player Name: {name}</h3>
          <p>Age: {age}</p>
          <p>Playing role: {playRole}</p>
          <p>Batting style: {batStyle}</p>
          <p>Salary: {salary}</p>
          <button className="btn btn-primary"onClick={()=> props.selectHandleButton(props.info)}><FontAwesomeIcon icon={faUserPlus} /> Select Player</button>
        </div> */}

        <div className="row row-cols-1 row-cols-md-6 g-4">
        <div className="col">
        <div className="card" style={{ width: "18rem" }}>
          <img src={img} alt="" />
          <div className="card-body text-center">
            <h5 className="card-title ">{name}</h5>
            <p>Age: {age}</p>
            <p>Playing role: {playRole}</p>
            <p>Batting style: {batStyle}</p>
            <p>Salary: ${salary}</p>
            <button className="btn btn-primary"onClick={()=> props.selectHandleButton(props.info)}><FontAwesomeIcon icon={faUserPlus} /> Select Player</button>
          </div>
        </div>
        </div>
        </div>
      </Container>
    </div>
  );
};

export default Player;
