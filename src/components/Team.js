import React from "react";
import PlayerLiveGame from "./player/PlayerLiveGame";
import "../styles/Team.css";

const Team = props => {
  return (
    <div>
      <h1>Team {props.teamId}</h1>
      <PlayerLiveGame liveGamePlayers={props.liveGamePlayers} playerId={0} />
      <PlayerLiveGame liveGamePlayers={props.liveGamePlayers} playerId={1} />
      <PlayerLiveGame liveGamePlayers={props.liveGamePlayers} playerId={0} />
      <PlayerLiveGame liveGamePlayers={props.liveGamePlayers} playerId={0} />
      <PlayerLiveGame liveGamePlayers={props.liveGamePlayers} playerId={0} />
    </div>
  );
};

export default Team;
