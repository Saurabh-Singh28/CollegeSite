import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaBook, FaFilePdf, FaCalendarAlt, FaClipboardList, FaGraduationCap, FaChalkboardTeacher, FaLaptopCode, FaUniversity, FaBullhorn, FaFileDownload, FaSearch, FaBriefcase, FaLink } from 'react-icons/fa';

// Sample data - in a real app, this would come from an API
const notices = [
  {
    id: 1,
    title: 'Mid-Semester Examination Schedule',
    date: '2023-10-15',
    category: 'Examination',
    file: 'exam-schedule.pdf',
    isNew: true
  },
  {
    id: 2,
    title: 'Scholarship Application Deadline Extended',
    date: '2023-10-10',
    category: 'Scholarship',
    file: 'scholarship-notice.pdf',
    isNew: true
  },
  {
    id: 3,
    title: 'Technical Symposium - TechVista 2023',
    date: '2023-10-05',
    category: 'Event',
    file: 'techvista-poster.pdf',
    isNew: false
  },
  {
    id: 4,
    title: 'Library Timings Revised',
    date: '2023-09-28',
    category: 'General',
    file: 'library-timings.pdf',
    isNew: false
  },
  {
    id: 5,
    title: 'Campus Recruitment Training Program',
    date: '2023-09-20',
    category: 'Placement',
    file: 'placement-training.pdf',
    isNew: false
  },
];

const studyMaterials = [
  {
    id: 1,
    title: 'Data Structures and Algorithms',
    code: 'CS201',
    professor: 'Dr. Ramesh Kumar',
    files: 12,
    icon: <FaLaptopCode className="text-2xl text-blue-600" />
  },
  {
    id: 2,
    title: 'Database Management Systems',
    code: 'CS202',
    professor: 'Dr. Sunita Sharma',
    files: 8,
    icon: <FaBook className="text-2xl text-green-600" />
  },
  {
    id: 3,
    title: 'Computer Networks',
    code: 'CS203',
    professor: 'Prof. Amit Patel',
    files: 10,
    icon: <FaUniversity className="text-2xl text-purple-600" />
  },
  {
    id: 4,
    title: 'Operating Systems',
    code: 'CS204',
    professor: 'Dr. Neha Gupta',
    files: 15,
    icon: <FaChalkboardTeacher className="text-2xl text-yellow-600" />
  },
];

const quickLinks = [
  { title: 'Academic Calendar', icon: <FaCalendarAlt className="mr-2" />, url: '#' },
  { title: 'Syllabus', icon: <FaBook className="mr-2" />, url: '#' },
  { title: 'Exam Results', icon: <FaClipboardList className="mr-2" />, url: '#' },
  { title: 'Scholarships', icon: <FaGraduationCap className="mr-2" />, url: '#' },
  { title: 'Placement Portal', icon: <FaBriefcase className="mr-2" />, url: '#' },
  { title: 'E-Learning', icon: <FaLaptopCode className="mr-2" />, url: '#' },
];

const StudentCorner: React.FC = () => {
  const [activeTab, setActiveTab] = useState('notices');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNotices = notices.filter(notice => 
    notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    notice.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredMaterials = studyMaterials.filter(material => 
    material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    material.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    material.professor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Student Corner - Government Polytechnic Alapur, Budaun</title>
        <meta name="description" content="Student resources, notices, results, and downloads" />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Corner</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Your one-stop destination for academic resources and information
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 -mt-10">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaBook className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">45+</h3>
            <p className="text-gray-600">Courses</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaFilePdf className="text-green-600 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">500+</h3>
            <p className="text-gray-600">Study Materials</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCalendarAlt className="text-yellow-600 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">12+</h3>
            <p className="text-gray-600">Upcoming Events</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaBullhorn className="text-purple-600 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">25+</h3>
            <p className="text-gray-600">Active Notices</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Search for notices, study materials, or resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex flex-wrap -mb-px">
              <button
                onClick={() => setActiveTab('notices')}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  activeTab === 'notices'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <FaBullhorn className="inline-block mr-2" />
                Notices & Announcements
              </button>
              <button
                onClick={() => setActiveTab('materials')}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  activeTab === 'materials'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <FaBook className="inline-block mr-2" />
                Study Materials
              </button>
              <button
                onClick={() => setActiveTab('quicklinks')}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  activeTab === 'quicklinks'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <FaLink className="inline-block mr-2" />
                Quick Links
              </button>
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Notices Tab */}
          {activeTab === 'notices' && (
            <div>
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800">Latest Notices & Announcements</h2>
                <p className="text-gray-600">Stay updated with the latest information from the college administration</p>
              </div>
              <div className="divide-y divide-gray-200">
                {filteredNotices.length > 0 ? (
                  filteredNotices.map((notice) => (
                    <div key={notice.id} className="p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-lg p-3 mr-4">
                          <FaBullhorn className="text-xl" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-900">
                              {notice.isNew && (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mr-2">
                                  New
                                </span>
                              )}
                              {notice.title}
                            </h3>
                            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {notice.category}
                            </span>
                          </div>
                          <div className="mt-2 flex justify-between items-center">
                            <p className="text-sm text-gray-500">
                              <time dateTime={notice.date}>
                                {new Date(notice.date).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </time>
                            </p>
                            <a
                              href={`/downloads/${notice.file}`}
                              className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center"
                              download
                            >
                              <FaFileDownload className="mr-1" /> Download
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-6 text-center text-gray-500">
                    No notices found matching your search criteria.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Study Materials Tab */}
          {activeTab === 'materials' && (
            <div>
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800">Study Materials</h2>
                <p className="text-gray-600">Access course materials, lecture notes, and reference documents</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                {filteredMaterials.length > 0 ? (
                  filteredMaterials.map((material) => (
                    <div key={material.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="p-6 text-center">
                        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-gray-100 mb-4">
                          {material.icon}
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">{material.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{material.code}</p>
                        <p className="text-sm text-gray-500">Prof. {material.professor}</p>
                        <div className="mt-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {material.files} {material.files === 1 ? 'File' : 'Files'}
                          </span>
                        </div>
                        <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-sm transition duration-300">
                          View Materials
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-8 text-gray-500">
                    No study materials found matching your search criteria.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Quick Links Tab */}
          {activeTab === 'quicklinks' && (
            <div>
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800">Quick Links</h2>
                <p className="text-gray-600">Quick access to important student resources and portals</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="group flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-200 transition-colors">
                      {link.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-base font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        {link.title}
                      </h3>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="bg-gray-50 p-6 border-t border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Student Resources</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <a href="#" className="text-sm text-blue-600 hover:underline">Academic Calendar</a>
                  <a href="#" className="text-sm text-blue-600 hover:underline">Exam Schedule</a>
                  <a href="#" className="text-sm text-blue-600 hover:underline">Library Portal</a>
                  <a href="#" className="text-sm text-blue-600 hover:underline">Hostel Rules</a>
                  <a href="#" className="text-sm text-blue-600 hover:underline">Scholarships</a>
                  <a href="#" className="text-sm text-blue-600 hover:underline">Fee Structure</a>
                  <a href="#" className="text-sm text-blue-600 hover:underline">Alumni Network</a>
                  <a href="#" className="text-sm text-blue-600 hover:underline">Contact Faculty</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Need Help?</h2>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Our student support team is here to assist you with any questions or concerns you may have.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:student.support@gpalapur.edu.in"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition duration-300 inline-block"
            >
              Contact Support
            </a>
            <a
              href="#"
              className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 font-medium py-3 px-8 rounded-full transition duration-300 inline-block"
            >
              FAQ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCorner;
