import React from 'react';
import { Helmet } from 'react-helmet-async';

const Departments: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Departments - Government Polytechnic Alapur, Budaun</title>
        <meta name="description" content="Explore our engineering departments and programs" />
      </Helmet>
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Departments</h1>
          <p className="text-lg text-gray-600">This page will showcase our engineering departments</p>
        </div>
      </div>
    </>
  );
};

export default Departments;
