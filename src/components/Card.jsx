import React from "react";
import UserDetails from "./UserDetails";
import ButtonSection from "./ButtonSection";
import "./Card.css";
import "./CharacterSection.css";
import CharacterSection from "./CharacterSection";

const Card = (props) => {
  const user = props.user;
  const socialLinks = user["social-links"];

  return (
    <div className="card">
      <CharacterSection user={user} />
      {/* <UserDetails user={user} /> */}
      {/* <ButtonSection socialLinks={socialLinks} /> */}
      <div className="buttons">
        <button href="/google.com" className="botones">
            Home
        </button>
      </div>
    </div>
  );
};

export default Card;