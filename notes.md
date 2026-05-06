
# 🧠 First: Open MongoDB Shell

```
mongosh
```

Now you’re inside MongoDB terminal.

---

# 📦 1. Database Commands

### 👉 Show all databases

```js
show dbs
```

---

### 👉 Use / Create a database

```js
use myDB
```

👉 If it doesn’t exist → MongoDB will create it when you insert data.

---

### 👉 Check current database

```js
db
```

---

# 📁 2. Collection Commands

(Think: collections = tables)

---

### 👉 Show collections

```js
show collections
```

---

### 👉 Create collection

```js
db.createCollection("users")
```

---

### 👉 Drop collection

```js
db.users.drop()
```

---

# 📄 3. Insert Data

---

### 👉 Insert one document

```js
db.users.insertOne({
    name: "Nik",
    age: 21
})
```

---

### 👉 Insert multiple

```js
db.users.insertMany([
    { name: "A", age: 20 },
    { name: "B", age: 25 }
])
```

---

# 🔍 4. Read Data (VERY IMPORTANT)

---

### 👉 Get all data

```js
db.users.find()
```

---

### 👉 Pretty format

```js
db.users.find().pretty()
```

---

### 👉 Filter data

```js
db.users.find({ age: 21 })
```

---

### 👉 Find one

```js
db.users.findOne({ name: "Nik" })
```

---

# ✏️ 5. Update Data

---

### 👉 Update one

```js
db.users.updateOne(
    { name: "Nik" },
    { $set: { age: 22 } }
)
```

---

### 👉 Update many

```js
db.users.updateMany(
    {},
    { $set: { status: "active" } }
)
```

---

# ❌ 6. Delete Data

---

### 👉 Delete one

```js
db.users.deleteOne({ name: "Nik" })
```

---

### 👉 Delete many

```js
db.users.deleteMany({ age: { $lt: 25 } })
```

---

# 🔥 7. Advanced (Important for real projects)

---

### 👉 Count documents

```js
db.users.countDocuments()
```

---

### 👉 Sort

```js
db.users.find().sort({ age: 1 })   // ascending
db.users.find().sort({ age: -1 })  // descending
```

---

### 👉 Limit

```js
db.users.find().limit(2)
```

---

### 👉 Projection (select fields)

```js
db.users.find({}, { name: 1, _id: 0 })
```

---

# 🧠 Key Concept You Should Notice

MongoDB uses:

* JSON-like structure → called **BSON**
* Query operators like:

  * `$set`
  * `$lt`, `$gt`
  * `$in`

---

# ⚡ Mini Practice (DO THIS)

In `mongosh`, try:

```js
use testDB

db.users.insertMany([
    { name: "Nik", age: 21 },
    { name: "Sam", age: 25 },
    { name: "Alex", age: 19 }
])

db.users.find({ age: { $gt: 20 } })
```

---

# 🚀 Next Level (Where this leads)

These commands = foundation of:

* Mongoose queries (`User.find()`)
* API filtering
* Backend logic
