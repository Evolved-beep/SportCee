## How install the project ? 

You need to clone the project with this github repository https://github.com/Evolved-beep/SportCee. 
Then you need to use npm install for install all of the dependencies which are present on this projet.

## Prerequisites
React(V.18.2.0)

React Router Dom(V.6.8.0)

Recharts(V.2.3.2)

NodeJs(V.18.3.0)

NPM(V.8.11.0)

VSCode(V.1.77.0)

### Backend
For running the backend you need to use the npm run dev command it will lunch it on localhost:3000 and then you will have access to the database

### Frontend 
For running the frontend you will just need to run the npm start command it will redirect you to the localhost:3001 as the :3000 is for the backend

# Endpoint 
This project includes four endpoints that you will be able to use:

http://localhost:3000/user/${userId} - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).

http://localhost:3000/user/${userId}/activity - retrieves a user's activity day by day with kilograms and calories.

http://localhost:3000/user/${userId}/average-sessions - retrieves the average sessions of a user per day. The week starts on Monday.

http://localhost:3000/user/${userId}/performance - retrieves a user's performance (energy, endurance, etc.).

