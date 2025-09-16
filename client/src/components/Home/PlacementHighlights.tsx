import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Building2, Users, Award, ArrowRight } from 'lucide-react';

const PlacementHighlights: React.FC = () => {
  const recruiters = [
    { name: 'TCS', logo: '/api/placeholder/100/50', students: 45 },
    { name: 'Infosys', logo: '/api/placeholder/100/50', students: 38 },
    { name: 'Wipro', logo: '/api/placeholder/100/50', students: 32 },
    { name: 'HCL', logo: '/api/placeholder/100/50', students: 28 },
    { name: 'Tech Mahindra', logo: '/api/placeholder/100/50', students: 25 },
    { name: 'Cognizant', logo: '/api/placeholder/100/50', students: 22 },
    { name: 'Accenture', logo: '/api/placeholder/100/50', students: 20 },
    { name: 'Capgemini', logo: '/api/placeholder/100/50', students: 18 },
  ];

  const placementStats = [
    {
      icon: TrendingUp,
      number: '95%',
      label: 'Placement Rate',
      description: 'Students placed in top companies',
    },
    {
      icon: Building2,
      number: '50+',
      label: 'Recruiting Companies',
      description: 'Leading organizations visit our campus',
    },
    {
      icon: Users,
      number: '500+',
      label: 'Students Placed',
      description: 'In the last academic year',
    },
    {
      icon: Award,
      number: '₹4.5L',
      label: 'Highest Package',
      description: 'Offered to our students',
    },
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Placement Highlights
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our students are making their mark in leading companies worldwide
        </p>
      </div>

      {/* Placement Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {placementStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-700 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </div>
          );
        })}
      </div>

      {/* Top Recruiters */}
      <div className="bg-gray-50 rounded-lg p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Our Top Recruiters
          </h3>
          <p className="text-gray-600">
            Leading companies that trust our students
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {recruiters.map((recruiter, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:bg-primary-50 transition-colors duration-300">
                <Building2 className="w-8 h-8 text-gray-500 group-hover:text-primary-600 transition-colors duration-300" />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">
                {recruiter.name}
              </h4>
              <p className="text-xs text-gray-600">
                {recruiter.students} students
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div className="mt-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Student Success Stories
          </h3>
          <p className="text-gray-600">
            Hear from our successful alumni
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Rajesh Kumar</h4>
                <p className="text-sm text-gray-600">Civil Engineering, 2022</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm italic">
              "The practical approach to learning and industry exposure at GPA helped me 
              secure a position at Larsen & Toubro. The faculty's guidance was invaluable."
            </p>
            <div className="mt-3 text-sm font-medium text-primary-600">
              Software Engineer at L&T
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Priya Sharma</h4>
                <p className="text-sm text-gray-600">Electrical Engineering, 2021</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm italic">
              "The hands-on training and modern lab facilities gave me the confidence 
              to excel in my career. I'm now working as a Project Manager at TCS."
            </p>
            <div className="mt-3 text-sm font-medium text-primary-600">
              Project Manager at TCS
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Amit Singh</h4>
                <p className="text-sm text-gray-600">Mechanical Engineering, 2023</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm italic">
              "The placement cell's support and mock interviews prepared me well for 
              the recruitment process. I got placed in Infosys with a great package."
            </p>
            <div className="mt-3 text-sm font-medium text-primary-600">
              System Engineer at Infosys
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <Link
          to="/placements"
          className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
        >
          View Placement Details
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default PlacementHighlights;
