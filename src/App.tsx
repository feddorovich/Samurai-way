import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f2b060c7a92408bac811_logo.svg"
                     alt=""/>
            </header>
            <nav className='nav'>
                <div><a href="#">Profile</a></div>
                <div><a href="#">Messages</a></div>
                <div><a href="#">News</a></div>
                <div><a href="#">Music</a></div>
                <div><a href="#">Settings</a></div>
            </nav>
            <div className='content'>
                <div>
                    <img src="https://sletaem.kz/upload/iblock/bb9/bb92209a394938a93de111fcf86de120.jpg" alt=""/>
                </div>
                <div>
                    ava + desctiption
                </div>
                <div>
                    My posts
                    <div>New post</div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                </div>
            </div>
        </div>
    );
}

export default App;
