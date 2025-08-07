import express from "express"
import cors from "cors"
import reviews from "./api/reviews.route.js"

const app = express();

app.use(cors());
app.use(express.json());

// Now some initial routes are specified
// The first route is the URL used to get and receive some information from the website.

app.use("/api/v1/reviews", reviews);

// This is how you should create urls, you should use api keyword then the version number so that later code can be upgraded, then the reviews keyword is used.

// The above code what it does is, it will make app use routes stored in reviews file.

// We also want to prevent users from using other urls, this can be done using:

app.use("/", (req, res) => res.status(404).json({error: "Not Found!"}));

// earlier the above line was : app.use("/", (req, res) => res.status(404).json({error: "Not Found!"})); 

// So basically when there is an error by not finding a file this will be the response given to the user.

// We need to connect different files with one another, this can be done using the export command. So when I have written the code below, I will be able to access this file from other files as well.

export default app;