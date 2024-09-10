import React, { useState } from 'react';

const ProfileGallery = () => {
  const [currentTab, setCurrentTab] = useState('About Me');
  const [images, setImages] = useState([]);

  const handleImages = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setImages((prevImages) => [...prevImages, fileURL]);
    }
  };

  return (
    <div className="flex justify-end min-h-screen bg-gray-900 p-8">
      <div className="w-1/2 space-y-6">
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="flex mb-4 bg-black justify-between rounded-full p-1">
            {['About Me', 'Experiences', 'Recommended'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 text-sm font-medium shadow-2xl rounded-full hover:shadow-2xl transition-shadow duration-200 ${
                  currentTab === tab
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setCurrentTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="text-gray-300 text-sm">
            {currentTab === 'About Me' && (
              <p>
                Hello! My Name is Ammar Ahmad Ansari and I am a Computer Engineer.
                I am 22 years old and I am looking forward to work with you.
                <br /><br />
                I was born and raised in Mumbai, Maharashtra and attended Mithibai College 
                for HSC and I finished my engineering from the University of Mumbai.
                I enjoy travelling and reading books, both fiction and non-fiction.
              </p>
            )}
            {currentTab === 'Experiences' && (
              <p>Looking forward towards my first work experience.</p>
            )}
            {currentTab === 'Recommended' && (
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio neque deserunt illum?</p>
            )}
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white text-lg font-semibold bg-black px-4 py-1 rounded-lg">Gallery</h2>
            <div className="flex items-center space-x-2">
              <label className="bg-gray-600 hover:bg-gray-900 text-white border border-white text-sm px-3 py-1 mr-12 rounded-full transition-colors duration-200">
                + ADD IMAGE
                <input type="file" className='hidden' onChange={handleImages} accept="image/*" />
              </label>
              <button className="w-8 h-8 bg-gray-700 rounded-full text-gray-400 hover:text-white flex items-center justify-center shadow-lg hover:shadow-xl">
                &larr;
              </button>
              <button className="w-8 h-8 bg-gray-700 rounded-full text-gray-400 hover:text-white flex items-center justify-center shadow-lg hover:shadow-xl">
                &rarr;
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {images.map((src, key) => (
              <img key = {key} src={src} alt={`Image}`} className="w-full h-auto rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileGallery;