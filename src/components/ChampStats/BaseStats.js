import React from 'react';

export default class BaseStats extends React.Component {
  constructor(){
    super();
      this.state = {
          champName: ["Aatrox"],
          atkDamage: ["60.376"],
          healthPts: ["537.8"],
          armor: ["24.384"],
          magicResist: ["32.1"],
          atkSpeed: ["0.651"],
          moveSpeed: ["345"],
          healthRegen: ["6.59"],
      };
  }

  render() {
    console.log(this.state)
    console.log(this.props)
    return (
      <div>
      <label> LVL :<input /> </label> <br/>
      <label> AD :<input placeholder={this.state.atkDamage} /> </label> <br/>
      <label> HP :<input placeholder={this.state.healthPts}/> </label> <br/>
      <label> AR :<input placeholder={this.state.armor}/> </label> <br/>
      <label> MR :<input placeholder={this.state.magicResist}/> </label> <br/>
      <label> AS :<input placeholder={this.state.atkSpeed}/> </label> <br/>
      <label> MS :<input placeholder={this.state.moveSpeed}/> </label> <br/>
      <label> HP5 :<input placeholder={this.state.healthRegen}/> </label> <br/>
      </div>
    );
  }
}
