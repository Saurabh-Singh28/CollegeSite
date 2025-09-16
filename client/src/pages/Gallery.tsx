import React from 'react';
import { Helmet } from 'react-helmet-async';

const Gallery: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Gallery - Government Polytechnic Alapur, Budaun</title>
        <meta name="description" content="Photo and video gallery of campus events and activities" />
      </Helmet>
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h1>
          <p className="text-lg text-gray-600">This page will showcase our photo and video gallery</p>
        </div>
      </div>
    </>
  );
};

export default Gallery;
