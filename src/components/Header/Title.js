import React from 'react';

export default class Title extends React.Component {

  render() {

    console.log(this.props.name)
    return (
      //this works because changeTitle() is bound to this with title= to state
      <h1> {this.props.title}</h1>
    );
  }
}
