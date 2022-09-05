import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from 'modules/common/components/nav';
import { Home } from 'modules/pages/home';
import { Skills } from 'modules/skills';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <main>
        <Routes>
          <Route
            path='/home'
            element={<Home />}
          />
          <Route
            path='/skills'
            element={<Skills />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
