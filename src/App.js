import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <Header />
      <div className="App">
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
            Learn React.js
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
