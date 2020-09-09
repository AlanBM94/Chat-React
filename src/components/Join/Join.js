import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const changeNameHandler = (e) => {
    setName(e.target.value);
  };

  const changeRoomHandler = (e) => {
    setRoom(e.target.value);
  };

  const pressButtonHandler = (e) => {
    if (!name || !room) {
      e.preventDefault();
    } else {
      return null;
    }
  };

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            value={name}
            onChange={(e) => changeNameHandler(e)}
          />
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            value={room}
            onChange={(e) => changeRoomHandler(e)}
          />
          <Link
            onClick={(e) => pressButtonHandler(e)}
            to={`/chat?name=${name}&room=${room}`}
          >
            <button className="button mt-20" type="submit">
              Sign in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Join;
