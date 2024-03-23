import express from "express";
import {createTour,  deleteTour, getAllTour, getFeaturedTours, getSingleTour, getTourBySearch, getTourCount, updateTour } from "../Controllers/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// create new tour route 
router.post("/", verifyAdmin, createTour);

// update tour route 
router.put("/:id", verifyAdmin ,updateTour);

// delete tour route 
router.delete("/:id", verifyAdmin, deleteTour);

// get single tour route 
router.get("/:id", getSingleTour);

// get all tour route 
router.get("/", getAllTour);

// get tour by search 
router.get("/search/getTourBySearch", getTourBySearch);

// get featured by tour 
router.get("/search/getFeaturedTours", getFeaturedTours)

// get tour count 
router.get("/search/getTourCount", getTourCount);

export default router;