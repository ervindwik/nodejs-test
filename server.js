require("dotenv").config()
const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express()
app.use(express.json())
app.use(bodyParser.json());
app.use(cors());




// ------------------------- Import Controllers ------------------------- //

const authController = require("./controllers/authController");
const jobController = require("./controllers/jobController");

// ------------------------- End Import Controllers ------------------------- //

// ------------------------- Import middlewares ------------------------- //
const middleware = require("./middlewares/auth");
// ------------------------- End Import middlewares ------------------------- //






// ------------------------- Define Routes ------------------------- //

// ------------------------- Auth ------------------------- //

app.post("/v1/auth/register", authController.handleRegister);
app.post("/v1/auth/login", authController.handleLogin);
app.get("/v1/auth/me", middleware.authenticate, authController.handleCurrentUser);

// ------------------------- End Auth ------------------------- //




// -------------------------List Jobs ------------------------- //

app.get("/v1/jobs/getAll", middleware.authenticate, jobController.handleGetAllJobs)
app.get("/v1/jobs/:id", middleware.authenticate, jobController.handleGetJobsById)


// ------------------------- End List Jobs --------------------------//






const port = process.env.TOKEN_SERVER_PORT 
//get the port number from .env file
app.listen(port, () => { 
console.log(` Server running on ${port}...`)
})