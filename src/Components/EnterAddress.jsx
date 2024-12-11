import { useState } from 'react';

const EnterAddress = () => {
  const [address, setAddress] = useState({
    houseNumber: '',
    apartmentArea: '',
    category: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handleSaveAddress = () => {
    
    console.log('Address saved:', address);
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-4">
      <h2 className="text-2xl font-bold mb-4">Enter Your Address</h2>
      <form className="space-y-4">
       
        <div>
          <label className="block mb-2">House/Flat/Block No.</label>
          <input
            type="text"
            name="houseNumber"
            value={address.houseNumber}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

       
        <div>
          <label className="block mb-2">Apartment/Road/Area</label>
          <input
            type="text"
            name="apartmentArea"
            value={address.apartmentArea}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        
        <div>
          <label className="block mb-2">Save As</label>
          <div className="flex space-x-4">
            <button
              type="button"
              className={`py-2 px-4 rounded-md ${address.category === 'Home' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setAddress({ ...address, category: 'Home' })}
            >
              Home
            </button>
            <button
              type="button"
              className={`py-2 px-4 rounded-md ${address.category === 'Office' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setAddress({ ...address, category: 'Office' })}
            >
              Office
            </button>
            <button
              type="button"
              className={`py-2 px-4 rounded-md ${address.category === 'Friends & Family' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setAddress({ ...address, category: 'Friends & Family' })}
            >
              Friends & Family
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={handleSaveAddress}
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
        >
          Save Address
        </button>
      </form>
    </div>
  );
};

export default EnterAddress;

