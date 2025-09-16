import React from 'react';
import { Helmet } from 'react-helmet-async';

const Placements: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Placements - Government Polytechnic Alapur, Budaun</title>
        <meta name="description" content="Explore our placement records and career opportunities" />
      </Helmet>
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Placements</h1>
          <p className="text-lg text-gray-600">This page will showcase our placement records</p>
        </div>
      </div>
    </>
  );
};

export default Placements;
