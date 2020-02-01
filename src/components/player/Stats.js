import React from "react";
import "../../styles/Stats.css";

const Stats = props => {
  const id = props.playerId;
  const {
    champion,
    gamesPlayedWithChampion,
    minionsKilled
  } = props.liveGamePlayers[id];

  const calculateKda = () => {
    if (kda[1] === 0) {
      return kda[0] + kda[2];
    }
    return ((kda[0] + kda[2]) / kda[1]).toFixed(2);
  };

  const kdaFontColor = () => {
    let font = "gray";
    if (calculateKda() >= 3 && calculateKda() < 4) {
      font = "green";
    }
    if (calculateKda() >= 4 && calculateKda() < 5) {
      font = "blue";
    }
    if (calculateKda() > 5) {
      font = "gold";
    }
    return { color: font };
  };

  const kda = props.liveGamePlayers[id].kda;

  return (
    <div className="statsContainer">
      <h3>
        Games played with {champion}: {gamesPlayedWithChampion}
      </h3>
      <h3>CS {minionsKilled}</h3>
      <h3 className="kda" style={kdaFontColor()}>
        {calculateKda() + ":1 KDA"}
      </h3>
      <h3>{kda[0] + "/" + kda[1] + "/" + kda[2]}</h3>
    </div>
  );
};

export default Stats;
