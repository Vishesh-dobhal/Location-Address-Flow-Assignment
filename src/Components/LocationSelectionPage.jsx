import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LocationSelectionPage = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [city, setCity] = useState(''); 
  const [map, setMap] = useState(null); 
  const [marker, setMarker] = useState(null); 

  
  const reverseGeocode = (lat, lng) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: { lat, lng } }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          
          const addressComponents = results[0].address_components;
          const city = addressComponents.find((component) =>
            component.types.includes('locality')
          );
          setCity(city ? city.long_name : 'Unknown City'); 
        } else {
          setCity('Unknown City');
        }
      } else {
        console.error('Geocoder failed due to: ' + status);
      }
    });
  };

  useEffect(() => {
    if (!map) {
      const initialMap = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.7749, lng: -122.4194 }, 
        zoom: 12,
      });

      const initialMarker = new window.google.maps.Marker({
        position: { lat: 37.7749, lng: -122.4194 },
        map: initialMap,
      });

      setMap(initialMap);
      setMarker(initialMarker);

      
      reverseGeocode(37.7749, -122.4194);
    }
  }, [map]);

  const handleLocateMe = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          setLocation(userLocation); 
          
          if (map && marker) {
            map.setCenter(userLocation); 
            marker.setPosition(userLocation); 
          }

          
          reverseGeocode(userLocation.lat, userLocation.lng);

          console.log('User location found:', userLocation);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const handleChangeAddress = () => {
    
    navigate('/enter-address');
  };

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 z-10 p-4">
        <h2 className="text-2xl font-bold mb-4 text-white">Select Your Delivery Location</h2>

       
        {city && (
          <p className="text-lg mb-4 text-white">
            Your delivery location: {location}
          </p>
        )}

       
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mb-4"
          onClick={handleLocateMe}
        >
          Locate Me
        </button>

       
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 mb-4"
          onClick={handleChangeAddress}
        >
          Change
        </button>
      </div>

      
      <div
        id="map"
        style={{
          width: '100vw',    
          height: '100vh',   
        }}
      ></div>
    </div>
  );
};

export default LocationSelectionPage;