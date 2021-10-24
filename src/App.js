import { useState } from 'react';
import './assets/css/App.css';
import TripList from './components/TripList';

function App() {
  const [showTrips, setShowTrips] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <h1>TriVago</h1>
      </header>
      <button onClick={() => setShowTrips(false)}>Hide Trips</button>
      {showTrips && <TripList />}
    </div>
  );
}

export default App;
