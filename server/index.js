import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import bodyParser from "body-parser";

import Connection from "./database/db.js";
import DefaultData from './default_data.js';
import router from "./routes/route.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/', router);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});

DefaultData();
