# ⚙️ Backend - Product Management App

This is the backend server for the **Product Management Application**. It provides a RESTful API for managing product data, including creating and retrieving products. The backend is built using Node.js and Express, and it connects to a database to persist data.

## 🛠️ Features

- RESTful API endpoints for product management
- Create and retrieve product entries
- JSON-based request/response structure
- CORS enabled for frontend communication

## 🧰 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** (or your DB of choice)
- **Mongoose** (if using MongoDB)
- **Dotenv** for environment variable management

## 📁 File Structure

```
backend-product-app/
├── controllers/
│   └── productController.js
├── models/
│   └── Product.js
├── routes/
│   └── productRoutes.js
├── config/
│   └── db.js
├── .env
├── server.js
├── package.json
└── README.md
```

## 📦 Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/product-management-backend.git
   cd product-management-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Run the server**
   ```bash
   npm start
   ```

   The backend will be running at:  
   `http://localhost:5000`

## 📡 API Endpoints

| Method | Endpoint          | Description            |
|--------|-------------------|------------------------|
| GET    | /api/products     | Get all products       |
| POST   | /api/products     | Create a new product   |

## 🔄 Connecting with Frontend

Ensure your frontend app makes requests to `http://localhost:5000/api/products` or whichever URL this server runs on.

## 🧪 Testing

_(Optional: Add instructions if using Postman, Jest, or any testing tool.)_

## 👤 Author

- [Laxman](https://github.com/laxman006)

---
