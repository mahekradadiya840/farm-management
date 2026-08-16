const express = require("express");

const router = express.Router();

const {
    createFarm,
    getFarms,
    getFarmById,
    updateFarm,
    deleteFarm
} = require("../controllers/farmController");


// POST
router.post("/", createFarm);

// GET ALL
router.get("/", getFarms);

// GET SINGLE
router.get("/:id", getFarmById);

// UPDATE
router.put("/:id", updateFarm);

// DELETE
router.delete("/:id", deleteFarm);


module.exports = router;