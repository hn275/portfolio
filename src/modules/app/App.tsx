import React from 'react';
import { Navbar } from 'modules/nav';
import { Header } from 'modules/header';
import { Skills } from 'modules/skills';

function App() {
  return (
    <div className='App'>
      <Navbar />
      Hello world
      <main>
        <Header />
        <Skills />
      </main>
    </div>
  );
}

export default App;
