import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import playerData from '../../Player Data/PlayerData.json';
import PlayerCart from "../Player Cart/PlayerCart";
import Player from "../Player/Player";
import "./PlayerList.css";

const PlayerList = () => {
  const [playerInfo, setPlayerInfo] = useState([]);
  const [playerCart, setPlayerCart] = useState([]);

  useEffect(() => {
    setPlayerInfo(playerData)
  }, [])

  // button handler
  const selectHandleButton = (info) => {
    const newCart = [...playerCart, info];
    console.log(newCart);
    setPlayerCart(newCart);
  }
  return (
    <Container className="mt-5">
      <Row>
        <Col md={10}>
          <div className="playerList">
            {
                playerInfo.map(info => <Player key={info.id} info={info} selectHandleButton={selectHandleButton}></Player>)
            }
          </div>
        </Col>
        <Col md={2}>
          <div>
            <PlayerCart playerCart={playerCart}></PlayerCart>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PlayerList;
