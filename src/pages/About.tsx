import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  History, 
  Target, 
  Eye, 
  Users, 
  Award, 
  CheckCircle,
  Building,
  BookOpen,
  GraduationCap
} from 'lucide-react';

const About: React.FC = () => {
  const milestones = [
    {
      year: '1985',
      title: 'Institute Established',
      description: 'Government Polytechnic Alapur was established with a vision to provide quality technical education.',
    },
    {
      year: '1990',
      title: 'First Batch Graduated',
      description: 'First batch of students graduated with excellent placement records.',
    },
    {
      year: '2000',
      title: 'New Departments Added',
      description: 'Expanded to include Electrical and Mechanical Engineering departments.',
    },
    {
      year: '2010',
      title: 'AICTE Recognition',
      description: 'Received recognition from All India Council for Technical Education.',
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Implemented modern teaching methods and digital infrastructure.',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in all our academic and administrative activities.',
    },
    {
      icon: Users,
      title: 'Integrity',
      description: 'We maintain the highest standards of integrity and ethical conduct.',
    },
    {
      icon: BookOpen,
      title: 'Innovation',
      description: 'We encourage innovation and creative thinking in our students.',
    },
    {
      icon: Award,
      title: 'Leadership',
      description: 'We develop future leaders who can contribute to society.',
    },
  ];

  const administration = [
    {
      name: 'Dr. Rajesh Kumar',
      position: 'Principal',
      qualification: 'Ph.D. in Civil Engineering',
      experience: '25+ years',
      email: 'principal@gpabudaun.ac.in',
    },
    {
      name: 'Prof. Sunita Verma',
      position: 'Vice Principal',
      qualification: 'M.Tech in Electrical Engineering',
      experience: '20+ years',
      email: 'viceprincipal@gpabudaun.ac.in',
    },
    {
      name: 'Dr. Amit Singh',
      position: 'Head of Civil Engineering',
      qualification: 'Ph.D. in Civil Engineering',
      experience: '18+ years',
      email: 'hoc.civil@gpabudaun.ac.in',
    },
    {
      name: 'Prof. Priya Sharma',
      position: 'Head of Electrical Engineering',
      qualification: 'M.Tech in Electrical Engineering',
      experience: '15+ years',
      email: 'hoc.electrical@gpabudaun.ac.in',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Government Polytechnic Alapur, Budaun</title>
        <meta 
          name="description" 
          content="Learn about Government Polytechnic Alapur, Budaun - our history, vision, mission, and administration. A premier technical institute established in 1985." 
        />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
          <div className="container-custom">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Our Institute
              </h1>
              <p className="text-xl max-w-3xl mx-auto">
                Government Polytechnic Alapur, Budaun has been a beacon of technical education 
                since 1985, shaping the future of thousands of engineers.
              </p>
            </div>
          </div>
        </section>

        {/* Institute Overview */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Established in 1985, Government Polytechnic Alapur, Budaun has been at the 
                  forefront of technical education in Uttar Pradesh. Our institute has grown 
                  from a small technical school to a premier polytechnic offering comprehensive 
                  engineering programs.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Over the years, we have produced thousands of skilled engineers who have 
                  made significant contributions to various industries and sectors. Our 
                  commitment to quality education and practical training has earned us 
                  recognition and respect in the technical education community.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                    <Building className="w-8 h-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">35+ Years</h3>
                    <p className="text-gray-600">Of Excellence in Technical Education</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="w-full h-80 bg-gray-300 rounded-lg flex items-center justify-center">
                  <Building className="w-24 h-24 text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Vision & Mission
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Eye className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-700">
                  To be a leading technical institute that produces skilled engineers 
                  capable of meeting the challenges of the modern world and contributing 
                  to the technological advancement of the nation.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <Target className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-700">
                  To provide quality technical education through innovative teaching methods, 
                  practical training, and industry exposure, while fostering values of 
                  integrity, leadership, and social responsibility in our students.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                      <Icon className="w-10 h-10 text-primary-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Key milestones in our institute's history
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <div className="text-2xl font-bold text-primary-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Administration */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Administration
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet our experienced leadership team
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {administration.map((person, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-gray-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {person.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-2">
                    {person.position}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    {person.qualification}
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    {person.experience} experience
                  </p>
                  <p className="text-xs text-gray-500">
                    {person.email}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AICTE/BTEUP Recognition */}
        <section className="py-16 bg-primary-600 text-white">
          <div className="container-custom">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">
                Recognitions & Approvals
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AICTE Approved</h3>
                  <p className="text-primary-100">
                    All India Council for Technical Education
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">BTEUP Affiliated</h3>
                  <p className="text-primary-100">
                    Board of Technical Education, UP
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Government Institute</h3>
                  <p className="text-primary-100">
                    Under Government of Uttar Pradesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
