📘 Blog Application – Backend Documentation

Tech: Node.js, Express, MongoDB, Mongoose, JWT
Goal: Learn MongoDB + Node.js by building a real project

1️⃣ Project Overview
Features

User authentication (JWT)

Create / Read / Update / Delete blog posts

Comments on posts

Likes system

Role-based access (Admin / User)

MongoDB aggregation for analytics

2️⃣ Folder Structure (FINAL)
blog-application/
│
├── src/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── User.model.js
│   │   ├── Post.model.js
│   │   └── Comment.model.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── post.controller.js
│   │   └── comment.controller.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── post.routes.js
│   │   └── comment.routes.js
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   └── error.middleware.js
│   ├── utils/
│   │   └── jwt.js
│   └── app.js
│
├── server.js
├── .env
└── README.md

3️⃣ Database Schema Design (VERY IMPORTANT)
🔹 User Schema
{
  name: String,
  email: String,
  password: String,
  role: "user" | "admin",
  createdAt: Date
}

🔹 Post Schema
{
  title: String,
  content: String,
  author: ObjectId (ref: User),
  likes: [ObjectId],
  isDeleted: Boolean,
  createdAt: Date
}

🔹 Comment Schema
{
  postId: ObjectId (ref: Post),
  userId: ObjectId (ref: User),
  comment: String,
  createdAt: Date
}


👉 MongoDB Concepts You Learn Here

ObjectId

Referencing

One-to-many relations

Soft delete

4️⃣ Authentication APIs (STEP 1)
🔐 Register User

POST /api/auth/register

Body

{
  "name": "Tushar",
  "email": "tushar@gmail.com",
  "password": "123456"
}


Concepts

bcrypt hashing

Mongoose validation

Saving document

🔐 Login User

POST /api/auth/login

Response

{
  "token": "JWT_TOKEN"
}


Concepts

JWT creation

Password comparison

Token-based auth

5️⃣ Auth Middleware (STEP 2)
🔒 Protected Routes
Authorization: Bearer <token>


Concepts

Middleware

JWT verification

req.user

6️⃣ Post APIs (CORE LEARNING)
✍️ Create Post

POST /api/posts

{
  "title": "MongoDB Basics",
  "content": "MongoDB is a NoSQL database..."
}


Learn

req.user._id

Mongoose save()

Reference linking

📄 Get All Posts

GET /api/posts?page=1&limit=10

Learn

Pagination

Sorting

Query params

📄 Get Single Post

GET /api/posts/:id

Learn

findById

Error handling

✏️ Update Post

PUT /api/posts/:id

Rule

Only author can update

Learn

Authorization logic

Ownership check

❌ Delete Post (Soft Delete)

DELETE /api/posts/:id

isDeleted: true


Learn

Soft delete pattern

Data safety

7️⃣ Like System (IMPORTANT MONGO CONCEPT)
❤️ Like / Unlike Post

POST /api/posts/:id/like

Logic

If userId exists → remove

Else → add

Learn

$push

$pull

Atomic operations

8️⃣ Comment APIs
💬 Add Comment

POST /api/comments/:postId

{
  "comment": "Great blog!"
}


Learn

Referencing

One-to-many design

💬 Get Comments

GET /api/comments/:postId

Learn

Filtering

Population

9️⃣ MongoDB Populate (VERY IMPORTANT)
Post.find()
  .populate("author", "name email")


Learn

ref

Join-like behavior

Performance tradeoffs

🔟 Aggregation Pipeline (ADVANCED)
📊 Top Blogs by Likes

GET /api/posts/top

[
  { $project: { title: 1, likesCount: { $size: "$likes" } } },
  { $sort: { likesCount: -1 } }
]


Learn

$project

$size

$sort

1️⃣1️⃣ Security Topics

Input validation

Rate limiting

Helmet

MongoDB Atlas IP whitelisting

Environment variables

1️⃣2️⃣ Learning Order (FOLLOW THIS)
Step	Topic
1	Express + Routes
2	MongoDB CRUD
3	Mongoose Schema
4	Auth + JWT
5	Relations
6	Populate
7	Aggregation
8	Security
🧠 What You’ll Be Confident In

✔ MongoDB schema design
✔ Aggregation pipelines
✔ Real backend architecture
✔ Interview-ready MongoDB knowledge

🔥 NEXT STEP (IMPORTANT)

If you want, I can:

Start Day-1 coding (DB connection + User model)

Create Postman collection

Explain each API with MongoDB shell queries

Give sample data to practice aggregation

👉 Tell me YES and say “Start Day 1”, and we’ll build this project step by step together 🚀

details prd of the project so i can give at as documentation of the file

Perfect 👍
Below is a FULL, PROFESSIONAL PRD (Product Requirements Document) for your Blog Application.
You can directly save this as PRD.md or README.md in your project and use it as official documentation.

This PRD is written in a real-company style, but beginner-friendly, so while building you’ll learn MongoDB + Node.js step by step.

📘 Product Requirements Document (PRD)
Project Name: Blog Application (Backend)
1. 📌 Purpose of the Document

This document defines the functional, technical, and learning requirements of the Blog Application backend.
It serves as:

A single source of truth

A learning guide for Node.js & MongoDB

A reference document for collaborators

2. 🎯 Project Objective

The goal of this project is to learn and implement MongoDB and Node.js concepts by building a real-world blog backend with:

Clean architecture

Proper schema design

Secure authentication

Scalable APIs

3. 👥 Target Users
User Type	Description
Guest	Can read public blog posts
Registered User	Can create posts, comment, like
Admin	Can manage all posts and users
4. 🧠 Learning Goals (VERY IMPORTANT)

By completing this project, developers will learn:

Node.js

Express server setup

Middleware usage

Error handling

REST API structure

MongoDB

Collections & documents

ObjectId & references

Embedded vs referenced schemas

Indexing

Aggregation pipelines

Mongoose

Schema & model creation

Validation

Populate

Middleware (pre/post)

Atomic updates

5. 🏗️ Tech Stack
Layer	Technology
Runtime	Node.js
Framework	Express.js
Database	MongoDB (MongoDB Atlas)
ODM	Mongoose
Auth	JWT
Security	bcrypt, helmet
API Type	REST
6. 🗂️ High-Level Architecture
Client (Postman / Frontend)
        |
        v
   Express Routes
        |
        v
   Controllers
        |
        v
   Services / Models
        |
        v
     MongoDB

7. 📂 Folder Structure (Finalized)
blog-application/
│
├── src/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── User.model.js
│   │   ├── Post.model.js
│   │   └── Comment.model.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── post.controller.js
│   │   └── comment.controller.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── post.routes.js
│   │   └── comment.routes.js
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   └── error.middleware.js
│   ├── utils/
│   │   └── jwt.js
│   └── app.js
│
├── server.js
├── .env
└── PRD.md

8. 📊 Database Design
8.1 User Collection

Purpose: Store authentication and user info

{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  role: "user" | "admin",
  createdAt: Date
}


Concepts Learned

Unique indexes

Password hashing

Role-based access

8.2 Post Collection

Purpose: Store blog posts

{
  _id: ObjectId,
  title: String,
  content: String,
  author: ObjectId (ref: User),
  likes: [ObjectId],
  isDeleted: Boolean,
  createdAt: Date
}


Concepts Learned

Referencing

Soft delete

Array operations

Ownership logic

8.3 Comment Collection

Purpose: Store comments on posts

{
  _id: ObjectId,
  postId: ObjectId (ref: Post),
  userId: ObjectId (ref: User),
  comment: String,
  createdAt: Date
}


Concepts Learned

One-to-many relationships

Filtering queries

9. 🔐 Authentication & Authorization
Authentication

JWT-based authentication

Token sent via Authorization header

Authorization: Bearer <token>

Authorization Rules
Action	Allowed
Create post	Logged-in user
Edit post	Post author
Delete post	Author or Admin
View posts	Public
10. 🔌 API Endpoints
10.1 Auth APIs
Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login user
10.2 Post APIs
Method	Endpoint	Description
POST	/api/posts	Create post
GET	/api/posts	Get all posts
GET	/api/posts/:id	Get single post
PUT	/api/posts/:id	Update post
DELETE	/api/posts/:id	Soft delete
POST	/api/posts/:id/like	Like / Unlike
10.3 Comment APIs
Method	Endpoint	Description
POST	/api/comments/:postId	Add comment
GET	/api/comments/:postId	Get comments
11. 📈 Aggregation & Analytics
Example Use Cases

Top liked posts

Monthly post count

Most active users

Sample Aggregation
[
  { $project: { title: 1, likesCount: { $size: "$likes" } } },
  { $sort: { likesCount: -1 } }
]


Concepts Learned

$project

$group

$sort

$lookup

12. 🔒 Security Requirements

Password hashing (bcrypt)

JWT expiry

Rate limiting

Helmet headers

Input validation

MongoDB IP whitelisting

13. ❌ Error Handling

Standard error format:

{
  "success": false,
  "message": "Error description"
}

14. 🚀 Development Phases
Phase	Topics
Phase 1	Express + MongoDB connection
Phase 2	User schema & auth
Phase 3	Post CRUD
Phase 4	Relations & populate
Phase 5	Aggregation
Phase 6	Security & optimization
15. ✅ Success Criteria

All APIs working

Clean schema design

Secure authentication

Aggregation implemented

Code understandable for beginners

16. 📎 Future Enhancements

Tags & categories

Image upload

Admin dashboard

Caching

Full-text search