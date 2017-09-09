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
            <option>Adventure</option>
            <option>Arcade</option>
            <option>Fighting</option>
            <option>Hack and slash/Beat 'em up</option>
            <option>Indie</option>
            <option>Music</option>
            <option>Pinball</option>
            <option>Platform</option>
            <option>Point-and-click</option>
            <option>Puzzle</option>
            <option>Quiz/Trivia</option>
            <option>Racing</option>
            <option>Real Time Strategy (RTS)</option>
            <option>Role-playing (RPG)</option>
            <option>Shooter</option>
            <option>Simulator</option>
            <option>Sport</option>
            <option>Strategy</option>
            <option>Tactical</option>
            <option>Turn-based strategy (TBS)</option>
          </select>
        </div>

        <div className="filterHolder">
          <h4> Platforms </h4>
          <select className="selectpicker" multiple>
            <option>3DO Interactive Multiplayer</option>
            <option>Acorn Archimedes</option>
            <option>Acorn Electron</option>
            <option>Amazon Fire TV</option>
            <option>Amiga</option>
            <option>Amiga CD32</option>
            <option>Amstrad CPC</option>
            <option>Analogue electronics</option>
            <option>Android</option>
            <option>Apple II</option>
            <option>Apple IIGS</option>
            <option>Arcade</option>
            <option>Atari 2600</option>
            <option>Atari 5200</option>
            <option>Atari 7800</option>
            <option>Atari 8-bit</option>
            <option>Atari Jaguar</option>
            <option>Atari Lynx</option>
            <option>Atari ST/STE</option>
            <option>Bally Astrocade</option>
            <option>BBC Microcomputer System</option>
            <option>BlackBerry OS</option>
            <option>Call-A-Computer time-shared mainframe computer system</option>
            <option>CDC Cyber 70</option>
            <option>ColecoVision</option>
            <option>Commodore 16</option>
            <option>Commodore C64/128</option>
            <option>Commodore PET</option>
            <option>Commodore Plus/4</option>
            <option>Commodore VIC-20</option>
            <option>DEC GT40</option>
            <option>Donner Model 30</option>
            <option>Dreamcast</option>
            <option>EDSAC</option>
            <option>Fairchild Channel F</option>
            <option>Family Computer (FAMICOM)</option>
            <option>Family Computer Disk System</option>
            <option>Ferranti Nimrod Computer</option>
            <option>FM Towns</option>
            <option>Game Boy</option>
            <option>Game Boy Advance</option>
            <option>Game Boy Color</option>
            <option>HP 2100</option>
            <option>HP 3000</option>
            <option>Hyper Neo Geo 64</option>
            <option>Imlac PDS-1</option>
            <option>Intellivision</option>
            <option>iOS</option>
            <option>Linux</option>
            <option>Mac</option>
            <option>Microcomputer</option>
            <option>Microvision</option>
            <option>Mobile</option>
            <option>MSX</option>
            <option>MSX2</option>
            <option>N-Gage</option>
            <option>Neo Geo AES</option>
            <option>Neo Geo CD</option>
            <option>Neo Geo MVS</option>
            <option>Neo Geo Pocket</option>
            <option>Neo Geo Pocket Color</option>
            <option>Nintendo 3DS</option>
            <option>Nintendo 64</option>
            <option>Nintendo DS</option>
            <option>Nintendo Entertainment System (NES)</option>
            <option>Nintendo GameCube</option>
            <option>Nintendo PlayStation</option>
            <option>Nintendo Switch</option>
            <option>Nuon</option>
            <option>Odyssey</option>
            <option>OnLive Game System</option>
            <option>Ouya</option>
            <option>PC (Microsoft Windows)</option>
            <option>PC DOS</option>
            <option>PC Engine SuperGrafx</option>
            <option>PC-8801</option>
            <option>PDP-1</option>
            <option>PDP-10</option>
            <option>PDP-11</option>
            <option>PDP-7</option>
            <option>PDP-8</option>
            <option>Philips CD-i</option>
            <option>Philips Videopac G7000</option>
            <option>PLATO</option>
            <option>PlayStation</option>
            <option>PlayStation 2</option>
            <option>PlayStation 3</option>
            <option>PlayStation 4</option>
            <option>PlayStation Network</option>
            <option>PlayStation Portable</option>
            <option>PlayStation Vita</option>
            <option>SDS Sigma 7</option>
            <option>Sega 32X</option>
            <option>Sega CD</option>
            <option>Sega Game Gear</option>
            <option>Sega Master System</option>
            <option>Sega Mega Drive/Genesis</option>
            <option>Sega Saturn</option>
            <option>SG-1000</option>
            <option>Sharp X1</option>
            <option>Sharp X68000</option>
            <option>SteamOS</option>
            <option>Super Famicom</option>
            <option>Super Nintendo Entertainment System (SNES)</option>
            <option>SwanCrystal</option>
            <option>Tapwave Zodiac</option>
            <option>Texas Instruments TI-99</option>
            <option>TRS-80</option>
            <option>TurboGrafx-16/PC Engine</option>
            <option>Vectrex</option>
            <option>Virtual Boy</option>
            <option>Virtual Console (Nintendo)</option>
            <option>Web browser</option>
            <option>Wii</option>
            <option>Wii U</option>
            <option>WiiWare</option>
            <option>Windows Phone</option>
            <option>WonderSwan</option>
            <option>WonderSwan Color</option>
            <option>Xbox</option>
            <option>Xbox 360</option>
            <option>Xbox Live Arcade</option>
            <option>Xbox One</option>
            <option>ZX Spectrum</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Filters;
