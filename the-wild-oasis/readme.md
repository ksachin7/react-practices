# **The wild oasis**

The Wild Oasis is a comprehensive hotel management application built using React. It aims to provide a seamless experience for both hotel administrators and guests by offering features for managing bookings, cabins, guests, and more. The application prioritizes user authentication, efficient cabin and booking management, insightful dashboard analytics, and customization options.

![Status](https://img.shields.io/badge/Status-In%20Progress-yellow?style=flat-square) [![Netlify Status](https://img.shields.io/badge/Netlify-Deployment-brightgreen?style=flat-square&logo=netlify)](https://the-wild-oasis-1ef4a.netlify.app)  
>[!Note]
>Although a role-based access control (RBAC) system has not been implemented yet, guest users have been granted full control to showcase this project. In the future, RBAC will be implemented to restrict access based on user roles.

## **Technologies Used**

**UI:** `React`, `react-hooks`, `props`, `prop-types`, `API Integration`, `react-form`, `toast`, `modal`, `react-icons`, `Dark-mode`, etc.  
**Responsive & Re-usable ui components:**  `styled-components`, `GlobalStyles`, `media-queries`  
**Styling:** `css`, `styled-components`  
**Routing:** `react-router`  
**State management:** `Redux`, `React-query`, `Context API`  
**Backend:** `Supabase`  
**Authentication & Authorization:** `Supabase`  
**Caching:** `Local-storage`  
**Charts:** `recharts`  
**Errors:** `StrictMode`, `ErrorBoundary`  
**Build-tools & bundlers:** `webpack`, `vite`  
**Deployment:** `Netlify`  

<!-- ### **Project Description** -->

**Setting Up Authentication**

- Implement user authentication using Firebase Authentication or a similar service.
- Allow new users to sign up within the application.
- Create login and signup pages/components.

**User Profile Management**

- Allow users to upload an avatar.
- Implement functionality for users to change their name and password.
- Create a profile settings page/component.

**Cabin Management**

- Design a table view to display all cabins.
- Include fields for cabin photo, name, capacity, price, and current discount.
- Implement functionality to update, delete, and create new cabins.
- Add the ability to upload a photo for each cabin.
- Create a page/component for cabin management.

**Booking Management**

- Design a table view to display all bookings.
- Include fields for arrival and departure dates, status, paid amount, cabin, and guest data.
- Implement filtering by booking status.
- Allow users to delete, check in, or check out a booking.
- Implement functionality to accept payment and confirm payment receipt on check-in.
- Add the option for guests to add breakfast during check-in.
- Create a page/component for booking management.

**Guest Management**

- Implement functionality to manage guest data.
- Include fields for full name, email, national ID, nationality, and country flag.
- Create a page/component for guest management.

**Dashboard**

- Design the initial dashboard screen.
- Display important information for the last 7, 30, or 90 days.
- Include lists of guests checking in and out on the current day.
- Show statistics on recent bookings, sales, check-ins, and occupancy rate.
- Create charts showing daily hotel sales, extras sales, and stay durations.
- Implement actions for users to perform tasks directly from the dashboard.

**Application Settings**

- Allow users to define application-wide settings such as breakfast price, min/max nights per booking, and max guests per booking.
- Create a settings page/component.

**Dark Mode**

- Implement dark mode functionality throughout the app.
- Allow users to toggle between light and dark modes.
- Ensure proper styling and contrast for readability in dark mode.

**Additional Considerations**

- Use React Router for navigation between different pages/components.
- Utilize state management libraries like Redux or React Context API for managing application state.
- Implement form validation for user input fields.
- Ensure responsive design for compatibility with various screen sizes.
- Implement error handling and feedback mechanisms for a smooth user experience.

### **Future Work:**

- Implement a role-based access control (RBAC) system to restrict access to certain features and pages based on user roles, enhancing security and privacy within the application.
- Expand test coverage to ensure the reliability and stability of the application.
- Enhance user interface and user experience based on user feedback and usability testing.
