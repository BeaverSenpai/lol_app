import React from "react";
import Team from "./components/Team";
import "./styles/App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liveGamePlayers: [
        {
          avatar:
            "https://moat.gg/forums/uploads/monthly_2018_07/Zed.jpg.dd5e2c3a20be0ae28c6f51615fd30354.jpg",
          leftSpell:
            "http://pm1.narvii.com/5792/0ce6cda7883a814a1a1e93efa05184543982a1e4_hq.jpg",
          rightSpell:
            "https://news-a.akamaihd.net/public/images/pages/2016/february/f-fla/flash-icon.jpg",
          champion: "Zed",
          userName: "Wild Beaver",
          amountOfGamesPlayedTogether: 5,
          gamesPlayedWithChampion: 158,
          minionsKilled: 281,
          kda: [13.2, 6.3, 7.5],
          divisionImage:
            "https://vignette.wikia.nocookie.net/leagueoflegends/images/1/10/Season_2012_-_Diamond.png/revision/latest/top-crop/width/300/height/300?cb=20130928162320",
          divisionName: "Diamond I",
          gamesLost: 14,
          gamesWon: 12,
          lp: 24
        },
        {
          avatar: "https://www.mobafire.com/images/avatars/jhin-blood-moon.png",
          leftSpell:
            "https://static.memrise.com/uploads/things/images/153645041_170724_2212_16.jpg",
          rightSpell:
            "https://news-a.akamaihd.net/public/images/pages/2016/february/f-fla/flash-icon.jpg",
          champion: "Jhin",
          userName: "Fiffon",
          amountOfGamesPlayedTogether: 2,
          gamesPlayedWithChampion: 89,
          minionsKilled: 359,
          kda: [30, 0, 0],
          divisionImage:
            "https://data1.cupsell.pl/upload/generator/18831/640x420/880736_print-trimmed-1.png?resize=max_sizes&key=55f9a22768eed085006592c1174c0235",
          divisionName: "Challenger",
          gamesLost: 0,
          gamesWon: 162,
          lp: 70
        }
      ]
    };
  }

  // componentDidMount() {
  //   fetch(
  //     `https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/wild%20beaver?api_key=RGAPI-8b19fe21-8892-458c-8be0-ed03ff2b5ced`,
  //     {
  //       mode: "cors",
  //       headers: {
  //         "Access-Control-Allow-Origin": "*"
  //       }
  //     }
  //   ).then(res => {
  //     const summoner = res.data;
  //     console.log(summoner);
  //   });
  // }

  render() {
    return (
      <div className="teamsContainer">
        <Team liveGamePlayers={this.state.liveGamePlayers} teamId={1} />
        <div className="vsContainer">
          <h1 className="vsSubtitle">VS</h1>
        </div>
        <Team liveGamePlayers={this.state.liveGamePlayers} teamId={2} />
      </div>
    );
  }
}
