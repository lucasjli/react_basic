# React 

# Task Goal
Learn about:
 *  React for building modern front-end user interface. (https://react.dev/learn)
 *  Axios for making API requests
 *  HTML , Cascading Style Sheets (CSS), JavaScript
 *	Bootstrap for designing [Optional]
 *	jQuery [Optional]

###Core Functionalities:
Each group member must contribute equally. The application must:
* Display a list of available items from the database. You have to write your own CSS to display the items in an aesthetically pleasing manner.
* Allow users to add a new item using a form. The application should have "Create a new item" button. When a user clicks on the “Create a New Item" button, a form should appear for adding a new item. The form consists of a text boxes for item Name, category, price, quantity and a Submit Button. (Note: aspects of the design may vary depending upon the forms of interactivity you develop, based on your own creativity).
* Allow users to delete an item by clicking on the “X” button. You can use icons or any other way of your choice. 
* On clicking the submit button, a new item should appear in the list of items displayed.
* Update an Existing Item: Add an "Edit" button next to each item. Clicking "Edit" opens a form populated with the item's current data for editing.
* Use custom CSS to create a visually appealing UI


### Implementation
* Node.js and npm are installed on the R-block Linux lab machines.
* Create a folder with a name COMPX575-task8.
* Copy your task7 folder inside the COMPX575-task8 folder.
* Inside COMPX575-task8 folder, set up the project:
# Create a new Vite project with React template

npm create vite@latest task8-clientside -- --template react

This is how your directory structure will look like:<br />
* COMPX575-task8/<br />
 &nbsp;  &ensp;  * task8-clientside/   (React Frontend)<br />
  &nbsp;  &ensp; * task7-COMPX575/     (Express Backend)<br />



# Navigate into the project folder
cd task8-clientside

# Install dependencies
npm install

# Start the development server
npm run dev



 using ‘Create React App’ in a terminal: 

	`npx create-react-app task8-clientside`

* You should see the following files and directories in your task8 folder.<br />
        * node_modules<br />
        * public<br />
        * src <br />
        * .gitignore<br />
        * package.json<br />
        * package-lock.json<br />
        * README.md <br />
* No you have folder structure like this:<br />
        * COMPX575-task8<br />
            &nbsp;  &ensp;     * task8-clientside<br />
              &nbsp;  &ensp;           * node_modules<br />
              &nbsp;  &ensp;           * public<br />
              &nbsp;  &ensp;           * src <br />
              &nbsp;  &ensp;           * .gitignore<br />
                &nbsp;  &ensp;         * package.json<br />
               &nbsp;  &ensp;          * package-lock.json<br />
                &nbsp;  &ensp;         * README.md <br />
                * task7-COMPX575<br />
                &nbsp;  &ensp;        * app<br />
                &nbsp;  &ensp;&nbsp;  &ensp;           * config<br />
                &nbsp;  &ensp;&nbsp;  &ensp;           * controller<br />
                &nbsp;  &ensp;&nbsp;  &ensp;           * models <br />
                &nbsp;  &ensp;&nbsp;  &ensp;           * routes<br />
                &nbsp;  &ensp;       * node_modules<br />
                        * package-lock.json<br />
                        * package.json<br />
                        * server.js
                
* You have to open two terminals: one to run task7-COMPX575 (`node server.js`) and other to run task8-clientside (`npm start`).

* The most frequent command you'll be using is npm start. That's going to start a development server that will live preview as you code. 
* You will also likely to want to install some extra dependencies using npm install command. Remember to include --save, so your package.json file is updated appropriately. 
* You will also benefit from installing the React developer tools extension in your web browser, which gives you some additional abilities to inspect elements with respect to the React framework.  
* Directory structure is really important. You need to create a components folder and css folder inside the src folder.  All your JavaScript files should be in the components folder and CSS files in the css folder.
* Appropriate folder structure - 1 mark

## Submission
On top of the commits to your Git repository, please upload your source files to moodle.
