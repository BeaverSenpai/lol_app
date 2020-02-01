import React from "react";
import "../../styles/Summoner.css";

const Summoner = props => {
  const id = props.playerId;
  const {
    avatar,
    leftSpell,
    rightSpell,
    champion,
    userName,
    amountOfGamesPlayedTogether
  } = props.liveGamePlayers[id];
  return (
    <div className="summonerContainer">
      <div className="avatarContainer">
        <div className="avatar">
          <img src={avatar} alt="" />
        </div>
        <div className="spellsContainer">
          <div className="spell">
            <img src={leftSpell} alt="" />
          </div>
          <div className="spell">
            <img src={rightSpell} alt="" />
          </div>
        </div>
      </div>
      <div className="userNameContainer">
        <div className="userInformation">
          <h3> {champion}</h3>
          <h3>Summoner: {userName}</h3>
          <h3>Games played together : {amountOfGamesPlayedTogether} </h3>
        </div>
      </div>
    </div>
  );
};

export default Summoner;
