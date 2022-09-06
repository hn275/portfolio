import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from 'modules/common/components/nav';
import { Home } from 'modules/pages/home';
import { Skills } from 'modules/pages/skills';
import { Contact } from 'modules/pages/contact';
import { About } from 'modules/pages/about';
import { Portfolio } from 'modules/pages/portfolio';

function App() {
  const [hasNav, setHasNav] = useState<boolean>(true);

  return (
    <div
      className='App'
      style={{ overflowX: 'hidden' }}
    >
      <Navbar hasNav={hasNav} />
      <main>
        <Routes>
          <Route
            path='/'
            element={<Home setHasNav={setHasNav} />}
          />
          <Route
            path='/skills'
            element={<Skills />}
          />
          <Route
            path='/contact'
            element={<Contact />}
          />
          <Route
            path='/about'
            element={<About />}
          />
          <Route
            path='/portfolio'
            element={<Portfolio />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
