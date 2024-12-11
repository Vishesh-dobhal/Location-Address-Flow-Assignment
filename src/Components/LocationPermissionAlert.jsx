import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LocationPermissionAlert = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();  

  const handleEnableLocation = () => {
    
    navigate('/select-location');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg text-center max-w-sm w-full">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Location permission is off</h2>
        <p className="text-gray-600 mb-4">
          We need your location to find the nearest store & provide you a seamless delivery experience.
        </p>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 mb-4"
          onClick={handleEnableLocation}
        >
          Enable Location
        </button>
        <button
          className="text-red-500 py-2 px-4 rounded-md hover:bg-white-600 mb-4 border border-black"
          onClick={() => setIsVisible(false)}
        >
          Search your Location Manually
        </button>
      </div>
    </div>
  );
};

export default LocationPermissionAlert;