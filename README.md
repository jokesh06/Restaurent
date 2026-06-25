# 🍽️ Restaurant Management App — Backend

A production-ready REST API backend built with **Spring Boot**, featuring JWT-based authentication, dual-role authorization, and full order management functionality.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Spring Boot 3.x |
| Security | Spring Security + JWT |
| ORM | Spring Data JPA + Hibernate |
| Database | MySQL |
| Build Tool | Maven |
| Language | Java 17+ |

---

## ✨ Features

- **Dual-role authentication** — Admin and Customer roles with JWT token-based login
- **Menu management** — Admin can add, update, and delete menu items
- **Order processing** — Customers can place orders; Admins can manage order status
- **Cart management** — Add/remove items, update quantities
- **Role-based access control** — Secured endpoints using Spring Security
- **RESTful API design** — Clean layered architecture (Controller → Service → Repository)

---

## 📁 Project Structure

```
src/
├── main/
│   ├── java/
│   │   └── com/restaurant/
│   │       ├── controller/       # REST controllers
│   │       ├── service/          # Business logic
│   │       ├── repository/       # JPA repositories
│   │       ├── model/            # Entity classes
│   │       ├── dto/              # Data Transfer Objects
│   │       ├── security/         # JWT config & filters
│   │       └── config/           # App configuration
│   └── resources/
│       └── application.properties
```

---

## ⚙️ Getting Started

### Prerequisites
- Java 17+
- MySQL 8+
- Maven 3.6+

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/jokesh06/RestauretProject_main_backend.git
cd RestauretProject_main_backend

# 2. Configure database in application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/restaurant_db
spring.datasource.username=your_username
spring.datasource.password=your_password

# 3. Run the application
mvn spring-boot:run
```

The API will start at `http://localhost:8080`

---

## 🔐 API Endpoints

### Auth
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login and get JWT token |

### Menu
| Method | Endpoint | Role |
|---|---|---|
| GET | `/api/menu` | Public |
| POST | `/api/menu/add` | Admin |
| PUT | `/api/menu/update/{id}` | Admin |
| DELETE | `/api/menu/delete/{id}` | Admin |

### Orders
| Method | Endpoint | Role |
|---|---|---|
| POST | `/api/orders/place` | Customer |
| GET | `/api/orders/my-orders` | Customer |
| GET | `/api/orders/all` | Admin |
| PUT | `/api/orders/status/{id}` | Admin |

---

## 🔗 Frontend Repository

The Angular frontend for this project is available here:
👉 [Restaurant Management App — Frontend](https://github.com/jokesh06/Restaurent_angular)

---

## 👨‍💻 Author

**Jokesh Ankeshwarapu**
Java Full Stack Developer | Spring Boot · Angular · Microservices · AWS

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue)](https://www.linkedin.com/in/jokesh-ankeshwarapu-25872b217/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black)](https://github.com/jokesh06)
