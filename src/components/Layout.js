import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import ChampSelecter from './ChampSelecter.js'
import BaseStats from './ChampStats/BaseStats.js'


var Aatrox =
  {champName: "Aatrox", atkDamage: "60.376", healthPts: "537.8", armor: "24.384",
magicResist:"32.1", atkSpeed: "0.651", moveSpeed: "345", healthRegen: "6.59"};


export default class Layout extends React.Component {
  constructor (){
    super();
    this.state = {
      name:["Nik"],
      title:[ "Select Champ:"],
      champ: [
        'Aatrox':{champName: "Aatrox", atkDamage: "60.376", healthPts: "537.8", armor: "24.384",
      magicResist:"32.1", atkSpeed: "0.651", moveSpeed: "345", healthRegen: "6.59" },
       'Ahri':{champName: "Ahri", atkDamage:"40"}],

    };
  }


  static defaultProps = {
    champName: "this is the one that will display for .props in layout",

  }

  changeTitle(champName){
    this.setState({champName})
  }


  render() {
    console.log(this.props.champName);
    console.log(this.state.champ);
    console.log(Aatrox.atkDamage, Aatrox.champName)
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}  />
        <ChampSelecter  />
        <BaseStats />  <br/>
        <Footer />
      </div>
    );
  }
}
