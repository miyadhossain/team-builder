import React from 'react';

const PlayerCart = (props) => {
    const cart = props.playerCart;
    const name = cart.map(info => info.name);
    // total price
    const totalPrice = cart.reduce((salary, player) => salary + player.salary, 0);
    return (
        <div>
            <h5>Player summary</h5>
            <p>Total selected: {cart.length}</p>
            <ul>
                <li>{name}</li>
            </ul>
            <p>Total Salary: ${totalPrice}</p>
        </div>
    );
};

export default PlayerCart;