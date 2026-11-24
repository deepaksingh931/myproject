# WanderLust – Full Stack Property Listing Platform

A full-stack property listing web application inspired by Airbnb, built using Node.js, Express.js, MongoDB, and EJS. The platform allows users to explore and manage property listings through a responsive web interface.

**Live Demo:** https://roamnest-gkl6.onrender.com/listings

## Overview

WanderLust is a web development project designed to provide a platform for browsing and managing property listings. It follows the MVC (Model-View-Controller) architecture to maintain a modular and organized codebase.

The application uses Express.js for backend routing, MongoDB for data storage, and EJS for dynamic page rendering.

## Features

- **Property Listings:** Browse and view available property listings.
- **CRUD Operations:** Create, read, update, and delete property listings.
- **Image Management:** Integrated Cloudinary for image storage and management.
- **Server-side Validation:** Implemented input validation using Joi.
- **Database Management:** Used MongoDB and Mongoose for data modeling and database operations.
- **MVC Architecture:** Organized application components using the MVC pattern.
- **Error Handling:** Implemented middleware and centralized error handling.
- **Responsive UI:** Built the interface using Bootstrap.

## Tech Stack

| Category | Technologies |
|---|---|
| Frontend | HTML, CSS, JavaScript, Bootstrap, EJS |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Validation | Joi |
| Image Storage | Cloudinary |
| Architecture | MVC |
| Tools | Git, GitHub, npm |

## Live Application

Explore the deployed application:

https://roamnest-gkl6.onrender.com/listings

## Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/deepaksingh931/myproject.git
```

### 2. Navigate to the Project Directory

```bash
cd myproject
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory and configure the environment variables required by the application.

These may include your MongoDB connection string and Cloudinary credentials. Use the exact variable names expected by your project configuration.

**Do not commit your `.env` file or publish credentials.**

### 5. Start the Application

```bash
node app.js
```

If your project uses a different entry point or an npm start script, use the corresponding command.

## Project Structure

The application follows a modular MVC structure:

```text
myproject/
│
├── controllers/     # Application logic
├── models/          # Mongoose data models
├── routes/          # Express routes
├── views/           # EJS templates
├── public/          # Static assets
├── utils/           # Utility modules
├── middleware/      # Custom middleware
├── app.js           # Application entry point
├── package.json     # Dependencies and scripts
└── README.md
```

*Note: Adjust this structure to match your actual repository folders.*

## Future Improvements

- Enhance property search and filtering.
- Improve application performance and user experience.
- Add further property discovery and management features.

## Author

**Deepak Singh**

- GitHub: https://github.com/deepaksingh931
- LinkedIn: https://www.linkedin.com/in/deepak-singh931

---

If you find this project useful, feel free to explore the repository and the live application.
