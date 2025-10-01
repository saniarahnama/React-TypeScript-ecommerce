# ⏱️ React Countdown Timer & Click Counter App
A simple and interactive e-commerce project built with React, TypeScript, Context API, and localStorage.This app features product listing, product details, a shopping cart, and user-specific views.


---

## 🎯 Features

- 🧑‍💻 User login using Customer.json file data
- 🏬 View product lists for Mens, Womens, or All Clothes
- 📄 Product detail page with Add to Cart functionality
- 🛒 Shopping cart with:
  - Increase/Decrease product quantity
  - Remove products from cart
  - Display total price
  - "Pay" button triggers a confirmation alert

- 💾 Persist user data using localStorage
- 🌐 Global state management using React Context

---

## 🧪 Demo

![alt text](demo.png)

---

## 🛠️ Technologies Used

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material-UI](https://mui.com/)
- LocalStorage for persisting user data

---

## 📁 Project Structure

```
src/
├── components/
│   ├── NavBar.tsx            # Navigation bar with links to Mens, Womens, Clothes, and Cart
│   ├── Carde.tsx             # Product card component
│   └── ProtectedRoute.tsx    # Route protection component
├── context/
│   └── CartContext.tsx       # Context API for managing cart and user data
├── data/
│   ├── Customer.json         # Customer information
│   └── Products.json         # Products information
├── hooks/
│   └── useCart.ts            # Custom hook for cart operations
├── interfaces/
│   ├── customer.ts           # TypeScript interface for customer
│   ├── product.ts            # TypeScript interface for product
│   └── protectedRouteType.ts # TypeScript interface for route protection
├── pages/
│   ├── Login.tsx             # Login page
│   ├── Mens.tsx              # Mens product listing
│   ├── Womens.tsx            # Womens product listing
│   ├── ProductInfo.tsx       # Product detail page
│   ├── ProductList.tsx       # All products listing
│   └── ShoppingList.tsx      # Shopping cart page
├── App.tsx                   # Main application component
├── App.css                   # Custom styling
└── index.tsx                 # Entry point

```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/saniarahnama/ecommerce-website
cd ecommerce-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the project

```bash
npm run dev
```

---

## 💡 Possible Improvements

- Add a sound or animation when timer ends
- Display a message like "Time's up!" when countdown finishes
- Convert to a mobile-friendly version (React Native or PWA)

---

## 👨‍💻 Author

Created by [sania rahnama]  
GitHub: [@saniarahnama](https://github.com/saniarahnama)

---
