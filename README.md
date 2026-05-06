# MongoDB
Here I will write my code and notes of mongo DB throughout my learning and project development Journey.


# 🧠 First: Open MongoDB Shell

mongosh

Now you’re inside MongoDB terminal.

# 📦 1. Database Commands

### 👉 Show all databases

show dbs

### 👉 Use / Create a database


use myDB

👉 If it doesn’t exist → MongoDB will create it when you insert data.

### 👉 Check current database

db


# 📁 2. Collection Commands

(Think: collections = tables)

### 👉 Show collections

show collections

### 👉 Create collection


db.createCollection("users")


### 👉 Drop collection

db.users.drop()

# 📄 3. Insert Data

### 👉 Insert one document


db.users.insertOne({
    name: "Nik",
    age: 21
})

### 👉 Insert multiple

db.users.insertMany([
    { name: "A", age: 20 },
    { name: "B", age: 25 }
])

# 🔍 4. Read Data (VERY IMPORTANT)

### 👉 Get all data

db.users.find()


### 👉 Pretty format

db.users.find().pretty()

### 👉 Filter data


db.users.find({ age: 21 })

### 👉 Find one


db.users.findOne({ name: "Nik" })


# ✏️ 5. Update Data


### 👉 Update one


db.users.updateOne(
    { name: "Nik" },
    { $set: { age: 22 } }
)


### 👉 Update many


db.users.updateMany(
    {},
    { $set: { status: "active" } }
)


# ❌ 6. Delete Data

### 👉 Delete one


db.users.deleteOne({ name: "Nik" })


### 👉 Delete many


db.users.deleteMany({ age: { $lt: 25 } })


# 🔥 7. Advanced (Important for real projects)


### 👉 Count documents


db.users.countDocuments()


### 👉 Sort


db.users.find().sort({ age: 1 })   // ascending
db.users.find().sort({ age: -1 })  // descending


### 👉 Limit

db.users.find().limit(2)


### 👉 Projection (select fields)


db.users.find({}, { name: 1, _id: 0 })

# 🧠 Key Concept You Should Notice

MongoDB uses:

* JSON-like structure → called **BSON**
* Query operators like:

  * `$set`
  * `$lt`, `$gt`
  * `$in`


# ⚡ Mini Practice (DO THIS)

In `mongosh`, try:


use testDB

db.users.insertMany([
    { name: "Nik", age: 21 },
    { name: "Sam", age: 25 },
    { name: "Alex", age: 19 }
])

db.users.find({ age: { $gt: 20 } })

