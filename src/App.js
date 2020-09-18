import React from 'react';
import routes from './routes';
import Navigation from './components/Navigation/Navigation'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      {routes}
    </div>
  );
}

export default App;
