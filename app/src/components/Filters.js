import React, { Component } from 'react';

class Filters extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
  }

  render() {
    return (
      <div className="landingTileArea">
        <h2> Edit Filters </h2>

        <div className="filterHolder">
          <h4> Genres </h4>
            <input id="adventure" className="checkboxOption" type="checkbox">Adventure</input>
            {/*<input id="arcade" className="checkboxOption" type="checkbox">Arcade</input>
            <input id="fighting" className="checkboxOption" type="checkbox">Fighting</input>
            <input id="Hack and slash/Beat 'em up" className="checkboxOption" type="checkbox">Hack and slash/Beat 'em up</input>
            <input id="Indie" className="checkboxOption" type="checkbox">Indie</input>
            <input id="Music" className="checkboxOption" type="checkbox">Music</input>
            <input id="Pinball" className="checkboxOption" type="checkbox">Pinball</input>
            <input id="Platform" className="checkboxOption" type="checkbox">Platform</input>
            <input id="Point-and-click" className="checkboxOption" type="checkbox">Point-and-click</input>
            <input id="Puzzle" className="checkboxOption" type="checkbox">Puzzle</input>
            <input id="Quiz/Trivia" className="checkboxOption" type="checkbox">Quiz/Trivia</input>
            <input id="Racing" className="checkboxOption" type="checkbox">Racing</input>
            <input id="Real Time Strategy (RTS)" className="checkboxOption" type="checkbox">Real Time Strategy (RTS)</input>
            <input id="Role-playing (RPG)" className="checkboxOption" type="checkbox">Role-playing (RPG)</input>
            <input id="Shooter" className="checkboxOption" type="checkbox">Shooter</input>
            <input id="Simulator" className="checkboxOption" type="checkbox">Simulator</input>
            <input id="Sport" className="checkboxOption" type="checkbox">Sport</input>
            <input id="Strategy" className="checkboxOption" type="checkbox">Strategy</input>
            <input id="Tactical" className="checkboxOption" type="checkbox">Tactical</input>
            <input id="Turn-based strategy (TBS)" className="checkboxOption" type="checkbox">Turn-based strategy (TBS)</input>*/}
        </div>

        <div className="filterHolder">
          <h4> Platforms </h4>
            {/*<input id="Linux" className="checkboxOption" type="checkbox">Linux</input>
            <input id="Nintendo 64" className="checkboxOption" type="checkbox">Nintendo 64</input>
            <input id="Wii" className="checkboxOption" type="checkbox">Wii</input>
            <input id="PC (Microsoft Windows)" className="checkboxOption" type="checkbox">PC (Microsoft Windows)</input>
            <input id="PlayStation" className="checkboxOption" type="checkbox">PlayStation</input>
            <input id="PlayStation 2" className="checkboxOption" type="checkbox">PlayStation 2</input>
            <input id="PlayStation 3" className="checkboxOption" type="checkbox">PlayStation 3</input>
            <input id="Xbox" className="checkboxOption" type="checkbox">Xbox</input>
            <input id="Xbox 360" className="checkboxOption" type="checkbox">Xbox 360</input>
            <input id="Mac" className="checkboxOption" type="checkbox">Mac</input>
            <input id="Nintendo Entertainment System (NES)" className="checkboxOption" type="checkbox">Nintendo Entertainment System (NES)</input>
            <input id="Super Nintendo Entertainment System (SNES)" className="checkboxOption" type="checkbox">Super Nintendo Entertainment System (SNES)</input>
            <input id="Nintendo DS" className="checkboxOption" type="checkbox">Nintendo DS</input>
            <input id="Nintendo GameCube" className="checkboxOption" type="checkbox">Nintendo GameCube</input>
            <input id="Game Boy Color" className="checkboxOption" type="checkbox">Game Boy Color</input>
            <input id="Dreamcast" className="checkboxOption" type="checkbox">Dreamcast</input>
            <input id="Game Boy Advance" className="checkboxOption" type="checkbox">Game Boy Advance</input>
            <input id="Sega Mega Drive/Genesis" className="checkboxOption" type="checkbox">Sega Mega Drive/Genesis</input>
            <input id="Sega Saturn" className="checkboxOption" type="checkbox">Sega Saturn</input>
            <input id="Game Boy" className="checkboxOption" type="checkbox">Game Boy</input>
            <input id="Android" className="checkboxOption" type="checkbox">Android</input>
            <input id="Sega Game Gear" className="checkboxOption" type="checkbox">Sega Game Gear</input>
            <input id="Xbox Live Arcade" className="checkboxOption" type="checkbox">Xbox Live Arcade</input>
            <input id="Nintendo 3DS" className="checkboxOption" type="checkbox">Nintendo 3DS</input>
            <input id="PlayStation Portable" className="checkboxOption" type="checkbox">PlayStation Portable</input>
            <input id="iOS" className="checkboxOption" type="checkbox">iOS</input>
            <input id="Wii U" className="checkboxOption" type="checkbox">Wii U</input>
            <input id="PlayStation Network" className="checkboxOption" type="checkbox">PlayStation Network</input>
            <input id="PlayStation 4" className="checkboxOption" type="checkbox">PlayStation 4</input>
            <input id="Xbox One" className="checkboxOption" type="checkbox">Xbox One</input>
            <input id="Mobile" className="checkboxOption" type="checkbox">Mobile</input>
            <input id="Sega CD" className="checkboxOption" type="checkbox">Sega CD</input>
            <input id="Web browser" className="checkboxOption" type="checkbox">Web browser</input>
            <input id="SteamOS" className="checkboxOption" type="checkbox">SteamOS</input>
            <input id="Nintendo Switch" className="checkboxOption" type="checkbox">Nintendo Switch</input>*/}
        </div>
      </div>
    );
  }
}

export default Filters;
