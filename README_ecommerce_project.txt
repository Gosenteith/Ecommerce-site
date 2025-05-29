
🛒 E-commerce Marketplace Backend (Node.js + MongoDB)

This is a student project for a NoSQL-based backend e-commerce system using Node.js, Express, MongoDB, and EJS for rendering a simple admin dashboard.

It includes features for:
- Managing products (add, edit, delete)
- User registration
- Order placement (with product snapshot)
- Product review system
- Clean dashboard-style frontend

📁 Project Structure

ecommerce-site/
├── models/            # Mongoose models: Product, User, Order, Review
├── routes/            # Express routes (API endpoints)
├── public/            # Static assets (styles.css)
├── views/             # EJS templates for frontend
├── .env               # MongoDB URI and PORT
├── server.js          # Main application file
└── README.md

🚀 How to Run the Project

✅ 1. Clone the Repository

git clone                   please put github link
cd ecommerce-site

📦 2. Install Dependencies

Make sure you have Node.js and npm installed. Then run:

npm install

This installs:
- express
- mongoose
- dotenv
- ejs

▶️ 3. Run the App

node server.js

You should see:

✅ MongoDB connected
🚀 Server running at http://localhost:3000

🌐 4. Open in Your Browser

Visit:

http://localhost:3000/

You’ll see a dashboard where you can:
- View/add/edit/delete products
- Register users
- Place orders
- Submit product reviews
- View all orders and reviews

📌 Reminders

- MongoDB must be running (locally or via Atlas)
- Make sure your IP is whitelisted in MongoDB Atlas if using cloud

📚 Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- EJS templating
- Faker.js for mock data

💡 Future Improvements (Optional)

- User login + authentication
- Role-based access (Admin vs Customer)
- API version (REST/GraphQL)
- Product filters and search bar
- Pagination or category-based browsing
- Better layout/css

👨‍💻 Author

Zirong Luo 600287
Database Development 371/381  
South Africa · 2025
