import React from 'react';
import { Users, GraduationCap, Award, Building } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: Users,
      number: '2000+',
      label: 'Students Enrolled',
      description: 'Currently studying in various programs',
    },
    {
      icon: GraduationCap,
      number: '5000+',
      label: 'Alumni',
      description: 'Successful graduates worldwide',
    },
    {
      icon: Award,
      number: '95%',
      label: 'Placement Rate',
      description: 'Students placed in top companies',
    },
    {
      icon: Building,
      number: '4',
      label: 'Departments',
      description: 'Engineering disciplines offered',
    },
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Achievements
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Numbers that speak for our commitment to excellence
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                <Icon className="w-10 h-10 text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
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

      {/* Additional Info */}
      <div className="mt-16 bg-gray-50 rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Established
            </h3>
            <p className="text-2xl font-bold text-primary-600">1985</p>
            <p className="text-sm text-gray-600">Over 35 years of excellence</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Faculty Members
            </h3>
            <p className="text-2xl font-bold text-primary-600">50+</p>
            <p className="text-sm text-gray-600">Experienced educators</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Laboratories
            </h3>
            <p className="text-2xl font-bold text-primary-600">15+</p>
            <p className="text-sm text-gray-600">Well-equipped labs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
