import React from 'react';
import logo from '../../assets/images/logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Dynamic Minecraft Servers.
        </p>
        <a
          className="Minecraft Servers"
          href="https://www.minecraft.net/en-us/download/server/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download a Minecraft Server
        </a>
      </header>
    </div>
  );
}

export default App;
