import express from "express";
const router = express.Router();

import * as blogControllers from "../App/Controllers/blogControllers.js";

//Create routes
router.post("/createBlogs", blogControllers.createBlogs);

//Read routes
router.get("/readBlogs", blogControllers.readBlogs);

//Update routes
router.put("/updateBlogs", blogControllers.updateBlogs);

//Delete routes
router.delete("/deleteBlogs", blogControllers.deleteBlogs);

export default router;
