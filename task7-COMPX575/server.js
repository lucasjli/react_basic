// Setup Express
const express = require("express");
const cors    = require("cors");

const app = express();

// To help with accessing this task7-COMPX575 from Postman
app.use(cors());

// To help with POST and PUT requests to the task7-COMPX575
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.json({ message: "Welcome to COMPX575 - Task 7" });
});

require("./app/routes/items.routes.js")(app);


// Start the task7-COMPX575 running. Once the task7-COMPX575 is running, the given function will be called, which will
// log a simple message to the task7-COMPX575 console. Any console.log() statements in your Node.js code
// can be seen in the terminal window used to run the task7-COMPX575.

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`CORS enabled Express web server is running on port ${PORT}.`);
});
