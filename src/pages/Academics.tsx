import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  BookOpen, 
  Download, 
  Calendar, 
  Users, 
  Award, 
  Clock,
  CheckCircle,
  FileText,
  GraduationCap
} from 'lucide-react';

const Academics: React.FC = () => {
  const courses = [
    {
      id: 1,
      name: 'Civil Engineering',
      code: 'CE',
      duration: '3 Years',
      intake: 60,
      description: 'Comprehensive program covering structural engineering, construction technology, and project management.',
      subjects: ['Structural Analysis', 'Construction Technology', 'Surveying', 'Hydraulics', 'Environmental Engineering'],
      eligibility: '10th Pass with Mathematics and Science',
      syllabus: '/downloads/civil-engineering-syllabus.pdf',
    },
    {
      id: 2,
      name: 'Electrical Engineering',
      code: 'EE',
      duration: '3 Years',
      intake: 60,
      description: 'Focus on electrical systems, power generation, transmission, and modern electrical technologies.',
      subjects: ['Power Systems', 'Control Systems', 'Electrical Machines', 'Electronics', 'Digital Systems'],
      eligibility: '10th Pass with Mathematics and Science',
      syllabus: '/downloads/electrical-engineering-syllabus.pdf',
    },
    {
      id: 3,
      name: 'Mechanical Engineering',
      code: 'ME',
      duration: '3 Years',
      intake: 60,
      description: 'Comprehensive study of mechanical systems, manufacturing processes, and industrial applications.',
      subjects: ['Thermodynamics', 'Machine Design', 'Manufacturing Technology', 'Fluid Mechanics', 'Heat Transfer'],
      eligibility: '10th Pass with Mathematics and Science',
      syllabus: '/downloads/mechanical-engineering-syllabus.pdf',
    },
    {
      id: 4,
      name: 'Production Engineering',
      code: 'PE',
      duration: '3 Years',
      intake: 30,
      description: 'Specialized program focusing on production processes, quality control, and industrial management.',
      subjects: ['Production Planning', 'Quality Control', 'Industrial Engineering', 'Operations Research', 'Manufacturing Systems'],
      eligibility: '10th Pass with Mathematics and Science',
      syllabus: '/downloads/production-engineering-syllabus.pdf',
    },
  ];

  const academicCalendar = [
    {
      month: 'July 2024',
      events: [
        'Academic Session Begins',
        'Orientation Program',
        'First Semester Classes Start',
      ],
    },
    {
      month: 'August 2024',
      events: [
        'Internal Assessment 1',
        'Industrial Visit - Civil Engineering',
        'Technical Seminar Series',
      ],
    },
    {
      month: 'September 2024',
      events: [
        'Mid-term Examinations',
        'Project Exhibition',
        'Sports Week',
      ],
    },
    {
      month: 'October 2024',
      events: [
        'Internal Assessment 2',
        'Placement Drive - Phase 1',
        'Cultural Festival',
      ],
    },
    {
      month: 'November 2024',
      events: [
        'Pre-University Examinations',
        'Industrial Training Reports Submission',
        'Alumni Meet',
      ],
    },
    {
      month: 'December 2024',
      events: [
        'University Examinations',
        'Winter Break',
        'Result Declaration',
      ],
    },
  ];

  const faculty = [
    {
      name: 'Dr. Rajesh Kumar',
      designation: 'Professor & Head',
      department: 'Civil Engineering',
      qualification: 'Ph.D. in Civil Engineering',
      experience: '25+ years',
      specialization: 'Structural Engineering',
      email: 'rajesh.kumar@gpabudaun.ac.in',
    },
    {
      name: 'Prof. Sunita Verma',
      designation: 'Professor',
      department: 'Electrical Engineering',
      qualification: 'M.Tech in Electrical Engineering',
      experience: '20+ years',
      specialization: 'Power Systems',
      email: 'sunita.verma@gpabudaun.ac.in',
    },
    {
      name: 'Dr. Amit Singh',
      designation: 'Associate Professor',
      department: 'Mechanical Engineering',
      qualification: 'Ph.D. in Mechanical Engineering',
      experience: '18+ years',
      specialization: 'Thermal Engineering',
      email: 'amit.singh@gpabudaun.ac.in',
    },
    {
      name: 'Prof. Priya Sharma',
      designation: 'Assistant Professor',
      department: 'Production Engineering',
      qualification: 'M.Tech in Production Engineering',
      experience: '15+ years',
      specialization: 'Manufacturing Technology',
      email: 'priya.sharma@gpabudaun.ac.in',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Academics - Government Polytechnic Alapur, Budaun</title>
        <meta 
          name="description" 
          content="Explore our engineering programs, faculty, academic calendar, and curriculum at Government Polytechnic Alapur, Budaun." 
        />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
          <div className="container-custom">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Academics
              </h1>
              <p className="text-xl max-w-3xl mx-auto">
                Comprehensive engineering programs designed to prepare students for successful careers in technology and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Courses Offered */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Courses Offered
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose from our comprehensive range of engineering programs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {courses.map((course) => (
                <div key={course.id} className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {course.name}
                        </h3>
                        <p className="text-primary-600 font-medium">
                          Course Code: {course.code}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Duration</div>
                        <div className="font-semibold text-gray-900">{course.duration}</div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">
                      {course.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-500">Intake Capacity</div>
                        <div className="font-semibold text-gray-900">{course.intake} students</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Eligibility</div>
                        <div className="font-semibold text-gray-900 text-sm">{course.eligibility}</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Subjects:</h4>
                      <div className="flex flex-wrap gap-2">
                        {course.subjects.map((subject, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-primary-100 text-primary-800 text-xs rounded-full"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <a
                        href={course.syllabus}
                        className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Syllabus
                      </a>
                      <button className="px-4 py-2 border border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors duration-200">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Calendar */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Academic Calendar
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Important dates and events for the current academic year
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {academicCalendar.map((month, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-primary-600" />
                    {month.month}
                  </h3>
                  <ul className="space-y-2">
                    {month.events.map((event, eventIndex) => (
                      <li key={eventIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{event}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Faculty */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Faculty
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet our experienced and qualified teaching faculty
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {faculty.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-gray-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-2">
                    {member.designation}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    {member.department}
                  </p>
                  <p className="text-xs text-gray-500 mb-2">
                    {member.qualification}
                  </p>
                  <p className="text-xs text-gray-500 mb-3">
                    {member.experience} experience
                  </p>
                  <div className="text-xs text-gray-600">
                    <strong>Specialization:</strong> {member.specialization}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200">
                View All Faculty
              </button>
            </div>
          </div>
        </section>

        {/* Admission Process */}
        <section className="py-16 bg-primary-600 text-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Admission Process
              </h2>
              <p className="text-xl max-w-2xl mx-auto">
                Simple steps to join our engineering programs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">1. Apply Online</h3>
                <p className="text-sm text-primary-100">
                  Fill out the online application form
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">2. Submit Documents</h3>
                <p className="text-sm text-primary-100">
                  Upload required certificates and documents
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">3. Merit List</h3>
                <p className="text-sm text-primary-100">
                  Check merit list and admission status
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">4. Complete Admission</h3>
                <p className="text-sm text-primary-100">
                  Pay fees and complete admission formalities
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                Start Application Process
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Academics;
