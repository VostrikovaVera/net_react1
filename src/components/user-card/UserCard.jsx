import * as React from "react";
import './UserCard.css';

export const UserCard = props => {
    const {users, onClick} = props;
    const {name, age, gender, balance, picture} = users;

    return (
        <div className="UserCard" onClick={onClick}>
            <div className="UserCard-pic-container">
                <img src={picture} alt="User"/>
            </div>
            <h3>{name}</h3>
            <p>Age: <span>{age}</span></p>
            <p>Gender: <span>{gender}</span></p>
            <p>Balance: <span>{balance}</span></p>
        </div>
    )
}