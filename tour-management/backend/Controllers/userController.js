import User from "../models/User.js";

// create new User
const createUser = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();

    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedUser,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again" });
  }
};

// update User
const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedUser.$assertPopulated,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to updated. Try again" });
  }
};

// delete User
const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedUser = await User.findByIdAndDelete(
      id,
      { $set: req.body },
      { new: true }
    );

    res
      .status(200)
      .json({
        success: true,
        message: "Successfully deleted",
        data: deletedUser,
      });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to delete. try again" });
  }
};

// get single User
const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);

    res.status(200).json({
      success: true,
      message: "Successfully retrieved",
      data: userser,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to retrieve. try again" });
  }
};

// get All User
const getAllUser = async (req, res) => {

  try {
    const users = await User.find({})

    res
      .status(200)
      .json({
        success: true,
        message: "Successfully retrieved all data.",
        count: users.length,
        data: users,
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

export {createUser, updateUser, deleteUser, getAllUser, getSingleUser};