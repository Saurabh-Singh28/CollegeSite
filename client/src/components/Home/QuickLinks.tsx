import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Bell, 
  Award, 
  Phone, 
  BookOpen, 
  Users,
  Calendar,
  Download,
  Image,
  FileText
} from 'lucide-react';

const QuickLinks: React.FC = () => {
  const quickLinks = [
    {
      title: 'Admissions',
      description: 'Apply for admission to our engineering programs',
      icon: GraduationCap,
      link: '/admissions',
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
    },
    {
      title: 'Notices',
      description: 'Latest announcements and important notices',
      icon: Bell,
      link: '/student-corner#notices',
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600',
    },
    {
      title: 'Results',
      description: 'Check your exam results and academic records',
      icon: Award,
      link: '/student-corner#results',
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
    },
    {
      title: 'Contact',
      description: 'Get in touch with us for any queries',
      icon: Phone,
      link: '/contact',
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600',
    },
    {
      title: 'Courses',
      description: 'Explore our engineering programs and curriculum',
      icon: BookOpen,
      link: '/academics#courses',
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600',
    },
    {
      title: 'Faculty',
      description: 'Meet our experienced teaching faculty',
      icon: Users,
      link: '/academics#faculty',
      color: 'bg-teal-500',
      hoverColor: 'hover:bg-teal-600',
    },
    {
      title: 'Events',
      description: 'Upcoming events and college activities',
      icon: Calendar,
      link: '/student-corner#events',
      color: 'bg-pink-500',
      hoverColor: 'hover:bg-pink-600',
    },
    {
      title: 'Downloads',
      description: 'Important documents and forms',
      icon: Download,
      link: '/student-corner#downloads',
      color: 'bg-indigo-500',
      hoverColor: 'hover:bg-indigo-600',
    },
    {
      title: 'Gallery',
      description: 'Photos and videos from college events',
      icon: Image,
      link: '/gallery',
      color: 'bg-yellow-500',
      hoverColor: 'hover:bg-yellow-600',
    },
    {
      title: 'About Us',
      description: 'Learn about our institute and history',
      icon: FileText,
      link: '/about',
      color: 'bg-cyan-500',
      hoverColor: 'hover:bg-cyan-600',
    },
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Quick Access
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Find everything you need with our quick access links
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {quickLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <Link
              key={index}
              to={link.link}
              className="group block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-center">
                <div className={`w-16 h-16 ${link.color} ${link.hoverColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                  {link.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default QuickLinks;
