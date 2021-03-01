import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Player = (props) => {
  const { img, name, age, playRole, batStyle, salary } = props.info;
  return (
    <div>
        <div className="card" style={{ width: "15rem" }}>
          <img src={img} alt="" />
          <div className="card-body text-center">
            <h5 className="card-title ">{name}</h5>
            <p>Age: {age}</p>
            <p>Playing role: {playRole}</p>
            <p>Batting style: {batStyle}</p>
            <p>Salary: ${salary}</p>
            <button
              className="btn btn-primary"
              onClick={() => props.selectHandleButton(props.info)}>
              <FontAwesomeIcon icon={faUserPlus} /> Select Player
            </button>
          </div>
        </div>
    </div>
  );
};

export default Player;
