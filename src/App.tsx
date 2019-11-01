import React from 'react';
import './App.css';

import Logo from './Logo/Logo';
import TestFs from './model/TestFs';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <textarea className="App" value={TestFs.getDirectoryListing()} readOnly rows={20} />
      </header>
    </div>
  );
}

export default App;
