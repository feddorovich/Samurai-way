import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
        <div><Header/></div>
        <div className="App">
            <ul>
                <li>css</li>
                <li>html</li>
                <li>js</li>
                <li>reack</li>
            </ul>
        </div>
    </div>
  );
}

const Header = () => {
    return (
        <div>
            <a href="#">Home</a>
            <a href="#">News Feed</a>
            <a href="#">Messages</a>
        </div>
    );
}

export default App;
