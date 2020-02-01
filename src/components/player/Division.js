import React from "react";
import "../../styles/Division.css";

const Division = props => {
  const id = props.playerId;
  const {
    divisionName,
    divisionImage,
    gamesLost,
    gamesWon,
    lp
  } = props.liveGamePlayers[id];
  const calculateWinRatio = () => {
    const { gamesLost, gamesWon } = props.liveGamePlayers[id];
    return ((gamesWon / (gamesLost + gamesWon)) * 100).toFixed(0);
  };

  return (
    <div className="divisionContainer">
      <div className="imageContainer">
        <img src={divisionImage} alt="" />
      </div>
      <h4>{divisionName}</h4>
      <span>
        {lp}LP / {gamesWon}W / {gamesLost}L
      </span>
      <span>Win Ratio {calculateWinRatio()}%</span>
    </div>
  );
};
export default Division;
