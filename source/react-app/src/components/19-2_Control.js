import React, { Component } from 'react';
class Control extends Component {
  render() {
    console.log('Control render');
    return (
      <ul>
        <li><a href="/create">create</a></li>
        <li><a href="/update">update</a></li>
        <li><input type="button" value="delete"></input></li>
      </ul>
    );
  }
}

export default Control; 
