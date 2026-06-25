# 🍽️ Restaurant Management App — Frontend

A responsive full-stack frontend built with **Angular**, featuring dual-role login, menu browsing, cart management, and real-time order tracking.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Angular 15+ |
| Language | TypeScript |
| Styling | HTML5 + CSS3 |
| HTTP Client | Angular HttpClient |
| Routing | Angular Router |
| Auth Guard | Route Guards (CanActivate) |
| State | Component-based + Services |

---

## ✨ Features

- **Dual-role login** — Separate dashboards for Admin and Customer
- **Menu browsing** — Customers can view and filter available menu items
- **Cart management** — Add/remove items, update quantities before checkout
- **Order placement** — Seamless order flow with confirmation
- **Admin dashboard** — Manage menu items and track all orders
- **JWT integration** — Token stored and sent with every secured API request
- **Route Guards** — Protected routes based on user role
- **Responsive UI** — Clean layout across desktop and mobile

---

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── login/              # Login page
│   │   ├── register/           # Register page
│   │   ├── menu/               # Menu listing
│   │   ├── cart/               # Cart management
│   │   ├── orders/             # Order history
│   │   └── admin/              # Admin dashboard
│   ├── services/
│   │   ├── auth.service.ts     # Login, token management
│   │   ├── menu.service.ts     # Menu API calls
│   │   └── order.service.ts    # Order API calls
│   ├── guards/
│   │   └── auth.guard.ts       # Route protection
│   ├── models/                 # TypeScript interfaces
│   └── app-routing.module.ts   # Route configuration
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js 16+
- Angular CLI (`npm install -g @angular/cli`)
- Backend API running at `http://localhost:8080`

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/jokesh06/Restaurent_angular.git
cd Restaurent_angular

# 2. Install dependencies
npm install

# 3. Start the development server
ng serve
```

The app will run at `http://localhost:4200`

---

## 🔗 Backend Repository

The Spring Boot backend API for this project is available here:
👉 [Restaurant Management App — Backend](https://github.com/jokesh06/RestauretProject_main_backend)

---

## 📸 App Flow

```
Login / Register
      ↓
  Role Check
  ↙        ↘
Admin      Customer
  ↓            ↓
Manage       Browse Menu
Menu          ↓
& Orders    Add to Cart
              ↓
           Place Order
              ↓
          Order History
```

---

## 👨‍💻 Author

**Jokesh Ankeshwarapu**
Java Full Stack Developer | Spring Boot · Angular · Microservices · AWS

https://www.linkedin.com/in/jokesh-ankeshwarapu-25872b217/
https://github.com/jokesh06
