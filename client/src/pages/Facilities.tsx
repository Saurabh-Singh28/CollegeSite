import React from 'react';
import { Helmet } from 'react-helmet-async';

const Facilities: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Facilities - Government Polytechnic Alapur, Budaun</title>
        <meta name="description" content="Explore our campus facilities and infrastructure" />
      </Helmet>
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Facilities</h1>
          <p className="text-lg text-gray-600">This page will showcase our campus facilities</p>
        </div>
      </div>
    </>
  );
};

export default Facilities;
