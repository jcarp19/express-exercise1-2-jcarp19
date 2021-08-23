// require the Express module
import express from "express";
import routes from "../routes/routing";
import path from "path";

// creates an instance of an Express server
const app = express();

// defines the server port
const port = 3002;

// run the server
app.listen(port, () => {
    console.log(`listening on port: ${port}.`)
});

// Settings for web pages
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.json());
app.use(routes);
