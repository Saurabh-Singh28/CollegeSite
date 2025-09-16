import React from 'react';
import { Quote, User } from 'lucide-react';

const PrincipalMessage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Principal's Message
        </h2>
        <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Principal Photo */}
          <div className="md:w-1/3 bg-gray-100 p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="w-24 h-24 text-gray-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Dr. Rajesh Kumar
              </h3>
              <p className="text-primary-600 font-medium">
                Principal
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Government Polytechnic Alapur, Budaun
              </p>
            </div>
          </div>

          {/* Message Content */}
          <div className="md:w-2/3 p-8">
            <div className="mb-6">
              <Quote className="w-8 h-8 text-primary-600 mb-4" />
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                "Welcome to Government Polytechnic Alapur, Budaun - a premier institution 
                dedicated to excellence in technical education. Our institute has been 
                at the forefront of producing skilled engineers who contribute significantly 
                to the nation's development."
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                "We are committed to providing quality education through our experienced 
                faculty, state-of-the-art laboratories, and industry-relevant curriculum. 
                Our focus is not just on academic excellence but also on developing 
                well-rounded individuals ready to face the challenges of the modern world."
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                "I invite you to be part of our journey towards creating a better tomorrow 
                through technical education and innovation."
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">
                    <strong>Experience:</strong> 25+ years in Technical Education
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Qualification:</strong> Ph.D. in Civil Engineering, M.Tech, B.Tech
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">
                    <strong>Email:</strong> principal@gpabudaun.ac.in
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Phone:</strong> +91-5832-XXXXXX
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalMessage;
