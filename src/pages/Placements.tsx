import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaBuilding, FaChartLine, FaGraduationCap, FaBriefcase, FaRupeeSign, FaUsers, FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

// Sample data - in a real app, this would come from an API
const placementStats = {
  currentYear: '2023-24',
  totalOffers: 287,
  highestPackage: '12.5 LPA',
  averagePackage: '5.8 LPA',
  placementRate: '92%',
  companiesVisited: 78,
  studentsPlaced: 245,
  totalEligible: 266
};

const topRecruiters = [
  { id: 1, name: 'Infosys', logo: 'infosys-logo.png', visits: 5, offers: 32 },
  { id: 2, name: 'TCS', logo: 'tcs-logo.png', visits: 4, offers: 28 },
  { id: 3, name: 'Wipro', logo: 'wipro-logo.png', visits: 3, offers: 25 },
  { id: 4, name: 'HCL', logo: 'hcl-logo.png', visits: 3, offers: 22 },
  { id: 5, name: 'Tech Mahindra', logo: 'techm-logo.png', visits: 2, offers: 20 },
  { id: 6, name: 'L&T Infotech', logo: 'lnt-logo.png', visits: 2, offers: 18 },
];

const placementProcess = [
  {
    step: 1,
    title: 'Registration',
    description: 'Students register with the placement cell and submit their resumes.'
  },
  {
    step: 2,
    title: 'Pre-Placement Talk',
    description: 'Companies present their profile and job roles to students.'
  },
  {
    step: 3,
    title: 'Aptitude Test',
    description: 'Written test to assess technical and aptitude skills.'
  },
  {
    step: 4,
    title: 'Group Discussion',
    description: 'Assessing communication and group interaction skills.'
  },
  {
    step: 5,
    title: 'Technical Interview',
    description: 'In-depth technical knowledge assessment.'
  },
  {
    step: 6,
    title: 'HR Interview',
    description: 'Final round focusing on personality and cultural fit.'
  }
];

const studentTestimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    company: 'Infosys',
    package: '6.5 LPA',
    department: 'Computer Science',
    quote: 'The placement cell provided excellent guidance and support throughout the recruitment process.',
    rating: 5
  },
  {
    id: 2,
    name: 'Priya Patel',
    company: 'TCS',
    package: '5.8 LPA',
    department: 'Electronics',
    quote: 'Mock interviews and resume building workshops were extremely helpful in my preparation.',
    rating: 4.5
  },
  {
    id: 3,
    name: 'Amit Kumar',
    company: 'Wipro',
    package: '7.2 LPA',
    department: 'Mechanical',
    quote: 'The pre-placement training helped me crack the technical rounds with confidence.',
    rating: 5
  }
];

const Placements: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedYear, setSelectedYear] = useState('2023');

  const renderStars = (rating: number) => {
    const stars: JSX.Element[] = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Placements - Government Polytechnic Alapur, Budaun</title>
        <meta name="description" content="Explore our placement records and career opportunities" />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Placement Cell</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Bridging the gap between education and employment
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-12 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaBuilding className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">{placementStats.companiesVisited}+</h3>
            <p className="text-gray-600">Companies Visited</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaGraduationCap className="text-green-600 text-2xl" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">{placementStats.placementRate}</h3>
            <p className="text-gray-600">Placement Rate</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaRupeeSign className="text-yellow-600 text-2xl" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">{placementStats.highestPackage}</h3>
            <p className="text-gray-600">Highest Package</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaUsers className="text-purple-600 text-2xl" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">{placementStats.studentsPlaced}+</h3>
            <p className="text-gray-600">Students Placed</p>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="container mx-auto px-4">
        <div className="border-b border-gray-200">
          <nav className="flex flex-wrap -mb-px">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'overview'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('recruiters')}
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'recruiters'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Top Recruiters
            </button>
            <button
              onClick={() => setActiveTab('process')}
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'process'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Placement Process
            </button>
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'testimonials'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Student Testimonials
            </button>
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Placement Overview {placementStats.currentYear}</h2>
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Placement Statistics</h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Total Students Eligible</span>
                        <span className="font-medium">{placementStats.totalEligible}</span>
                      </li>
                      <li className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Students Placed</span>
                        <span className="font-medium">{placementStats.studentsPlaced}</span>
                      </li>
                      <li className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Placement Percentage</span>
                        <span className="font-medium">{placementStats.placementRate}</span>
                      </li>
                      <li className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Highest Package</span>
                        <span className="font-medium">₹{placementStats.highestPackage}</span>
                      </li>
                      <li className="flex justify-between py-2">
                        <span className="text-gray-600">Average Package</span>
                        <span className="font-medium">₹{placementStats.averagePackage}</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Sector-wise Placements</h3>
                    <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                      <p className="text-gray-400">Pie chart visualization would be here</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Year-wise Placement Trend</h3>
                <div className="flex justify-end mb-4">
                  <select 
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-1 text-sm"
                  >
                    <option value="2023">2023-24</option>
                    <option value="2022">2022-23</option>
                    <option value="2021">2021-22</option>
                    <option value="2020">2020-21</option>
                  </select>
                </div>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">Bar chart for {selectedYear} placements would be here</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Top Recruiters Tab */}
        {activeTab === 'recruiters' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Top Recruiters</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {topRecruiters.map((company) => (
                <div key={company.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-shadow">
                  <div className="w-20 h-20 bg-gray-100 rounded-full mb-3 flex items-center justify-center">
                    <FaBuilding className="text-3xl text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-center">{company.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{company.offers} offers</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Become a Recruiter</h3>
              <p className="text-gray-600 mb-4">Join our growing list of recruiters and discover talented students ready to contribute to your organization.</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300">
                Contact Placement Cell
              </button>
            </div>
          </div>
        )}

        {/* Placement Process Tab */}
        {activeTab === 'process' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Placement Process</h2>
            <div className="space-y-8">
              {placementProcess.map((step) => (
                <div key={step.step} className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 text-blue-600 font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg mr-4 mt-1">
                    {step.step}
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Placement Policy</h3>
              <p className="text-gray-600 mb-4">
                Our placement policy ensures fair and transparent recruitment processes for all students. 
                Companies are required to follow the institute's guidelines and provide equal opportunities to all eligible candidates.
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                Download Placement Brochure →
              </button>
            </div>
          </div>
        )}

        {/* Testimonials Tab */}
        {activeTab === 'testimonials' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">What Our Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studentTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 text-blue-600 font-bold rounded-full w-12 h-12 flex items-center justify-center text-lg mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.department}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FaBriefcase className="text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{testimonial.company}</span>
                    </div>
                    <div className="flex items-center">
                      <FaRupeeSign className="text-green-500 mr-1" />
                      <span className="font-medium text-gray-800">{testimonial.package}</span>
                    </div>
                  </div>
                  <div className="flex mt-3">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Hire Our Students?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Connect with our placement cell to schedule your campus recruitment drive
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-800 hover:bg-blue-100 font-medium py-3 px-8 rounded-full transition duration-300">
              For Companies
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-blue-700 font-medium py-3 px-8 rounded-full transition duration-300">
              For Students
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placements;
