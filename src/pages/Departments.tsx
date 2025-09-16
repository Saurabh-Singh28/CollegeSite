import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaLaptopCode, FaTools, FaBolt, FaCogs, FaIndustry } from 'react-icons/fa';

const departments = [
  {
    id: 1,
    name: 'Computer Science & Engineering',
    icon: <FaLaptopCode className="text-4xl mb-4 text-blue-600" />,
    description: 'The department offers a 3-year diploma program in Computer Science & Engineering, focusing on software development, database management, and computer networks.',
    intake: 60,
    head: 'Dr. Rajesh Kumar',
    established: 2010
  },
  {
    id: 2,
    name: 'Mechanical Engineering',
    icon: <FaTools className="text-4xl mb-4 text-red-600" />,
    description: 'Our Mechanical Engineering department provides hands-on training in manufacturing, thermal engineering, and industrial automation.',
    intake: 120,
    head: 'Dr. Sanjay Sharma',
    established: 1995
  },
  {
    id: 3,
    name: 'Electrical Engineering',
    icon: <FaBolt className="text-4xl mb-4 text-yellow-500" />,
    description: 'The Electrical Engineering program focuses on power systems, electrical machines, and control systems with modern laboratory facilities.',
    intake: 90,
    head: 'Dr. Anil Verma',
    established: 2000
  },
  {
    id: 4,
    name: 'Electronics Engineering',
    icon: <FaCogs className="text-4xl mb-4 text-green-600" />,
    description: 'This department offers specialized training in embedded systems, VLSI design, and communication systems with industry-relevant curriculum.',
    intake: 75,
    head: 'Dr. Priya Singh',
    established: 2005
  },
  {
    id: 5,
    name: 'Civil Engineering',
    icon: <FaIndustry className="text-4xl mb-4 text-purple-600" />,
    description: 'Our Civil Engineering program focuses on structural engineering, transportation, and environmental engineering with practical training.',
    intake: 90,
    head: 'Dr. Amit Patel',
    established: 1998
  }
];

const Departments: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Departments - Government Polytechnic Alapur, Budaun</title>
        <meta name="description" content="Explore our engineering departments and programs" />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Departments</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Excellence in Technical Education and Research
          </p>
        </div>
      </div>

      {/* Departments Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept) => (
            <div key={dept.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="p-6">
                <div className="flex justify-center">
                  {dept.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">{dept.name}</h2>
                <p className="text-gray-600 mb-4">{dept.description}</p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>Intake:</span>
                    <span className="font-medium">{dept.intake} students</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>HOD:</span>
                    <span className="font-medium">{dept.head}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Established:</span>
                    <span className="font-medium">{dept.established}</span>
                  </div>
                </div>
                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Choose Our Departments?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Expert Faculty</h3>
              <p className="text-gray-600">Learn from experienced professors and industry experts with years of teaching and research experience.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Modern Labs</h3>
              <p className="text-gray-600">State-of-the-art laboratories equipped with the latest technology and equipment for hands-on learning.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Industry Connect</h3>
              <p className="text-gray-600">Strong industry partnerships for internships, live projects, and placement opportunities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;
