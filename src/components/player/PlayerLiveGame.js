import React from "react";
import "../../styles/PlayerLiveGame.css";
import Summoner from "./Summoner.js";
import Division from "./Division";
import Stats from "./Stats";
import WinRatio from "./WinRatio";

const PlayerLiveGame = props => {
  return (
    <div className="playerContainer">
      <Summoner
        liveGamePlayers={props.liveGamePlayers}
        playerId={props.playerId}
      />
      <Division
        liveGamePlayers={props.liveGamePlayers}
        playerId={props.playerId}
      />
      <Stats
        liveGamePlayers={props.liveGamePlayers}
        playerId={props.playerId}
      />
      <WinRatio />
    </div>
  );
};

export default PlayerLiveGame;
