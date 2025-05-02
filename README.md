# LensLight Photo Blog

A full-featured photography blog application built with Node.js, Express, and MongoDB. Users can create accounts, upload photos, and interact with the photography community.

## Features

- 📷 **Photo Management**: Upload, view, update, and delete photos
- 👤 **User Authentication**: Register, login, and manage user profiles
- 🔒 **Authorization**: Secure routes and content based on user permissions
- 💾 **Cloud Storage**: Cloudinary integration for photo storage
- 🎨 **Responsive Design**: Modern and user-friendly interface using EJS templates

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Template Engine**: EJS
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Express-fileupload with Cloudinary integration
- **CSS**: Custom styling with responsive design
- **Deployment**: Ready for Heroku deployment (Procfile included)

## Project Structure

```
├── app.js                # Main application file
├── db.js                 # Database connection setup
├── controller/           # Application controllers
│   ├── pageController.js # Page rendering controllers
│   ├── photoController.js # Photo CRUD operations
│   └── userController.js # User authentication and management
├── middlewares/          # Custom middleware functions
├── models/               # Database models
│   ├── photoModel.js     # Photo schema and model
│   └── userModel.js      # User schema and model
├── public/               # Static assets
├── routes/               # Application routes
│   ├── pageRoute.js      # General page routes
│   ├── photoRoute.js     # Photo CRUD routes
│   └── userRoute.js      # User management routes
└── views/                # EJS templates
    └── partials/         # Reusable template components
```

## Installation & Setup

1. Clone the repository
   ```
   git clone https://github.com/erdemCnl/Nodejs-photoBlog.git
   cd Nodejs-photoBlog
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   DB_URI=your_mongodb_connection_string
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_KEY_SECRET=your_cloudinary_api_secret
   JWT_SECRET=your_jwt_secret
   ```

4. Start the application
   ```
   npm start
   ```

5. For development with auto-restart:
   ```
   npm install -g nodemon
   nodemon app.js
   ```

## Usage

- Access the application at `http://localhost:3000`
- Register a new user account
- Login with your credentials
- Navigate to the dashboard to upload and manage photos
- View all photos in the gallery
- Explore user profiles

## Deployment

The application includes a Procfile for easy deployment to Heroku or similar platforms. Make sure to set the environment variables in your hosting platform.

## License

This project is open source and available under the MIT License.

## Author

Created by [Erdem Canli](https://github.com/erdemCnl) 