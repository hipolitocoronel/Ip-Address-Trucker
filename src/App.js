import { useEffect, useState } from 'react';
import Header from './components/Header';
import Map from './components/Map';
import ResultLocation from './components/ResultLocation';

function App() {


  const initialLocation = {
    ip: '190.7.36.37',
    location: {
      city: 'Corrientes',
      timezone: '-03:00',
      lat: '-27.46784',
      lng: '-58.8344',
    },
    isp: 'Gigared S.A.'
  }


  const [location, setLocation] = useState(initialLocation);



  const handleLocation = (currentIp) => {
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_FejjvB8BHRZSOBWqE3ckgFO7LGxv0&ipAddress=${currentIp}`;

    fetch(url)
      .then(res => res.json())
      .then(res => setLocation(res));

  }


  return (
    <main className='main-container'>
      <Header handleLocation={handleLocation} />
      <div className='result-container'>
        <ResultLocation location={location} />
        <Map locat={location}/>
      </div>
    </main>
  );
}

export default App;
