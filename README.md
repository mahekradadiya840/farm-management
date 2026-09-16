# Farm Management REST API

A simple **Farm Management REST API** built with **Node.js, Express.js, and MongoDB using Mongoose**.

This API allows users to create, view, update, and delete farm records. It also includes a seed script for inserting sample farm data into MongoDB.

---

## Features

* Create a new farm
* Get all farms
* Get a single farm by ID
* Update farm information
* Delete a farm
* MongoDB database integration using Mongoose
* Request validation using Mongoose schemas
* Seed database with sample farm data
* RESTful API structure
* Environment variable configuration

---

##  Technologies Used

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **dotenv**

---

##  Project Structure

```text
farm-management/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── farmController.js
│
├── models/
│   └── Farm.js
│
├── routes/
│   └── farmRoutes.js
│
├── seed.js
├── server.js
├── .env
├── package.json
└── README.md
```

---

##  Prerequisites

Before running the project, make sure you have installed:

* [Node.js](https://nodejs.org/)
* MongoDB
* npm

You can verify Node.js and npm installation with:

```bash
node -v
npm -v
```

Check that MongoDB is running on your system before starting the API.

---

##  Installation

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

Navigate into the project directory:

```bash
cd farm-management
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGO_URL=mongodb://localhost:27017/farm_db
```

### 4. Start the server

For normal execution:

```bash
node server.js
```

The server will start at:

```text
http://localhost:3000
```

You should see:

```text
MongoDB Connected Successfully
Server Running on Port 3000
```

---

#  API Endpoints

The base URL is:

```text
http://localhost:3000/api/farms
```

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| POST   | `/api/farms`     | Create a new farm |
| GET    | `/api/farms`     | Get all farms     |
| GET    | `/api/farms/:id` | Get a farm by ID  |
| PUT    | `/api/farms/:id` | Update a farm     |
| DELETE | `/api/farms/:id` | Delete a farm     |

---

# 1. Create Farm

### Request

```http
POST /api/farms
```

### Example JSON Body

```json
{
  "farmName": "Green Valley Farm",
  "location": "Surat",
  "area": 10,
  "areaUnit": "Acre",
  "soilType": "Black Soil",
  "irrigationType": "Drip",
  "latitude": 21.1702,
  "longitude": 72.8311
}
```

### Example Response

```json
{
  "success": true,
  "message": "Farm data added successfully",
  "data": {
    "_id": "64f123456789abcdef123456",
    "farmName": "Green Valley Farm",
    "location": "Surat",
    "area": 10,
    "areaUnit": "Acre",
    "soilType": "Black Soil",
    "irrigationType": "Drip",
    "latitude": 21.1702,
    "longitude": 72.8311,
    "createdAt": "2026-09-16T05:00:00.000Z",
    "updatedAt": "2026-09-16T05:00:00.000Z"
  }
}
```

---

# 2. Get All Farms

### Request

```http
GET /api/farms
```

### Example Response

```json
{
  "success": true,
  "message": "Farm data fetch successfully",
  "data": [
    {
      "_id": "64f123456789abcdef123456",
      "farmName": "Green Valley Farm",
      "location": "Surat",
      "area": 10,
      "areaUnit": "Acre",
      "soilType": "Black Soil",
      "irrigationType": "Drip",
      "latitude": 21.1702,
      "longitude": 72.8311
    }
  ]
}
```

---

# 3. Get Farm By ID

### Request

```http
GET /api/farms/:id
```

### Example

```http
GET /api/farms/64f123456789abcdef123456
```

### Successful Response

```json
{
  "success": true,
  "message": "Farm data fetched successfully",
  "data": {
    "_id": "64f123456789abcdef123456",
    "farmName": "Green Valley Farm",
    "location": "Surat",
    "area": 10,
    "areaUnit": "Acre",
    "soilType": "Black Soil",
    "irrigationType": "Drip",
    "latitude": 21.1702,
    "longitude": 72.8311
  }
}
```

### Farm Not Found

```json
{
  "success": false,
  "message": "Farm not found"
}
```

---

# 4. Update Farm

### Request

```http
PUT /api/farms/:id
```

### Example

```http
PUT /api/farms/64f123456789abcdef123456
```

### Example JSON Body

```json
{
  "farmName": "Updated Green Valley Farm",
  "area": 12,
  "irrigationType": "Sprinkler"
}
```

### Example Response

```json
{
  "success": true,
  "message": "Farm updated successfully",
  "data": {
    "_id": "64f123456789abcdef123456",
    "farmName": "Updated Green Valley Farm",
    "location": "Surat",
    "area": 12,
    "areaUnit": "Acre",
    "soilType": "Black Soil",
    "irrigationType": "Sprinkler"
  }
}
```

---

# 5. Delete Farm

### Request

```http
DELETE /api/farms/:id
```

### Example

```http
DELETE /api/farms/64f123456789abcdef123456
```

### Example Response

```json
{
  "success": true,
  "message": "Farm deleted successfully"
}
```

---

# Farm Data Model

Each farm contains the following fields:

| Field            | Type   | Required | Description             |
| ---------------- | ------ | -------- | ----------------------- |
| `farmName`       | String | Yes      | Name of the farm        |
| `location`       | String | Yes      | Farm location           |
| `area`           | Number | Yes      | Farm area               |
| `areaUnit`       | String | Yes      | Unit of area, e.g. Acre |
| `soilType`       | String | Yes      | Type of soil            |
| `irrigationType` | String | Yes      | Type of irrigation      |
| `latitude`       | Number | No       | Geographic latitude     |
| `longitude`      | Number | No       | Geographic longitude    |
| `createdAt`      | Date   | Auto     | Record creation time    |
| `updatedAt`      | Date   | Auto     | Last update time        |

---

#  Seed Database

The project includes a `seed.js` file containing sample farm data.

The seed script:

1. Connects to MongoDB.
2. Deletes existing farm records.
3. Inserts sample farm records.
4. Closes the process.

### Run the seed script

```bash
node seed.js
```

You should see:

```text
MongoDB Connected
Seed Data Inserted Successfully
```

### Sample Farms

The seed file contains farms from:

* Surat
* Navsari
* Bharuch
* Vadodara
* Anand

---

# 🧪 Testing the API

You can test the API using tools such as:

* Postman
* Thunder Client
* Insomnia
* cURL

### Example cURL request

Get all farms:

```bash
curl http://localhost:3000/api/farms
```

Create a farm:

```bash
curl -X POST http://localhost:3000/api/farms \
-H "Content-Type: application/json" \
-d '{
  "farmName": "New Farm",
  "location": "Surat",
  "area": 10,
  "areaUnit": "Acre",
  "soilType": "Black Soil",
  "irrigationType": "Drip",
  "latitude": 21.1702,
  "longitude": 72.8311
}'
```

---

#  Environment Variables

The application uses environment variables through `dotenv`.

Create a `.env` file:

```env
PORT=3000
MONGO_URL=mongodb://localhost:27017/farm_db
```

> Do not commit your `.env` file to GitHub if it contains sensitive credentials.

Add this to `.gitignore`:

```text
node_modules/
.env
```

---

#  API Flow

```text
Client
  │
  ▼
Express Server
  │
  ▼
Farm Routes
  │
  ▼
Farm Controller
  │
  ▼
Mongoose Model
  │
  ▼
MongoDB
```

---

#  Dependencies

Install the required packages with:

```bash
npm install express mongoose dotenv
```

For development, you can optionally install Nodemon:

```bash
npm install --save-dev nodemon
```

Then add a development script to `package.json`:

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "seed": "node seed.js"
  }
}
```

You can then run:

```bash
npm run dev
```

or seed the database with:

```bash
npm run seed
```

---

#  Error Handling

The API returns JSON responses containing:

```json
{
  "success": false,
  "message": "Error message"
}
```

For example, if a farm does not exist:

```json
{
  "success": false,
  "message": "Farm not found"
}
```

---

#  Future Improvements

Possible improvements for this project include:

* User authentication and authorization
* Farm search and filtering
* Pagination
* Crop management
* Farmer management
* Farm image uploads
* Weather API integration
* Google Maps integration
* GeoJSON/location-based searching
* Advanced validation
* Centralized error-handling middleware
* API documentation using Swagger
* Unit and integration tests
* Production MongoDB configuration

---

#  Author

**Mahek**

Farm Management REST API built using Node.js, Express.js, MongoDB, and Mongoose.

---

## License

This project is available for educational and development purposes.
