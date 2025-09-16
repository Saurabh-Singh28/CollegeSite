import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import AdminLayout from '../../components/Admin/AdminLayout';
import DashboardHome from '../../components/Admin/DashboardHome';
import NoticesManagement from '../../components/Admin/NoticesManagement';
import EventsManagement from '../../components/Admin/EventsManagement';
import CoursesManagement from '../../components/Admin/CoursesManagement';
import FacultyManagement from '../../components/Admin/FacultyManagement';
import GalleryManagement from '../../components/Admin/GalleryManagement';
import DownloadsManagement from '../../components/Admin/DownloadsManagement';
import ResultsManagement from '../../components/Admin/ResultsManagement';
import PagesManagement from '../../components/Admin/PagesManagement';
import ContactsManagement from '../../components/Admin/ContactsManagement';
import ProfileSettings from '../../components/Admin/ProfileSettings';

const AdminDashboard: React.FC = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - Government Polytechnic Alapur, Budaun</title>
        <meta name="description" content="Admin dashboard for managing website content" />
      </Helmet>

      <AdminLayout>
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/notices" element={<NoticesManagement />} />
          <Route path="/events" element={<EventsManagement />} />
          <Route path="/courses" element={<CoursesManagement />} />
          <Route path="/faculty" element={<FacultyManagement />} />
          <Route path="/gallery" element={<GalleryManagement />} />
          <Route path="/downloads" element={<DownloadsManagement />} />
          <Route path="/results" element={<ResultsManagement />} />
          <Route path="/pages" element={<PagesManagement />} />
          <Route path="/contacts" element={<ContactsManagement />} />
          <Route path="/profile" element={<ProfileSettings />} />
        </Routes>
      </AdminLayout>
    </>
  );
};

export default AdminDashboard;
