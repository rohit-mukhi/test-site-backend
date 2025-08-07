import dotenv from 'dotenv';
dotenv.config();

// The database code is stored in this file.
import app from "./server.js";
import mongodb from "mongodb";

//The above line is used to import the mongodb libraryof javascript so that accessing mongodb becomes easier.


const MongoClient = mongodb.MongoClient;

// We have created a MongoClient variable to acces this MongoClient feature from mongodb. It is something in-built in mongodb.

const mongo_username = process.env['mongo_username'];

const mongo_password = process.env['mongo_password'];

// Above is how we access environment variables in 

const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.pbpxcf2.mongodb.net/`;

// **Connection is establised successfully when connection string is used directly but not when using environment variables.

// Since it is good practice to not store usernames and passwords in a connection string, hence I have used environment variables. The environment variables are stored locally so systems that have the same envionment variables with the same name will be able to connect to my database. This is a good security feature because, fro hackers to find out your username and password will require your machine and environment variables are really hard to hack and decrpyt.

// The connection string originally had my username and password hardcoded. But using the environment variables has enabled by system a unique entry point.

const port = 8000;

// I have designed my server to run on port number 8000. Learn more about port numbers later.

// Now we will try to connect to the database. It is done using the following function below. The connect() function is used to connect to the database. It accepts two arguements i.e uri (storing the connection string) and an object defining some properties.

// If the connection request ends with an error, we have handled the error in the catch block. The catch block is used to print the error details and exit the process.

// If the connection was successful, then connect() function must return the client variables storing some data. When that happens, we start the server using the app.listen() function. The listen function accepts two arguemnts, i.e, the port number on which the server will run. and we have logged into the console from which port the server is running.

MongoClient.connect(
    uri,
    {
        maxPoolSize: 50, // The maximum number of users allowed to connect at once.
        wtimeoutMS: 2500, // The maximum amount of time in ms that the request can run. After the timeout the could not connect message will appear.
    }).catch(err => {
        console.error(err.stack);
        process.exit(1);
    }).then(async client => {
        app.listen(port, () => {
            console.log(`listening on port ${port}`);
        });
    });

// We also need a route to make this happen. 

