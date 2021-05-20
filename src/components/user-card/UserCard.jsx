import * as React from "react";
import './UserCard.css';

export const UserCard = props => {
    const {name, age, gender, balance, picture} = props.users;

    return (
        <div className="UserCard">
            <img src={picture} alt="User picture"/>
            <h3>{name}</h3>
            <p>Age: <span>{age}</span></p>
            <p>Gender: <span>{gender}</span></p>
            <p>Balance: <span>{balance}</span></p>
        </div>
    )
}