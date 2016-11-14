# Fitness App — by DHC

App idea:
The main idea of this app is to be able to store my fitness goals and information in one place.
Have metrics where I can track my progress in a very easy, interactive and powerful way. 
This app will have an phone application and web browser app.

Resources and Frameworks:
__________________________________________
|	For testing purposes: Postman				|
|	For database: MongoDB					|
|	For backend: NodeJS					|
|	For Frontend: AngularJS (HTML5 and CSS3)	|
|			     Bootstrap					|
|_________________________________________	|
More resources:
To create the graphs for metrics there is an Angularjs charts and Graphs extension that can be used for this feature.
For interesting dashboard check out the following linkL: https://www.youtube.com/watch?v=Q6tQ9VygQTo
look at the following link for login app with AngularJS
The dashboard has to show the most revenant information possible:



Backend end points:

Note: admin will be able to have access this end points:
The administrator will have more functionality than the users to view and edit users.

Method		URL					Action 
GET			/api/users				Get all/multiple users
POST		/api/users				Create new users
GET			/api/users/1234			Get specific user
PUT  		/api/users/1234			update specific user
DELETE		/api/users/1234			delete specific user

GET			/api/exercises			Get all/multiple exercises
POST		/api/exercises			Create new exercises
GET			/api/exercises/1234		Get specific exercises
PUT  		/api/exercises/1234		update specific exercises
DELETE		/api/exercises/1234		delete specific exercises

GET			/api/categories			Get all/multiple categories
POST		/api/categories			Create new categories
GET			/api/categories/1234		Get specific categories
PUT  		/api/categories/1234		update specific categories
DELETE		/api/categories/1234		delete specific categories

GET			/api/plans				Get all/multiple plans
POST		/api/plans				Create new plans
GET			/api/plans/1234			Get specific plans
PUT  		/api/plans/1234			update specific plans
DELETE		/api/plans/1234			delete specific plans

GET			/api/settings 			Get all/multiple settings
POST		/api/settings			Create new settings
GET			/api/settings/1234		Get specific settings
PUT  		/api/settings/1234		update specific settings
DELETE		/api/settings/1234		delete specific settings

Note: user be able to have access this end points:
will have access to his own account and modify the settings, exercises, categories, fitness plans and goals

Method		URL					Action 
GET			/api/settings 			Get all/multiple settings
POST		/api/settings			Create new settings
GET			/api/settings/1234		Get specific settings
PUT  		/api/settings/1234		update specific settings
DELETE		/api/settings/1234		delete specific settings

GET			/api/goals	 			Get all/multiple settings
POST		/api/goals				Create new settings
GET			/api/goals/1234			Get specific settings
PUT  		/api/goals/1234			update specific settings
DELETE		/api/goals/1234			delete specific settings

GET			/api/exercises			Get all/multiple exercises
POST		/api/exercises			Create new exercises
GET			/api/exercises/1234		Get specific exercises
PUT  		/api/exercises/1234		update specific exercises
DELETE		/api/exercises/1234		delete specific exercises

GET			/api/categories			Get all/multiple categories
POST		/api/categories			Create new categories
GET			/api/categories/1234		Get specific categories
PUT  		/api/categories/1234		update specific categories
DELETE		/api/categories/1234		delete specific categories

GET			/api/plans			Get all/multiple plans
POST		/api/plans			Create new plans
GET			/api/plans/1234		Get specific plans
PUT  		/api/plans/1234		update specific plans
DELETE		/api/plans/1234		delete specific plans 


Graphs Information:
It is possible to have multiple graphs for the following scenarios:
Progression total body (general comparison to your goals)
Progression lower body (comparison to your goals and progression based on weight lifting)
Progression upper body (comparison to your goals and progression based on weight lifting)
- back  
- arms  
- chest 
- shoulder  
Progression cardio  (comparison to your goals based on cardio tests)


User story and description: 
Each user will have their now dashboard where their now information is displayed
The user will have access to the following features:
- Entering and tracking goals by the use of graphs
- Entering new exercises and setting up those into a customizable category
The dashboard will be displayed when logging in as a user. 
the user will have a Track feature mostly used with phone devises to enter the new sets and reps performed. 
- NOTE: For this specific feature it is necessary to performa a ration where the number of sets and weight are counted and displayed a measuring ratio. 
- This ratio, will be then shown in the graph. 
For this purpose I will use the 1 repetition maximum equation. 
In terms of equation you can use the following code:

var rm2 = function (w, r){
    return (w /(1.0278-(r*0.0278)));
}
console.log("________________");
var result1 = rm2(60,12);
var result2 = rm2(60,10);
var result3 = rm2(55,10);

var avgRm = ((result1+result2+result3)/3);
console.log(avgRm);

var result1 = rm2(60,12);
var result2 = rm2(60,12);
var result3 = rm2(60,8);

var avgRm = ((result1+result2+result3)/3);
console.log(avgRm);

Note that, it would be great to give an average depending on how many sets are performed. and therefore a the final coefficient is set by providing an average depending on how many sets are performed. 


Admin story and description:
The admin will have a dashboard where he can actually see graphs of new users, exercises and plans have been entered in the app.
He will be able to delete, add, update all the information he wants. 


How to run the app locally:
need to have mongo db server running
Need to have http server running 
Need to have node moon running the backend server NodeJS


User JSON: (settings, goals, exercises and plans)
NOTE: This is design in a NoSQL pattern using MongoDB to store the data.
Note that a user may have multiple exercises and plans, But only one set of setting and goals!!!!

{
	"_id" : ObjectId("57cb10192d253a2e0bae4b62"),
	"username" : "dhc",
	"name" : "Diego Herrera",
	"password" : "$2a$10$speFjDxy725/i5SK/Aoloe1rMLVXp/2eMkkG4kuUC.aI7J9hKnB0i",
	"__v" : 0,
	“goals” : [
		{
			“title” : “some goals”,
			"id" : "/user/somegoals.json",
			“goal” : “Be the best“,
			"_id" : ObjectId("57bbd0bvfhsjvbdjkg89yk”)
		}
	],
	“plans” : [
		{
			“title” : “Gain Weight”,
			"id" : "/user/gainweight.json",
			“plan” : “Become hulk“,
			"_id" : ObjectId("57bbd0c0a9646dbadf0a97")
		}
	],	
	“exercises” : [
		{
			“title” : “Bench Press”,
			"id" : "/user/benchpress.json",
			“exercise” : “Bench Press“,
			"_id" : ObjectId("57bbd0c0a9646dba84df0a97")
		}
	],
}