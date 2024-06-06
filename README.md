# Somnium Job Finder Platform

Welcome to the Somnium Job Finder Platform, a comprehensive job search application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This platform is tailored specifically for Somnium, allowing users to search for job listings, view job details, and apply for positions at Somnium. This app developed for Kokshetau Digital Hackathon powered ny Aqmola IT Hub and Somnium company!

## Features

- **User Registration and Login**: Users can create an account and log in to access the platform.
- **Job Search**: Users can search for job listings based on keywords, location, and various filters.
- **Job Details**: Users can view detailed information about job listings, including job descriptions, requirements, and application instructions.
- **Job Application**: Users can apply for jobs directly through the platform by submitting their resume and other required information.
- **Saved Jobs**: Users can save job listings for future reference.
- **User Dashboard**: Users have access to a personalized dashboard where they can manage their profile, saved jobs, and job applications.

## Technologies Used

- **Front-end**:
  - **React.js**: A JavaScript library for building user interfaces.
  - **Redux**: A predictable state container for managing application state.
  - **HTML, CSS, and JavaScript**: The core web technologies for building the user interface.
  - **Axios**: A library for making HTTP requests to the server.
- **Back-end**:
  - **Node.js**: A JavaScript runtime for building server-side applications.
  - **Express.js**: A web application framework for Node.js.
  - **MongoDB**: A NoSQL database for storing job listings, user information, and other data.
  - **Mongoose**: An Object Data Modeling (ODM) library for MongoDB.
- **Authentication and Authorization**:
  - **JSON Web Tokens (JWT)**: A standard for securely transmitting information between parties as a JSON object.
- **Deployment**:
  - **Netlify**: A cloud platform for deploying and hosting web applications.
  - **MongoDB Atlas**: A cloud-based database service for MongoDB.

## Getting Started

To run the Somnium Job Finder Platform locally, follow these steps:

1. **Clone the repository**: 
   ```bash
   git clone https://github.com/S4adirrama/somnium-job-finder.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd somnium-job-finder
   ```
3. **Install the dependencies**:
   - **Front-end**:
     ```bash
     cd client && npm install
     ```
   - **Back-end**:
     ```bash
     cd server && npm install
     ```
4. **Set up the environment variables**:
   - Create a `.env` file in the `server` directory.
   - Add the following environment variables:
     ```plaintext
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     ```
5. **Start the development server**:
   - **Front-end**:
     ```bash
     cd client && npm start
     ```
   - **Back-end**:
     ```bash
     cd server && npm start
     ```
6. **Access the application**: Open your browser and navigate to `http://localhost:5173` to use the Somnium Job Finder Platform.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## Contact

For any inquiries or questions, please contact us at [ramazanedu2@gmail.com](mailto:ramazanedu2@gmail.com).

## Acknowledgements

- [Create React App](https://create-react-app.dev/)
- [React Redux](https://react-redux.js.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Passport.js](http://www.passportjs.org/)

Thank you for using the Somnium Job Finder Platform! We hope it helps you find your perfect job at Somnium.
