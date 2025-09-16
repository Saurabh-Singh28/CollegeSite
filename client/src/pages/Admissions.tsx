import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  GraduationCap, 
  FileText, 
  Download, 
  CheckCircle, 
  Clock,
  Users,
  Award,
  BookOpen
} from 'lucide-react';

const Admissions: React.FC = () => {
  const admissionProcess = [
    {
      step: 1,
      title: 'Check Eligibility',
      description: 'Verify that you meet the minimum eligibility criteria for the course',
      icon: CheckCircle,
    },
    {
      step: 2,
      title: 'Fill Application Form',
      description: 'Complete the online application form with all required details',
      icon: FileText,
    },
    {
      step: 3,
      title: 'Upload Documents',
      description: 'Upload scanned copies of required certificates and documents',
      icon: Download,
    },
    {
      step: 4,
      title: 'Pay Application Fee',
      description: 'Pay the application fee through online payment gateway',
      icon: Award,
    },
    {
      step: 5,
      title: 'Submit Application',
      description: 'Review and submit your application for processing',
      icon: CheckCircle,
    },
    {
      step: 6,
      title: 'Check Merit List',
      description: 'Check the merit list and admission status online',
      icon: Users,
    },
  ];

  const eligibilityCriteria = [
    {
      course: 'Civil Engineering',
      qualification: '10th Pass with Mathematics and Science',
      marks: 'Minimum 50% aggregate marks',
      age: 'No upper age limit',
    },
    {
      course: 'Electrical Engineering',
      qualification: '10th Pass with Mathematics and Science',
      marks: 'Minimum 50% aggregate marks',
      age: 'No upper age limit',
    },
    {
      course: 'Mechanical Engineering',
      qualification: '10th Pass with Mathematics and Science',
      marks: 'Minimum 50% aggregate marks',
      age: 'No upper age limit',
    },
    {
      course: 'Production Engineering',
      qualification: '10th Pass with Mathematics and Science',
      marks: 'Minimum 50% aggregate marks',
      age: 'No upper age limit',
    },
  ];

  const feeStructure = [
    {
      course: 'Civil Engineering',
      tuitionFee: '₹15,000',
      developmentFee: '₹5,000',
      libraryFee: '₹2,000',
      examFee: '₹3,000',
      total: '₹25,000',
    },
    {
      course: 'Electrical Engineering',
      tuitionFee: '₹15,000',
      developmentFee: '₹5,000',
      libraryFee: '₹2,000',
      examFee: '₹3,000',
      total: '₹25,000',
    },
    {
      course: 'Mechanical Engineering',
      tuitionFee: '₹15,000',
      developmentFee: '₹5,000',
      libraryFee: '₹2,000',
      examFee: '₹3,000',
      total: '₹25,000',
    },
    {
      course: 'Production Engineering',
      tuitionFee: '₹15,000',
      developmentFee: '₹5,000',
      libraryFee: '₹2,000',
      examFee: '₹3,000',
      total: '₹25,000',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Admissions - Government Polytechnic Alapur, Budaun</title>
        <meta 
          name="description" 
          content="Apply for admission to Government Polytechnic Alapur, Budaun. Check eligibility, fee structure, and admission process for engineering programs." 
        />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
          <div className="container-custom">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Admissions
              </h1>
              <p className="text-xl max-w-3xl mx-auto">
                Start your engineering journey with us. Apply now for admission to our comprehensive engineering programs.
              </p>
            </div>
          </div>
        </section>

        {/* Admission Process */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Admission Process
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Follow these simple steps to complete your admission
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {admissionProcess.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="relative">
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary-600" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Eligibility Criteria */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Eligibility Criteria
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Check if you meet the requirements for admission
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-primary-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium">Course</th>
                    <th className="px-6 py-4 text-left text-sm font-medium">Qualification</th>
                    <th className="px-6 py-4 text-left text-sm font-medium">Minimum Marks</th>
                    <th className="px-6 py-4 text-left text-sm font-medium">Age Limit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {eligibilityCriteria.map((criteria, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {criteria.course}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {criteria.qualification}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {criteria.marks}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {criteria.age}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Fee Structure */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Fee Structure
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Transparent and affordable fee structure for all courses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {feeStructure.map((course, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-primary-600 text-white p-4">
                    <h3 className="text-lg font-semibold text-center">{course.course}</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tuition Fee:</span>
                        <span className="font-medium">{course.tuitionFee}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Development Fee:</span>
                        <span className="font-medium">{course.developmentFee}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Library Fee:</span>
                        <span className="font-medium">{course.libraryFee}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Exam Fee:</span>
                        <span className="font-medium">{course.examFee}</span>
                      </div>
                      <hr className="my-3" />
                      <div className="flex justify-between text-lg font-bold text-primary-600">
                        <span>Total:</span>
                        <span>{course.total}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Dates */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Important Dates
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Mark these important dates in your calendar
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Clock className="w-6 h-6 mr-2 text-primary-600" />
                    Application Timeline
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">Application Start Date</span>
                      <span className="font-medium">March 1, 2024</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">Last Date to Apply</span>
                      <span className="font-medium">March 31, 2024</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">Merit List Release</span>
                      <span className="font-medium">April 15, 2024</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">Admission Deadline</span>
                      <span className="font-medium">April 30, 2024</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <BookOpen className="w-6 h-6 mr-2 text-primary-600" />
                    Academic Calendar
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">Session Start</span>
                      <span className="font-medium">July 1, 2024</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">Mid-term Exams</span>
                      <span className="font-medium">September 15-25, 2024</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">Winter Break</span>
                      <span className="font-medium">Dec 20 - Jan 5, 2025</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">Final Exams</span>
                      <span className="font-medium">March 15-30, 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary-600 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Apply?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Don't miss your chance to join one of the premier technical institutes in Uttar Pradesh
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 mr-2" />
                Apply Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-colors duration-200 flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Download Prospectus
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Admissions;
