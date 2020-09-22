import React from 'react';
import routes from './routes';
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      {routes}
      <Footer />
    </div>
  );
}

export default App;
