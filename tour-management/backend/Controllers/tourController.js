import Tour from "../models/Tour.js";

// create new tour
const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();

    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedTour,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again" });
  }
};

// update tour
const updateTour = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedTour.$assertPopulated,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to updated. Try again" });
  }
};

// delete tour
const deleteTour = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedTour = await Tour.findByIdAndDelete(
      id,
      { $set: req.body },
      { new: true }
    );

    res
      .status(200)
      .json({
        success: true,
        message: "Successfully deleted",
        data: deletedTour,
      });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to delete. try again" });
  }
};

// get single tour
const getSingleTour = async (req, res) => {
  const id = req.params.id;

  try {
    const tour = await Tour.findById(id).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successfully retrieved",
      data: tour,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to retrieve. try again" });
  }
};

// get All tour
const getAllTour = async (req, res) => {

  // for pagination
  const page = parseInt(req.query.page);

  try {
    const tours = await Tour.find({}).populate("reviews")
      .skip(page * 8)
      .limit(8);

    res
      .status(200)
      .json({
        success: true,
        message: "Successfully retrieved all data.",
        count: tours.length,
        data: tours,
      });
  } catch (error) {
    res
      .status(404)
      .json({
        success: false,
        message: "Failed to  retrieve all data. Try again",
      });
  }
};

// get tour by search
const getTourBySearch = async (req, res) => {
  // here "i" means case sensitive
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    // gte means greater than equal
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successfull",
      data: tours,
    });
  } catch (error) {
    res
      .status(404)
      .json({
        success: false,
        message: "not found",
      });
  }
};

const getFeaturedTours = async (req, res) => {

  try {
    const tours = await Tour.find({featured: true}).populate("reviews")
    .limit(8);

    res.status(200).json({
      success: true,
      message: "Successfull",
      data: tours,
    });
    
  } catch (error) {
    res
      .status(404)
      .json({
        success: false,
        message: "not found",
      });
  }
}

const getTourCount = async (req, res) => {

  try {
    
    const tourCount = await Tour.estimatedDocumentCount()

    res.status(200).json({success: true, data: tourCount});


  } catch (error) {
        res.status(500).json({success: false, message: "failed to fetch"});

  }
}

export { createTour, updateTour, deleteTour, getSingleTour, getTourCount, getAllTour, getTourBySearch, getFeaturedTours };
