import './App.css';
import Map from './component/Map';

function App() {
  const googleMapsApiKey = ""

  return (
    <div style={{ height: '100vh' }}>
      <Map
        locations={[
          { lat: 40.7128, lng: -74.0060 },
          { lat: 34.0522, lng: -118.2437 }
        ]}
        height="900px"
        zoom={3}
        fullscreenControl={true}
        apiKey={googleMapsApiKey}
      />
    </div>
  );
}

export default App;
