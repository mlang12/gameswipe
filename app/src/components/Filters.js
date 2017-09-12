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
          <select className="selectpicker" multiple>
            <option> Adventure</option>
            <option> Arcade</option>
            <option> Fighting</option>
            <option> Hack and slash/Beat 'em up</option>
            <option> Indie</option>
            <option> Music</option>
            <option> Pinball</option>
            <option> Platform</option>
            <option> Point-and-click</option>
            <option> Puzzle</option>
            <option> Quiz/Trivia</option>
            <option> Racing</option>
            <option> Real Time Strategy (RTS)</option>
            <option> Role-playing (RPG)</option>
            <option> Shooter</option>
            <option> Simulator</option>
            <option> Sport</option>
            <option> Strategy</option>
            <option> Tactical</option>
            <option> Turn-based strategy (TBS)</option>
          </select>
        </div>

        <div className="filterHolder">
          <h4> Platforms </h4>
          <select className="selectpicker" multiple>
            <option>Linux</option>
            <option>Nintendo 64</option>
            <option>Wii</option>
            <option>PC (Microsoft Windows)</option>
            <option>PlayStation</option>
            <option>PlayStation 2</option>
            <option>PlayStation 3</option>
            <option>Xbox</option>
            <option>Xbox 360</option>
            <option>Mac</option>
            <option>Nintendo Entertainment System (NES)</option>
            <option>Super Nintendo Entertainment System (SNES)</option>
            <option>Nintendo DS</option>
            <option>Nintendo GameCube</option>
            <option>Game Boy Color</option>
            <option>Dreamcast</option>
            <option>Game Boy Advance</option>
            <option>Sega Mega Drive/Genesis</option>
            <option>Sega Saturn</option>
            <option>Game Boy</option>
            <option>Android</option>
            <option>Sega Game Gear</option>
            <option>Xbox Live Arcade</option>
            <option>Nintendo 3DS</option>
            <option>PlayStation Portable</option>
            <option>iOS</option>
            <option>Wii U</option>
            <option>PlayStation Network</option>
            <option>PlayStation 4</option>
            <option>Xbox One</option>
            <option>Mobile</option>
            <option>Sega CD</option>
            <option>Web browser</option>
            <option>SteamOS</option>
            <option>Nintendo Switch</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Filters;
