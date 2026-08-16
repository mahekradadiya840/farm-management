const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Farm = require("./models/Farm");

dotenv.config();

const seedData = async () => {

    try {

        await mongoose.connect(process.env.MONGO_URL);

        console.log("MongoDB Connected");


        // OLD DATA DELETE
        await Farm.deleteMany({});


        // FARM DATA
        const farms = [

            {
                farmName: "Green Valley Farm",
                location: "Surat",
                area: 10,
                areaUnit: "Acre",
                soilType: "Black Soil",
                irrigationType: "Drip",
                latitude: 21.1702,
                longitude: 72.8311
            },

            {
                farmName: "Fresh Crop Farm",
                location: "Navsari",
                area: 15,
                areaUnit: "Acre",
                soilType: "Alluvial Soil",
                irrigationType: "Canal",
                latitude: 20.9467,
                longitude: 72.9520
            },

            {
                farmName: "Organic Farm",
                location: "Bharuch",
                area: 8,
                areaUnit: "Acre",
                soilType: "Loamy Soil",
                irrigationType: "Drip",
                latitude: 21.7051,
                longitude: 72.9959
            },

            {
                farmName: "Golden Harvest",
                location: "Vadodara",
                area: 20,
                areaUnit: "Acre",
                soilType: "Black Soil",
                irrigationType: "Sprinkler",
                latitude: 22.3072,
                longitude: 73.1812
            },

            {
                farmName: "Green Earth Farm",
                location: "Anand",
                area: 12,
                areaUnit: "Acre",
                soilType: "Sandy Soil",
                irrigationType: "Borewell",
                latitude: 22.5645,
                longitude: 72.9289
            }

        ];


        await Farm.insertMany(farms);


        console.log("Seed Data Inserted Successfully");

        process.exit();

    } catch (error) {

        console.log("Seed Error:", error.message);

        process.exit(1);
    }
};

seedData();