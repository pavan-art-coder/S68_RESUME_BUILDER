# E-Commerce Application: Backend Web Development Project

### *Milestone 1: Project Overview*

*Brief Overview:*
This project involves developing a fully functional e-commerce platform utilizing the MERN stack — MongoDB, Express, React, and Node.js. The application will be built using React's Create React App (CRA) for the front-end, MongoDB as the database solution, and Node.js with Express to handle the back-end server operations.

The project will be split into two main areas: *Frontend* (client-side) and *Backend* (server-side) development. 

- *Frontend:* We will be creating various pages for user interaction, including:
  - *Login Page*
  - *Sign Up Page*
  - *Forgot Password Page*
  - *Home Page*
  - *Product Display Page*
  - *Cart Page*
  - *Address Page*
  - *Payment Page*
  - *Order Confirmation Page*
  - *Order History Page*
  - *Help Page*
  - *Error Page*
  - Detailed Product Pages

- *Backend:* The server will interact with MongoDB, a NoSQL database, to handle data management. We will be using the Mongoose library to interact with the database and define schemas for data consistency. To manage communication between the front-end and the back-end, we will implement APIs that allow for CRUD operations (Create, Read, Update, Delete) using HTTP methods like POST, GET, PUT, PATCH, and DELETE.

We’ll integrate *bcrypt* for password hashing to ensure user data security, and the entire project will follow best practices for backend structure, focusing on scalability and maintainability.

---

### *Milestone 2: Frontend Development (Login Page)*

For this milestone, we successfully created the *Login Page* using React's Create React App (CRA). To improve the user interface and design, we will be updating the layout with *Tailwind CSS* for styling and incorporate *React-Icons* for intuitive icons. Tailwind CSS will help us streamline the design process with its utility-first classes, making the UI responsive and visually appealing.

The Login Page will include fields for the user's email and password, and will handle form validation, state management, and error handling for incorrect login attempts. React Icons will be utilized for visual appeal and ease of use, enhancing the overall experience.

---

### *Milestone 3: Backend Structure and Initial Setup*

At this stage, we’ve laid the foundation for the backend by setting up the directory structure for the project. The backend is structured as follows:

- **src/ Directory:** Contains all source code files for the server.
  - **config/**: Stores environment configuration files like .env for MongoDB URL and the server port.
  - **controllers/**: Defines functions to handle incoming requests for various routes.
  - **database/**: Contains the MongoDB connection logic in db.js.
  - **middleware/**: Houses custom middleware functions such as error.js for centralized error handling.
  - **model/**: Contains Mongoose models for the database schema.
  - **routers/**: Defines route handlers for different API endpoints.
  - **utils/**: Stores utility functions, including the ErrorHandler.js to manage application-level errors.

In the **index.js** file, we imported Express, initialized the app, and set up basic routing and server listening. We can now handle HTTP requests through app.get and set the server to listen for incoming requests on the specified port.

### *Milestone 4: Backend Structure and Initial Setup*
creating user model, user controller and Multer support


Milestone 6
: Backend Structure and Initial Setup** Password Encryption and User Data Storage

Password Hashing:

Implement bcrypt to hash the user's password during the signup process. Ensure that the hashed password is stored in the database instead of the plaintext version to enhance security. User Data Storage:

Save all relevant user information (e.g., name, email, etc.) in the database. Maintain the integrity and confidentiality of the password by ensuring it remains encrypted throughout the process.

Milestone 7
Create Login Endpoint:

Accept user credentials (email/username and password). Retrieve the corresponding user from the database. Validate Password:

Use bcrypt to hash the entered password. Compare it with the stored hashed password for authentication.

Milestone 8
In this milestone we created two components called Home.jsx and productcard.jsx. product card.jsx is the template used in home.jsx to map out all the products and display them. We also added routes to the home.jsx to display it when the page loads. Based on the number of products the products are mapped and displayed.



## Milestone 9: Create Product Form

### Learning Goals 🎯
By the end of this milestone, you will:

- Learn how to create a form that collects all the details of a product.
- Understand how to take multiple images as input and handle them properly.

### Why Create a Product Form?

In this milestone, we will create a form that allows users to input all necessary product details. These details will be stored in a database and displayed on the product homepage created in the previous milestone.

### Steps for Milestone 9 📝

1. *Create the Product Form*: 
   - Design and implement a form that collects all product-related information.
   - Ensure the form is user-friendly and validates the input fields.

2. *Handle Multiple Product Images*:
   - Enable the form to accept multiple images as input.
   - Implement proper handling and storage of these images.

This milestone is a crucial step in building a functional product listing feature. Good luck! 🚀

---

## Milestone 10: Product Schema & API Endpoint

### Learning Goals 🎯
By the end of this milestone, you will:

- Learn how to write a product schema.
- Learn how to create an endpoint to validate and store product details in MongoDB.

### Product Schema

- Define the structure of product data (e.g., name, description, price, image URL) using Mongoose.
- Ensure each field has proper validation (e.g., required fields, correct data types).

### Endpoint Creation

- Build a *POST* endpoint to receive product data.
- Validate and save the product details to MongoDB.

### Why Validation?

Validation ensures that only valid data is saved in the database, maintaining data integrity and preventing errors.

This milestone is essential for backend development and securing data consistency in your project. Keep going! 🚀

# Milestone 11: Fetch & Display Product Data

## Learning Goals 🎯
By the end of this milestone, you will:

- Learn how to write an endpoint that extracts and sends data from MongoDB.
- Understand how to receive data on the frontend.
- Dynamically display data using the product card created earlier.

## Steps for Milestone 11 📝

1. *Write an API Endpoint*:
   - Create an endpoint that retrieves all product data from MongoDB and sends it to the frontend.

2. *Fetch Data in Frontend*:
   - Write a function in the frontend to fetch all product data from the backend.

3. *Display Data Dynamically*:
   - Pass the fetched data to the product card component to display it dynamically.

This milestone is crucial in connecting the backend and frontend, making your application fully functional. Keep going! 🚀

## Milestone 12

### Achievements:
- **Checkout Process:** Implemented a complete checkout page with form validation and integrated payment gateway (Stripe/PayPal).
- **User Authentication:** Enhanced login/registration with "remember me" functionality.
- **Order Confirmation:** Created a page to display order details after successful payment.
- **Bug Fixes & UI Improvements:** Fixed bugs and improved the user interface.

## Milestone 13

In this milestone, the following changes were made:

- List the major features or fixes you implemented here
- Any new functionality added, e.g., new pages, forms, or components
- Changes in existing functionality, if any]
- Bug fixes, enhancements, or performance improvements

## Milestone 14

### Achievements:
- **Implemented Order History Page:**
  - Created a page where users can view their past orders and order details.
  - Displayed order status, date, and total price.
  
- **Admin Dashboard:**
  - Developed an admin panel for managing products, orders, and customers.
  - Enabled the ability to update or delete products, and view order history for each customer.

- **Performance Optimization:**
  - Improved the site's loading speed by optimizing images and lazy-loading assets.

- **Bug Fixes & UI Improvements:**
  - Fixed minor UI bugs and improved responsiveness across devices.

### Technologies Used:
- HTML, CSS, JavaScript
- React (if used)
- Node.js (if used for backend)

## Milestone 15 - Adding a Navbar Component 🚀
Project Overview
This project is an ecommerce application where users can browse, add products, and manage their cart. As part of Milestone 15, we have implemented a Navbar component to enhance navigation across different pages of the application

## Milestone 16: Product Info Page
Learning Goals 🎯
By completing this milestone, you will learn:
How to create a new page to display product details.
How to add a quantity selector and "Add to Cart" button.
Steps for Milestone 16 📝
Create a Product Info Page:
Display product details such as name, description, price, and image.
Include a dropdown or input field to select the quantity.
Add an "Add to Cart" button.
Ensure Smooth Navigation:
Users should be able to navigate from the product list to the product info page.
Update Functionality:
Ensure the selected quantity is updated correctly.
Clicking "Add to Cart" should update the shopping cart.
Responsive Design:
Ensure the page is mobile-friendly and works well on all screen sizes.


## Milestone 17: Backend Endpoint for Cart Functionality
Learning Goals 🎯
By completing this milestone, you will learn:
How to edit the user schema to store cart products.
How to write an endpoint to receive product details and store them in the database.
Steps for Milestone 17 📝
Write the Cart Schema:
Modify the user schema to include a cart field.
Define a new schema for storing products in the cart.
Create Backend Endpoint:
Write an API endpoint to receive product details.
Store the received product details in the cart collection/database.
Database Integration:
Ensure data is correctly saved and retrieved from the database.
Testing the Endpoint:
Use Postman or another tool to test the API.
Ensure the cart updates correctly when new products are added.


## Milestone 18: Backend Endpoint for Cart Page
Learning Goals 🎯
By completing this milestone, you will learn:
How to create an endpoint to receive requests from the cart page.
How to write a backend endpoint to fetch all the products inside the cart using the user's email.
Steps for Milestone 18 📝
Create a Backend Endpoint for the Cart Page:
Develop an API endpoint that receives a request from the cart page.
Fetch Cart Products for a User:
Write an API to retrieve all products stored inside the cart based on the user's email.
Database Integration:
Ensure the cart data is fetched correctly from the database.
Testing the Endpoint:
Use Postman or another tool to test API responses.
Verify that all products inside the cart are fetched correctly.


## 📍 Milestone 20 - Achievements  
In **Milestone 20**, the following tasks were completed:  
✅ [Briefly explain what was achieved in Milestone 20]  
✅ [List new features, bug fixes, or improvements]  
✅ [Mention any updates to the database, API, or frontend]  




 
## Milestone 15
In this milestone I created a new navbar that renders on all the pages. I added Navlinks for Home, productform, login and signup. I first made a new jsx file called navbar and then created the whole navbar. I also styled it using Tailwind css. I also had other issues that I fixed in home.jsx and styled productform jsx as it had no styling before.

## Milestone 16
Created singleproduct.jsx. The pages is made to show details about the product. I also routed it and made other minor changes.

## Milestone 17 & 18
In these two Milestones we first added the cart details to the schema. Then we also created a post request for sending the details and storing them on the database. We also created an endpoint to receive request from cart page.

## Milestone 19
Backend: In this milestone I added the endpoint for the put request from the frontend and then also did app.use(cors()). I also routed it in the controller as well as adding the logic for it.

Frontend: I added the components cart.jsx and cartcomponent.jsx where I will render the frontend for cart page. I also used fetch request to get and display the products in the cart. I also added fetch request to put and update the changes made to the quantity of the page using the + and - icons on each product card.

## Milestone 20
In this milestone we made the /profile endpoint to get the user data and then save it in an object. after this we made the profile.jsx where we will show all the user details.

## Milestone 21
In this Milestone I made the Address.jsx which consists of a form component where users can enter details such as country, state, pincode etc. I made use of usestate hook to store the inputs and then sent it to the backend using axios. Once the data has been sent to the backend the usenavigate hook kicks in and navigates to the /profile page. (Do note that only the frontend has been done in this milestone).

## Milestone 22
In this milestone I created an enpoint to recieve the data of the address from the frontend. I also used JWT to authenticate the process.

## Milestone 23: What was Achieved

In this milestone, we completed the following:
- [Briefly list the key updates, features, or bug fixes you implemented]
- [Mention any dependencies or tools added]
- [If relevant, include setup instructions for this milestone]

## Milestone 24
In this milestone we: First we will display all the products we are ordering Next we will display the address user selected to deliver We will display the total value of the cart We will have an place order button at the bottom.


## Milestone 25: Creating a End-point to recieve order details

Created an endpoint that will receive the products, user, address details
will get the mail of the user using that you need to retrive the _id of the user
For each product the order will be different with same address
using order schema it will store order details in mongodb order collection


## Milestone 26: Creating a (get)End-point to get order details
Created an endpoint that displays the order details
get the mail of the user to retrive the _id of the user
Using that _id it will get all the orders of that user


## Milestone 27
In this milestone we created a orderpage in the forntend and the component for displaying the order products with button to cancel the order. Using axios patch and array methods I have been able to remove the product from the database when the user clicks on the remove or cancel button in the orderhistory page. followed this guideline: You need to create an my-orders page You will send an get request to my-orders endpoint that we created in previous milestone. We will send user mail in to endpoint to get all the user orders Display all the user orders We will add my-orders page in navbar for better navigation.

## Milestone 28
In my-orders page for every order add cancel order button has been added. If the order is already canceled this button will not be displayed I have created an endpoint that will receive the order-id Get the order using this id and mark the status canceled and save

## Milestone 29

In this Milestone we created an account in paypal and got the Client ID. We also looked at NPM documentation for react-paypal-js and used it to make the paypal button and integrate the frontend logic for the payment page. here are the steps I followed: Please create an PayPal account first PayPal developer dashboard Once you login you can see an option for an sandbox accounts. Copy the UserID of that account and save it. In this sandbox accounts you can find your client id copy and save it. In your order conformation page you need two options for payment one is COD and another is online payment. Create radio buttons to select COD or online payment and when we click on online payment PayPal buttons need to be displayed. In next milestone we will write an code to display and use those PayPal online Payments buttons.

## Milestone 30,31 and 32
After creating a PayPal account and getting the UserID inside the sandbox account, implement online payment using the PayPal API with the client key created earlier. Install the react-paypal-js NPM package, which provides the PayPalScriptProvider component to display online payment methods like credit or debit cards. Learn how to use and integrate the PayPal API for handling payments. For global state management, install the react-redux package and create a store folder with two files: store.js and userActions.js. In store.js, configure a store with a userReducer to handle the global email state. In userActions.js, create a function called setEmail to store the email state inside the global store. In index.js, wrap the App component inside the Provider component with the store as props. Use useDispatch in the Login page to store the email in the global state and useSelector in all remaining pages to access the stored email.

## Milestone 33
In this milestone I used JWT to create a token upon login and then made stored it in a cookie.
=======
In this milestone, we created an account in PayPal and got the Client ID. We also looked at the NPM documentation for `react-paypal-js` and used it to create the PayPal button and integrate the frontend logic for the payment page. 

### Steps Followed:
1. **Create a PayPal Account**:  
   - Visit the PayPal Developer Dashboard.
   - Log in and navigate to **Sandbox Accounts**.
   - Copy the User ID of the sandbox account and save it.
   - Find the **Client ID** in the sandbox accounts and save it.

2. **Implement Payment Options**:  
   - On the **Order Confirmation Page**, create two payment options:
     - **Cash on Delivery (COD)**
     - **Online Payment via PayPal**  
   - Use **radio buttons** to allow users to select a payment method.
   - When **Online Payment** is selected, display PayPal buttons.

---

## Milestone 30, 31, and 32
1. **PayPal Integration**:
   - After creating a PayPal account and obtaining the User ID from the sandbox account, implement online payment using the PayPal API.
   - Use the previously created **Client Key**.
   - Install the `react-paypal-js` NPM package.
   - Use the `PayPalScriptProvider` component to display online payment options like **credit or debit cards**.
   - Learn how to use and integrate the **PayPal API** for handling payments.

2. **Global State Management (Redux)**:
   - Install `react-redux` for global state management.
   - Create a `store` folder with two files:
     - **store.js**: Configure a Redux store with a `userReducer` to manage the global email state.
     - **userActions.js**: Create a function `setEmail` to store the email in the global state.
   - In `index.js`, wrap the `<App />` component inside the `<Provider>` component and pass the store as a prop.
   - Use `useDispatch` in the **Login Page** to store the email in the global state.
   - Use `useSelector` in all other pages to access the stored email.

---

## Milestone 33
In this milestone, I implemented **JWT Authentication**:
- Created a **JWT token upon login**.
- Stored the token **inside a cookie** for authentication.

