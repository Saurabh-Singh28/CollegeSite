import React from 'react';
import { Helmet } from 'react-helmet-async';

const StudentCorner: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Student Corner - Government Polytechnic Alapur, Budaun</title>
        <meta name="description" content="Student resources, notices, results, and downloads" />
      </Helmet>
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Student Corner</h1>
          <p className="text-lg text-gray-600">This page will provide student resources and information</p>
        </div>
      </div>
    </>
  );
};

export default StudentCorner;
