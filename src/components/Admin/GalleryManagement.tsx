import React from 'react';
import { Plus, Image } from 'lucide-react';

const GalleryManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gallery Management</h1>
          <p className="text-gray-600">Manage photos and videos in the gallery</p>
        </div>
        <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200 flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Upload Images
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="text-center py-12">
          <Image className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Gallery Management</h3>
          <p className="text-gray-600">This component will be implemented with full CRUD functionality for managing gallery items.</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryManagement;
