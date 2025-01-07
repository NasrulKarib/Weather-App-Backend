# Weather-App-Backend

This is a backend service built using [NestJS](https://nestjs.com/) and MongoDB for fetching and managing weather data. The service is deployed and includes Swagger documentation for easy API interaction.

## Features
- Fetch weather data for cities from the database.
- Swagger integration for API documentation.
- CORS enabled for frontend-backend interaction.

## Table of Contents
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Swagger Documentation](#swagger-documentation)
- [Deployment](#deployment)
---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/NasrulKarib/Weather-App-Backend.git
   cd Weather-App-Backend
   
2. Install dependencies
   ```bash
   npm install
   ```

3. Build the project
   ```bash
   npm run build
   ```
4. Run the project
   ```bash
   npm start
   ```
   
## Environment Variables
Create a `.env` file in the root directory and configure the following variables:
  ```plaintext
DB=<your-mongodb-username>           # MongoDB username
PASS=<your-mongodb-password>         # MongoDB password
HOST=<frontend-url>                  # Frontend URL (e.g., https://your-frontend-url.com)
PORT=3000 
  ```

## Usage
### Start the backend:
  ```bash
  npm start
  ```
### Access Swagger documentation at:
  ```bash
  http://localhost:3000/api
  ```
## API Endpoints

### GET `/weather/:cityName`
Fetch weather information for a specific city.
#### Parameter:
- `cityName`(string): The name of the city
#### Responses:
- 200: Returns weather data for the specified city. Example response:
  ```json
  {
  "cityName": "Kolkata",
  "temperature": 27.29,
  "feelsLike": 26.49,
  "pressure": 1011,
  "condition": "Clear",
  "humidity": 27,
  "windSpeed": 1.18
  }
  ```
- 404: City not found. Example response:
  ```json
  {
  "message": "City not found"
  }
  ```

## Swagger Documentation
The API is documented using Swagger. To access the Swagger documentation, start the backend and visit the following URL:
```bash
http://localhost:3000/api
```
## Deployment
The backend is deployed and accessible at the following URL:
- #### Backend API URL : ` https://weather-app-backend-weld-theta.vercel.app/`
