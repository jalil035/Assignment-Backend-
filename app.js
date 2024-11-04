//Import Application all Packages
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import hpp from "hpp";
import * as path from "path";
import router from "./Routes/api.js";


import {
  MONGODB_CONNECTION,
  PORT,
  MAX_JSON_SIZE,
  URL_ENCODED,
  REQUEST_LIMIT_TIME,
  REQUEST_LIMIT_NUMBER,
  WEB_CACHE,
} from "./App/Config/config.js";

const app = express();

//Global Application Middleware
app.use(cors());
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: false }));
app.use(hpp());
app.use(helmet());
app.use(cookieParser());

//Rate Limit
const limit = rateLimit({
  windowsMs: REQUEST_LIMIT_TIME,
  max: REQUEST_LIMIT_NUMBER,
});
app.use(limit);

//Web Caching
app.set("etag", WEB_CACHE);

// MongoDB Connection
/* You Need to Connect MongoDB Here
 */

//Set API Routes
app.use("/api", router);

//Set Application Storage
app.use(express.static("storage"));

//Run Your Express Backend Project

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Serve static files from the React app

