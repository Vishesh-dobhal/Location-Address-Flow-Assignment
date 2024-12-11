import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import LocationPermissionAlert from './Components/LocationPermissionAlert';
import LocationSelectionPage from './Components/LocationSelectionPage';
import EnterAddress from './Components/EnterAddress'; 

function App() {
  return (
    <Router>
      <div className="App">
       
        <Header />

        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/select-location" element={<LocationSelectionPage />} /> 
          <Route path="/enter-address" element={<EnterAddress />} />  
        </Routes>

        {/* Footer */}
        <footer className="py-4 bg-gray-800 text-white text-center">
          <p>© 2024 MyApp. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <main className="text-center py-16 px-4 bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to MyApp!</h1>
      <p className="text-xl text-gray-600 mb-10">
        Explore the best services and products we offer.
      </p>
      <LocationPermissionAlert />  
    </main>
  );
}

export default App;