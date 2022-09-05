import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from 'modules/common/components/nav';
import { Home } from 'modules/pages/home';
import { Skills } from 'modules/skills';

function App() {
  const [hasNav, setHasNav] = useState<boolean>(true);

  return (
    <div className='App'>
      <Navbar hasNav={hasNav} />
      <main>
        <Routes>
          <Route
            path='/home'
            element={<Home setHasNav={setHasNav} />}
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
