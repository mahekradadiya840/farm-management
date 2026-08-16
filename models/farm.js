const mongoose = require("mongoose");

const farmSchema = new mongoose.Schema(
    {
        farmName: {
            type: String,
            required: true
        },

        location: {
            type: String,
            required: true
        },

        area: {
            type: Number,
            required: true
        },

        areaUnit: {
            type: String,
            required: true
        },

        soilType: {
            type: String,
            required: true
        },

        irrigationType: {
            type: String,
            required: true
        },

        latitude: {
            type: Number
        },

        longitude: {
            type: Number
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Farm", farmSchema);