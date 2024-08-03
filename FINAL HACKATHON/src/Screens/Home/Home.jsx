import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import axios from 'axios';
import smit from '../../assets/smitimage.png';

const Home = () => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/admins/');
        console.log('admin data', response.data.data);
        setData(response.data.data);
      } catch (error) {
        console.log('error', error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  function handleSubmit(item) {
    setSelectedItem(item);
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <>
      <Navbar />
      <div><img src={smit} className='w-[100%] h-80' alt="Smit" /></div>

      {data.map((item, index) => (
        <div
          key={index}
          onClick={() => handleSubmit(item)}
          className='border-2 border-blue-400 mt-3 mb-6 text-center cursor-pointer'
        >
          <h1 className='text-2xl'>{item.title}</h1>
          <p className='font-medium'>{item.description}</p>
        </div>
      ))}

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-xl font-semibold">{selectedItem?.title}</h2>
            <p className="mt-2">{selectedItem?.description}</p>
            <button
              onClick={handleClose}
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
