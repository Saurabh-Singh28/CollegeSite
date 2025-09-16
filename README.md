# Government Polytechnic Alapur, Budaun - Official Website

A modern, responsive, and accessible website with a comprehensive admin panel (CMS) for Government Polytechnic Alapur, Budaun. Built with React, Node.js, and MySQL.

## 🚀 Features

### Frontend (Public Website)
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Accessibility**: WCAG 2.1 compliant
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Multi-page Structure**:
  - Home Page with hero slider, quick links, and news ticker
  - About Us with institute history and administration
  - Academics with courses, faculty, and academic calendar
  - Admissions with process, eligibility, and fee structure
  - Departments showcasing engineering programs
  - Facilities highlighting campus infrastructure
  - Placements with statistics and recruiter information
  - Student Corner with notices, results, and downloads
  - Gallery with photos and videos
  - Contact Us with form and location details

### Backend (Admin Panel/CMS)
- **Secure Authentication**: JWT-based authentication with role-based access
- **Content Management**: Full CRUD operations for all content types
- **File Upload**: Support for images, PDFs, and documents
- **Admin Dashboard**: Analytics and quick actions
- **Management Modules**:
  - Notices Management
  - Events Management
  - Courses Management
  - Faculty Management
  - Gallery Management
  - Downloads Management
  - Results Management
  - Pages Management
  - Contacts Management
  - Profile Settings

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **TailwindCSS** for styling
- **React Router** for navigation
- **React Query** for data fetching
- **React Hook Form** for form handling
- **Framer Motion** for animations
- **Lucide React** for icons

### Backend
- **Node.js** with Express.js
- **Prisma** ORM with MySQL
- **JWT** for authentication
- **Multer** for file uploads
- **Bcrypt** for password hashing
- **Express Validator** for input validation
- **Helmet** for security headers

### Database
- **MySQL** with Prisma ORM
- **Comprehensive Schema** for all content types
- **Relationships** between entities
- **Indexes** for performance optimization

## 📁 Project Structure

```
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   ├── Layout/     # Layout components
│   │   │   ├── Home/       # Home page components
│   │   │   ├── Admin/      # Admin panel components
│   │   │   └── Common/     # Common components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React context
│   │   ├── services/       # API services
│   │   └── styles/         # Global styles
│   └── package.json
├── server/                 # Node.js backend
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── prisma/             # Database schema
│   └── package.json
└── package.json           # Root package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MySQL (v8.0 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd gpa-budaun-website
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Environment Setup**
   ```bash
   # Copy environment files
   cp server/env.example server/.env
   
   # Update server/.env with your database credentials
   DATABASE_URL="mysql://username:password@localhost:3306/gpa_budaun"
   JWT_SECRET="your-super-secret-jwt-key-here"
   ```

4. **Database Setup**
   ```bash
   cd server
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Start the development servers**
   ```bash
   # From root directory
   npm run dev
   ```

   This will start:
   - Frontend on http://localhost:3000
   - Backend on http://localhost:5000

### Default Admin Credentials
- **Username**: admin@gpabudaun.ac.in
- **Password**: admin123

*Note: Change these credentials immediately after first login*

## 📱 Usage

### Public Website
1. Visit http://localhost:3000
2. Navigate through different sections
3. View notices, events, and other content
4. Use contact form for inquiries

### Admin Panel
1. Visit http://localhost:3000/admin/login
2. Login with admin credentials
3. Access dashboard and manage content
4. Upload files, create notices, manage events, etc.

## 🔧 Configuration

### Database Configuration
Update the `DATABASE_URL` in `server/.env`:
```env
DATABASE_URL="mysql://username:password@localhost:3306/gpa_budaun"
```

### File Upload Configuration
Configure file upload settings in `server/.env`:
```env
UPLOAD_DIR="uploads"
MAX_FILE_SIZE="10485760" # 10MB
```

### Email Configuration (Optional)
For contact form emails, configure SMTP settings:
```env
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
```

## 🚀 Deployment

### Production Build
```bash
# Build frontend
cd client
npm run build

# Start production server
cd ../server
npm start
```

### Environment Variables for Production
```env
NODE_ENV=production
DATABASE_URL="mysql://username:password@your-db-host:3306/gpa_budaun"
JWT_SECRET="your-production-jwt-secret"
FRONTEND_URL="https://your-domain.com"
```

### Recommended Hosting
- **Frontend**: Vercel, Netlify, or any static hosting
- **Backend**: DigitalOcean, AWS, or any VPS
- **Database**: MySQL on cloud provider

## 📊 Database Schema

### Key Tables
- `users` - Admin users and authentication
- `notices` - College notices and announcements
- `events` - Events and activities
- `courses` - Engineering programs
- `faculty` - Teaching staff information
- `gallery` - Photos and videos
- `downloads` - Documents and files
- `results` - Exam results
- `pages` - Dynamic page content
- `contacts` - Contact form submissions

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Input validation and sanitization
- Rate limiting on API endpoints
- CORS configuration
- Security headers with Helmet
- File upload validation
- SQL injection prevention with Prisma

## 📈 Performance Optimizations

- React Query for efficient data fetching
- Image optimization
- Lazy loading for components
- Code splitting
- Database query optimization
- Caching strategies
- CDN ready

## 🧪 Testing

```bash
# Run frontend tests
cd client
npm test

# Run backend tests
cd server
npm test
```

## 📝 API Documentation

### Authentication Endpoints
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/auth/me` - Get current user

### Content Endpoints
- `GET /api/notices` - Get all notices
- `POST /api/notices` - Create notice (Admin)
- `PUT /api/notices/:id` - Update notice (Admin)
- `DELETE /api/notices/:id` - Delete notice (Admin)

*Similar patterns for events, courses, faculty, gallery, etc.*

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Email: support@gpabudaun.ac.in
- Phone: +91-5832-XXXXXX
- Create an issue in the repository

## 🔄 Updates and Maintenance

### Regular Updates
- Update dependencies monthly
- Monitor security vulnerabilities
- Backup database regularly
- Review and update content

### Content Management
- Train staff on admin panel usage
- Regular content audits
- SEO monitoring and optimization
- Performance monitoring

## 📋 TODO

- [ ] Implement student login panel
- [ ] Add faculty login panel
- [ ] Implement online admission form
- [ ] Add payment gateway integration
- [ ] Multi-language support (Hindi)
- [ ] Advanced analytics dashboard
- [ ] Mobile app development
- [ ] Email notifications system

---

**Government Polytechnic Alapur, Budaun**  
*Empowering minds, building futures through excellence in technical education*
