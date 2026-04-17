# 🧺 Mini Laundry Order Management System

## 📌 Overview

This is a lightweight laundry order management system built using an AI-first approach.
It allows dry cleaning businesses to manage orders, track status, and monitor basic analytics.

---

## 🚀 Features

### ✅ Order Management

* Create new orders
* Auto-generate unique order ID
* Calculate total bill automatically

### ✅ Status Tracking

* Update order status:

  * RECEIVED
  * PROCESSING
  * READY
  * DELIVERED

### ✅ Order Viewing

* View all orders
* Search by customer name or phone
* Filter by status

### ✅ Dashboard

* Total orders
* Total revenue
* Orders per status

---

## 🛠️ Tech Stack

* Frontend: React.js
* Backend: Node.js + Express
* Database: In-memory (for simplicity & speed)
* API Testing: Thunder Client

---

## ⚙️ Setup Instructions

### 🔹 Backend

```bash
cd server
npm install
node index.js
```

Runs on:

```
http://localhost:5000
```

---

### 🔹 Frontend

```bash
cd client
npm install
npm start
```

Runs on:

```
http://localhost:3000
```

---

## 📡 API Endpoints

| Method | Endpoint          | Description         |
| ------ | ----------------- | ------------------- |
| POST   | /api/orders       | Create order        |
| GET    | /api/orders       | Get all orders      |
| PUT    | /api/orders/:id   | Update order status |
| GET    | /api/orders/stats | Dashboard data      |

---

## 🤖 AI Usage Report (Important)

### Tools Used

* ChatGPT (for API structure, debugging, and UI logic)

---

### Sample Prompts

* "Build Express API for order management system"
* "Create React UI for CRUD operations"

---

### Where AI Helped

* Backend API structure
* Route handling
* Frontend basic UI

---

### What AI Got Wrong

* Initial structure lacked filtering
* No dashboard logic

---

### Improvements Made

* Added filtering & search
* Implemented dashboard API
* Improved UI and user experience

---

## ⚖️ Tradeoffs

* Used in-memory database (data resets on restart)
* Basic UI instead of complex design (focused on functionality)

---

## 🔮 Future Improvements

* Add authentication
* Use MongoDB for persistent storage
* Deploy full-stack app
* Improve UI with modern design

---

## 📷 Screenshots

### UI
![UI](./screenshots/ui1.png)

### Order Created
![Order](./screenshots/order1.png)

### Order Status
![Order](./screenshots/orderstatus.png)

### API Response
![API](./screenshots/api.png)

---

## 👨‍💻 Author

Azlan Ul Haque
