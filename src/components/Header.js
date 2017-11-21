import React from 'react';
import Title from './Header/Title.js';

export default class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }
        // this event can be handled using values and changing them
  render() {
    return (
      <div>
        <Title title={this.props.title} />

      </div>
    );
  }
}
