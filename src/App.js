import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './login';
import Signup from './singup';
import { Home } from './home';
import profiles from './profiles';
import { Explore } from './explore';
import posts from './posts';
import { Reels } from './reels';
import { Profile } from './profile';
import { Messages } from './messages';


function App() {
  return (
    <div className="app">
      {/* <Login /> */}
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home users={profiles} />} />
        <Route path='/explore' element={<Explore content={posts} />} />
        <Route path='/reels' element={<Reels />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/messages' element={<Messages />} />
      </Routes>
    </div>
  );
}

export default App;
