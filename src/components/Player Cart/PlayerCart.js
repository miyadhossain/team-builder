import React from "react";
import { Card, Container, ListGroup } from "react-bootstrap";

const PlayerCart = (props) => {
  const cart = props.playerCart;

  // total price
  const totalPrice = cart.reduce((salary, player) => salary + player.salary, 0);
  return (
    <div className="">
      <Container>
        <Card style={{ width: "15rem" }}>
          <Card.Header>
            <h5 className="text-center">Player summary</h5>
          </Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <p>Total player selected: {cart.length}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              {cart.map((info) => (
                <div key={info.id}>
                  <li>{info.name + " $" + info.salary}</li>
                </div>
              ))}
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>Total Budget: ${totalPrice}</h6>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
    </div>
  );
};

export default PlayerCart;
