# YelpCamp

A full-featured web application for discovering and reviewing campgrounds. Users can create, review, and manage campground listings with an interactive map interface.

[Live Demo](https://yelpcamp-2qfp.onrender.com/campgrounds)

## Features

- **User Authentication**

  - User registration and login
  - Authentication using Passport.js
  - Authorization for user-specific actions

- **Campground Management**

  - Create, view, edit, and delete campgrounds
  - Image upload with Cloudinary integration
  - Interactive maps using Mapbox
  - Geocoding for campground locations

- **Reviews System**

  - Add and delete reviews for campgrounds
  - Star rating system
  - User-specific review management

- **UI Features**
  - Responsive design using Bootstrap
  - Dynamic cluster map for campground locations
  - Image carousel for campground photos
  - Flash messages for user feedback

## Technologies Used

- **Backend**

  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - Passport.js (Authentication)
  - Cloudinary (Image storage)
  - Mapbox (Maps and Geocoding)

- **Frontend**

  - EJS (Embedded JavaScript templates)
  - Bootstrap 5
  - Mapbox GL JS

- **Security**
  - Helmet (Security headers)
  - Express-mongo-sanitize
  - JOI (Data validation)
  - Express-session
  - Connect-flash

## Prerequisites

- Node.js
- MongoDB
- Cloudinary account
- Mapbox account

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret
MAPBOX_TOKEN=your_mapbox_token
DB_URL=your_mongodb_url (optional, defaults to local MongoDB)
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/YelpCamp.git
   cd YelpCamp
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables as described above

4. Start the application:
   ```bash
   npm start
   ```

## Usage

- Visit `http://localhost:3000` in your browser
- Register a new account or login
- Explore campgrounds on the map
- Create new campgrounds
- Leave reviews and ratings
- Manage your campgrounds and reviews

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built as part of Colt Steele's Web Developer Bootcamp
- Thanks to the open source community for the various packages used
