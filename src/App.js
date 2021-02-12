import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";


class App extends React.Component {

  host = '';
  state = {
    host: ''
 };

  componentDidMount() {
    this.getHost();
  }

  getHost = async () => {
    try { //try to get data
      const host = window.location.host;
      const parts = host.split('.');

      let url;
      if(parts.length !== 3) {
        url = "http://localhost:5000/hosts/sample";
      } else {
        url = `http://localhost:5000/hosts/${parts[0]}`;
      }

      const response = await fetch(url);
      if (response.ok) { // ckeck if status code is 200
          const data = await response.json();
          console.log(data);
          this.setState({host: data.name});
      } else { this.setState({ error: true }) }
    } catch (e) { //code will jump here if there is a network problem
      this.setState({ error: true });
    }
  }

  render() {
    return <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {this.state.host}
        </a>
      </header>
    </div>
  }
}

export default App;
