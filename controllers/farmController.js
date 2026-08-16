const Farm = require("../models/Farm");

// CREATE FARM
const createFarm = async (req, res) => {
    try {
        const farm = await Farm.create(req.body);

        res.status(201).json({
            success: true,
            message: "Farm added successfully",
            data: farm
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// GET ALL FARMS
const getFarms = async (req, res) => {
    try {
        const farms = await Farm.find();

        res.status(200).json({
            success: true,
            message: "Farm data fetch successfully",
            data: farms
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// GET SINGLE FARM
const getFarmById = async (req, res) => {
    try {
        const farm = await Farm.findById(req.params.id);

        if (!farm) {
            return res.status(404).json({
                success: false,
                message: "Farm not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Farm data fetched successfully",
            data: farm
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// UPDATE FARM
const updateFarm = async (req, res) => {
    try {
        const farm = await Farm.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!farm) {
            return res.status(404).json({
                success: false,
                message: "Farm not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Farm updated successfully",
            data: farm
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// DELETE FARM
const deleteFarm = async (req, res) => {
    try {
        const farm = await Farm.findByIdAndDelete(req.params.id);

        if (!farm) {
            return res.status(404).json({
                success: false,
                message: "Farm not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Farm deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


module.exports = {
    createFarm,
    getFarms,
    getFarmById,
    updateFarm,
    deleteFarm
};