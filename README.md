# Autonomous Delivery Robot Application  

This application is a part of the project - **Solar-based Autonomous Delivery Robot** and is built using React JS, a Javascript library used for building dynamic user interfaces. The application is hosted on GitHub pages - [Autonomous-Delivery-Robot-Application](https://mit-mentors.github.io/autonomous-delivery-robot-application/).

The purpose of this application is to enable the users to access the robot and place orders for delivery according he it's availability. It is a simple, user-friendly application where the users register themselves and can access the status of the bot's availability, place orders, and check the status of the order. The application is connected to the Firebase Realtime Database through which the bot can be accessed through an application.

## 1. Setting up the React application in the local machine

### Check for the prerequisites and install them if required.
1. Node JS - download the latest version from the official [website](https://nodejs.org/en).
2. npm package manager - to install all the dependencies.
3. Git - version control system

### Download the React application
1. Clone the repository [Autonomous-Delivery-Robot](https://github.com/MIT-Mentors/autonomous-delivery-robot-application.git).
    #### git clone https://github.com/MIT-Mentors/autonomous-delivery-robot-application.git
    
2. Change to the project directory 
    #### cd autonomous-delivery-robot-application.git

3. Install all the dependencies required for the project.
    #### npm install

4. To automatically fix the issues after the installation, run:
    #### npm audit fix

5. After fixing the issues and connecting the application to the database, start the development server:
    #### npm start
    
    (Refer [this](https://github.com/MIT-Mentors/autonomous-delivery-robot-application/edit/main/README.md#connecting-application-with-database) to connect the application to the database)
    
This will start a local development server and the application will be run in the web browser. The application can be accessed at ***http://localhost:3000***.


## 2. Connecting application with database

This application is connected to the Firebase Realtime database.

Refer to [this](https://www.makeuseof.com/react-app-firebase-connect/) link for connecting and initialising an react application with the firebase realtime database.

After initialization, add the elements to obtain the following structure for the proper functioning.

![Alt Firebase Realtime Database](https://github.com/MIT-Mentors/autonomous-delivery-robot-application/blob/main/src/Photos/Readme-firebase.png)



   
