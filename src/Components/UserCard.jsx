 
 
import React from "react";

const UserCard = ({ user }) => {
  const { id, email, first_name, last_name, avatar } = user;

  return (
    <div className="user-card">
      <img src={avatar} alt={`Avatar of ${first_name} ${last_name}`} />
      <div className="user-details">
        <p>ID: {id}</p>
        <p>Email: {email}</p>
        <p>First Name: {first_name}</p>
        <p>Last Name: {last_name}</p>
      </div>
    </div>
  );
};

export default UserCard;
