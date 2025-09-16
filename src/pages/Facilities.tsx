import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaFlask, FaBook, FaWifi, FaUtensils, FaDumbbell, FaBus, FaLaptop, FaMicroscope, FaBuilding, FaTree } from 'react-icons/fa';

const facilities = [
  {
    id: 1,
    title: 'Modern Laboratories',
    icon: <FaFlask className="text-5xl text-blue-600 mb-4" />,
    description: 'State-of-the-art laboratories equipped with the latest technology and equipment for practical learning across all engineering disciplines.',
    features: ['Computer Labs', 'Electronics Lab', 'Mechanical Workshop', 'Civil Engineering Lab', 'Physics & Chemistry Labs']
  },
  {
    id: 2,
    title: 'Central Library',
    icon: <FaBook className="text-5xl text-green-600 mb-4" />,
    description: 'A well-stocked library with a vast collection of books, journals, e-resources, and digital learning materials.',
    features: ['50,000+ Books', 'E-Journals', 'Reading Rooms', 'Digital Library', 'Book Bank Facility']
  },
  {
    id: 3,
    title: 'Hostel Facilities',
    icon: <FaBuilding className="text-5xl text-purple-600 mb-4" />,
    description: 'Comfortable and secure hostel accommodation for both boys and girls with modern amenities.',
    features: ['Separate Hostels', '24/7 Security', 'WiFi', 'Common Rooms', 'Dining Hall']
  },
  {
    id: 4,
    title: 'Sports Complex',
    icon: <FaDumbbell className="text-5xl text-red-600 mb-4" />,
    description: 'Excellent sports facilities including indoor and outdoor games to promote physical fitness and sportsmanship.',
    features: ['Cricket Ground', 'Basketball Court', 'Badminton Court', 'Table Tennis', 'Gymnasium']
  },
  {
    id: 5,
    title: 'Cafeteria',
    icon: <FaUtensils className="text-5xl text-yellow-600 mb-4" />,
    description: 'Hygienic and spacious cafeteria serving nutritious and delicious food at reasonable prices.',
    features: ['Veg & Non-Veg', 'Snacks Corner', 'Juice Bar', 'Comfortable Seating', 'Hygienic Kitchen']
  },
  {
    id: 6,
    title: 'Transportation',
    icon: <FaBus className="text-5xl text-indigo-600 mb-4" />,
    description: 'College buses covering all major routes in the city for the convenience of students and staff.',
    features: ['Fleet of Buses', 'Affordable Fare', 'Fixed Routes', 'On-time Service', 'GPS Tracking']
  }
];

const Facilities: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Facilities - Government Polytechnic Alapur, Budaun</title>
        <meta name="description" content="Explore our campus facilities and infrastructure" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Campus Facilities</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            World-class infrastructure for an exceptional learning experience
          </p>
        </div>
      </div>

      {/* Facilities Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility) => (
            <div key={facility.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2 h-full flex flex-col">
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-center">
                  {facility.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3 text-center">{facility.title}</h2>
                <p className="text-gray-600 mb-4 flex-1">{facility.description}</p>
                <div className="mt-4">
                  <h3 className="font-semibold text-gray-700 mb-2">Key Features:</h3>
                  <ul className="space-y-1">
                    {facility.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Facilities */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">More Campus Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLaptop className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Computer Center</h3>
              <p className="text-gray-600">24/7 access to high-speed internet and computing facilities</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMicroscope className="text-3xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Research Centers</h3>
              <p className="text-gray-600">Advanced research facilities for innovative projects</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaWifi className="text-3xl text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">WiFi Campus</h3>
              <p className="text-gray-600">High-speed internet access across the entire campus</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTree className="text-3xl text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Green Campus</h3>
              <p className="text-gray-600">Eco-friendly environment with lush green spaces</p>
            </div>
          </div>
        </div>
      </div>

      {/* Virtual Tour CTA */}
      <div className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Experience Our Campus</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Take a virtual tour of our state-of-the-art facilities and see what makes our campus special.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            Start Virtual Tour
          </button>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
