import React from 'react';

export default class ChampSelecter extends React.Component {

  static defaultProps = {
    champName: ["Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Ashe",
    "Aurelion Sol", "Azir"]
  }

  render() {
    console.log(this.props.champName);
    console.log(this.state);
    console.log(this.props.key);
    //method champOptions changes declared props to option key
    let champOptions = this.props.champName.map(champ => {
      return <option key={champ} value={champ}>{champ}</option>
    })
    return (
      <div className= "dropdown">
        <label> Choose: </label>
        <select ref="champion">
        {champOptions}
        </select>
      </div>
    );
  }
}
