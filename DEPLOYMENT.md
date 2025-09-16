# Deployment Guide - Government Polytechnic Alapur, Budaun Website

This guide provides step-by-step instructions for deploying the website to production.

## 🚀 Pre-Deployment Checklist

### 1. Environment Preparation
- [ ] Production server with Node.js 16+
- [ ] MySQL database server
- [ ] Domain name and SSL certificate
- [ ] File storage solution (local or cloud)
- [ ] Backup strategy in place

### 2. Security Checklist
- [ ] Change default admin credentials
- [ ] Generate strong JWT secret
- [ ] Configure secure database credentials
- [ ] Enable HTTPS/SSL
- [ ] Configure firewall rules
- [ ] Set up regular backups

## 🖥️ Server Requirements

### Minimum Requirements
- **CPU**: 2 cores
- **RAM**: 4GB
- **Storage**: 50GB SSD
- **OS**: Ubuntu 20.04 LTS or CentOS 8
- **Node.js**: v16 or higher
- **MySQL**: v8.0 or higher

### Recommended Requirements
- **CPU**: 4 cores
- **RAM**: 8GB
- **Storage**: 100GB SSD
- **OS**: Ubuntu 22.04 LTS
- **Node.js**: v18 LTS
- **MySQL**: v8.0 with InnoDB

## 📦 Deployment Steps

### Step 1: Server Setup

1. **Update system packages**
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

2. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Install MySQL**
   ```bash
   sudo apt install mysql-server -y
   sudo mysql_secure_installation
   ```

4. **Install PM2 for process management**
   ```bash
   sudo npm install -g pm2
   ```

5. **Install Nginx (for reverse proxy)**
   ```bash
   sudo apt install nginx -y
   ```

### Step 2: Database Setup

1. **Create database and user**
   ```sql
   CREATE DATABASE gpa_budaun;
   CREATE USER 'gpa_user'@'localhost' IDENTIFIED BY 'strong_password_here';
   GRANT ALL PRIVILEGES ON gpa_budaun.* TO 'gpa_user'@'localhost';
   FLUSH PRIVILEGES;
   ```

2. **Configure MySQL for production**
   ```bash
   sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
   ```
   
   Add/update these settings:
   ```ini
   [mysqld]
   innodb_buffer_pool_size = 1G
   max_connections = 200
   query_cache_size = 64M
   slow_query_log = 1
   slow_query_log_file = /var/log/mysql/slow.log
   long_query_time = 2
   ```

3. **Restart MySQL**
   ```bash
   sudo systemctl restart mysql
   ```

### Step 3: Application Deployment

1. **Clone repository**
   ```bash
   git clone <repository-url> /var/www/gpa-budaun
   cd /var/www/gpa-budaun
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Build frontend**
   ```bash
   cd client
   npm run build
   cd ..
   ```

4. **Configure environment**
   ```bash
   cp server/env.example server/.env
   nano server/.env
   ```

   Update with production values:
   ```env
   NODE_ENV=production
   PORT=5000
   DATABASE_URL="mysql://gpa_user:strong_password_here@localhost:3306/gpa_budaun"
   JWT_SECRET="your-super-secure-jwt-secret-here"
   JWT_EXPIRES_IN="7d"
   FRONTEND_URL="https://your-domain.com"
   UPLOAD_DIR="/var/www/gpa-budaun/uploads"
   MAX_FILE_SIZE="10485760"
   ```

5. **Run database migrations**
   ```bash
   cd server
   npx prisma migrate deploy
   npx prisma generate
   ```

6. **Create uploads directory**
   ```bash
   mkdir -p /var/www/gpa-budaun/uploads
   chmod 755 /var/www/gpa-budaun/uploads
   ```

### Step 4: Process Management with PM2

1. **Create PM2 ecosystem file**
   ```bash
   nano /var/www/gpa-budaun/ecosystem.config.js
   ```

   ```javascript
   module.exports = {
     apps: [{
       name: 'gpa-budaun-api',
       script: './server/index.js',
       cwd: '/var/www/gpa-budaun',
       instances: 2,
       exec_mode: 'cluster',
       env: {
         NODE_ENV: 'production',
         PORT: 5000
       },
       error_file: '/var/log/pm2/gpa-budaun-error.log',
       out_file: '/var/log/pm2/gpa-budaun-out.log',
       log_file: '/var/log/pm2/gpa-budaun.log',
       time: true
     }]
   };
   ```

2. **Start application with PM2**
   ```bash
   pm2 start ecosystem.config.js
   pm2 save
   pm2 startup
   ```

### Step 5: Nginx Configuration

1. **Create Nginx configuration**
   ```bash
   sudo nano /etc/nginx/sites-available/gpa-budaun
   ```

   ```nginx
   server {
       listen 80;
       server_name your-domain.com www.your-domain.com;
       
       # Redirect HTTP to HTTPS
       return 301 https://$server_name$request_uri;
   }

   server {
       listen 443 ssl http2;
       server_name your-domain.com www.your-domain.com;

       # SSL Configuration
       ssl_certificate /path/to/your/certificate.crt;
       ssl_certificate_key /path/to/your/private.key;
       ssl_protocols TLSv1.2 TLSv1.3;
       ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384;
       ssl_prefer_server_ciphers off;

       # Security headers
       add_header X-Frame-Options "SAMEORIGIN" always;
       add_header X-XSS-Protection "1; mode=block" always;
       add_header X-Content-Type-Options "nosniff" always;
       add_header Referrer-Policy "no-referrer-when-downgrade" always;
       add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;

       # Frontend (React build)
       location / {
           root /var/www/gpa-budaun/client/build;
           index index.html;
           try_files $uri $uri/ /index.html;
           
           # Cache static assets
           location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
               expires 1y;
               add_header Cache-Control "public, immutable";
           }
       }

       # API routes
       location /api/ {
           proxy_pass http://localhost:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_cache_bypass $http_upgrade;
       }

       # File uploads
       location /uploads/ {
           alias /var/www/gpa-budaun/uploads/;
           expires 1y;
           add_header Cache-Control "public";
       }

       # Gzip compression
       gzip on;
       gzip_vary on;
       gzip_min_length 1024;
       gzip_proxied expired no-cache no-store private must-revalidate auth;
       gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss;
   }
   ```

2. **Enable site and restart Nginx**
   ```bash
   sudo ln -s /etc/nginx/sites-available/gpa-budaun /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

### Step 6: SSL Certificate (Let's Encrypt)

1. **Install Certbot**
   ```bash
   sudo apt install certbot python3-certbot-nginx -y
   ```

2. **Obtain SSL certificate**
   ```bash
   sudo certbot --nginx -d your-domain.com -d www.your-domain.com
   ```

3. **Set up auto-renewal**
   ```bash
   sudo crontab -e
   ```
   
   Add this line:
   ```bash
   0 12 * * * /usr/bin/certbot renew --quiet
   ```

### Step 7: Monitoring and Logging

1. **Set up log rotation**
   ```bash
   sudo nano /etc/logrotate.d/gpa-budaun
   ```

   ```
   /var/log/pm2/*.log {
       daily
       missingok
       rotate 52
       compress
       delaycompress
       notifempty
       create 644 www-data www-data
       postrotate
           pm2 reloadLogs
       endscript
   }
   ```

2. **Monitor application**
   ```bash
   pm2 monit
   pm2 logs
   ```

3. **Set up monitoring alerts**
   - Configure Uptime Robot or similar service
   - Set up email alerts for downtime
   - Monitor server resources

## 🔧 Post-Deployment Configuration

### 1. Initial Admin Setup

1. **Access admin panel**
   - Visit `https://your-domain.com/admin/login`
   - Use default credentials (change immediately)

2. **Create admin user**
   ```bash
   # Connect to database
   mysql -u gpa_user -p gpa_budaun
   
   # Insert admin user (password: admin123)
   INSERT INTO users (id, email, username, password, role, name, isActive, createdAt, updatedAt) 
   VALUES ('admin-001', 'admin@gpabudaun.ac.in', 'admin', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj4J/8Kz8KzK', 'ADMIN', 'Administrator', true, NOW(), NOW());
   ```

3. **Update admin credentials**
   - Login to admin panel
   - Go to Profile Settings
   - Change password and email

### 2. Content Setup

1. **Add initial content**
   - Create welcome notice
   - Add upcoming events
   - Upload college photos to gallery
   - Update contact information

2. **Configure SEO settings**
   - Update meta titles and descriptions
   - Add Google Analytics (if needed)
   - Submit sitemap to search engines

### 3. Backup Configuration

1. **Database backup script**
   ```bash
   nano /var/www/gpa-budaun/backup-db.sh
   ```

   ```bash
   #!/bin/bash
   DATE=$(date +%Y%m%d_%H%M%S)
   BACKUP_DIR="/var/backups/gpa-budaun"
   DB_NAME="gpa_budaun"
   DB_USER="gpa_user"
   DB_PASS="your_password_here"

   mkdir -p $BACKUP_DIR
   mysqldump -u $DB_USER -p$DB_PASS $DB_NAME > $BACKUP_DIR/db_backup_$DATE.sql
   
   # Keep only last 7 days of backups
   find $BACKUP_DIR -name "db_backup_*.sql" -mtime +7 -delete
   ```

2. **Make script executable and schedule**
   ```bash
   chmod +x /var/www/gpa-budaun/backup-db.sh
   crontab -e
   ```

   Add daily backup at 2 AM:
   ```bash
   0 2 * * * /var/www/gpa-budaun/backup-db.sh
   ```

## 🔍 Troubleshooting

### Common Issues

1. **Application won't start**
   ```bash
   pm2 logs gpa-budaun-api
   # Check logs for errors
   ```

2. **Database connection issues**
   ```bash
   # Test database connection
   mysql -u gpa_user -p gpa_budaun
   ```

3. **File upload issues**
   ```bash
   # Check uploads directory permissions
   ls -la /var/www/gpa-budaun/uploads/
   chmod 755 /var/www/gpa-budaun/uploads/
   ```

4. **Nginx configuration errors**
   ```bash
   sudo nginx -t
   sudo systemctl status nginx
   ```

### Performance Optimization

1. **Enable MySQL query cache**
2. **Configure Redis for session storage** (optional)
3. **Set up CDN for static assets** (optional)
4. **Implement database indexing**

## 📊 Maintenance

### Daily Tasks
- [ ] Check application status
- [ ] Monitor server resources
- [ ] Review error logs

### Weekly Tasks
- [ ] Update dependencies
- [ ] Review security logs
- [ ] Check backup integrity

### Monthly Tasks
- [ ] Security updates
- [ ] Performance review
- [ ] Content audit

## 🆘 Support

For deployment issues:
- Check application logs: `pm2 logs`
- Review Nginx logs: `sudo tail -f /var/log/nginx/error.log`
- Monitor system resources: `htop`
- Database issues: Check MySQL logs

---

**Note**: This deployment guide assumes a Ubuntu server. Adjust commands for other Linux distributions as needed.
