# Projet history 

Sportsee is an application that can help people to follow their performance through several graphic which could help them to reach their goal 

## How install the project ? 

You need to clone the project with this github repository https://github.com/Evolved-beep/SportCee. 
Then you need to use npm install for install all of the dependencies which are present on this projet.


### Backend
For running the backend you need to use the npm run dev command it will lunch it on localhost:3000 and then you will have access to the database

### Frontend 
For running the frontend you will just need to run the npm start command it will redirect you to the localhost:3001 as the :3000 is for the backend

# Homepage

### Users
There is only 2 available user's page (12 and 18) 
You can navigate between these page by changing the url or with the 2 buttons with the user's name on the homepage

### Data from database or datamock 
You can also switch the way you receive the data. The button between the user's button can switch the fetch call.. The call by default is from the database so take care to lunch the database before run the start command.


# Endpoint 
This project includes four endpoints that you will be able to use:

http://localhost:3000/user/${userId} - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).

http://localhost:3000/user/${userId}/activity - retrieves a user's activity day by day with kilograms and calories.

http://localhost:3000/user/${userId}/average-sessions - retrieves the average sessions of a user per day. The week starts on Monday.

http://localhost:3000/user/${userId}/performance - retrieves a user's performance (energy, endurance, etc.).

