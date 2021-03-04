import React, { Component } from 'react';
import './App.css';


class TOC extends Component {
  render() {
    return (
      <nav>
          <ul>
              <li><a href="1.html">HTML</a></li>
              <li><a href="2.html">CSS</a></li>
              <li><a href="3.html">JavaScript</a></li>
          </ul>
      </nav>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <article>
          <h2>HTML</h2>
          HTML is HyperText Markup Language.
      </article>
    );
  }
}

class Subject extends Component {
  render() {
    return (
      <header>
          <h1>{this.props.title}</h1>
          {this.props.sub}
      </header>  
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>        <Subject></Subject>
        <TOC></TOC>
        <Content></Content>
      </div>
    );
  }
}

export default App;