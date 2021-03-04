import React, { Component } from 'react';

class Nav extends Component {
  componentDidMount() {
    fetch('list.json')
      .then(function(result) {
        return result.json();
      })
      .then(function(json) {
        console.log(json);
      }.bind(this));
  }
  render() { 
    return (
      <nav>
        <ul>
          <li><a href="1">HTML</a></li>
          <li><a href="2">CSS</a></li>
          <li><a href="3">JS</a></li>
        </ul>
      </nav>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1>WEB</h1>
      <Nav></Nav>
      <article>
        <h2>Welcome</h2>
        Hello, React &amp; Ajax
      </article>
    </div>
  );
}

export default App;
