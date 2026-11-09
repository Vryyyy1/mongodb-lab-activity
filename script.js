// Hands-On Lab: Document Databases with MongoDB
// Database: retail_db | Collection: catalog

// ==========================================
// Task 1: Environment Setup
// ==========================================
use retail_db;

// ==========================================
// Task 2: Demonstrating Schema Flexibility
// ==========================================
db.catalog.insertOne({
  product_id: 101,
  name: "ThinkPad T14",
  category: "Electronics",
  specs: { ram: "16GB", cpu: "i7" },
  price: 1200.00
});

db.catalog.insertOne({
  product_id: 102,
  name: "Ceramic Travel Mug",
  category: "Home",
  volume_oz: 16,
  is_dishwasher_safe: true,
  price: 18.50
});

// ==========================================
// Task 3: Querying NoSQL Data
// ==========================================
db.catalog.find({ category: "Electronics" });
db.catalog.find({ price: { $gt: 50 } });

// ==========================================
// Task 4: Simulating NoSQL Injection
// ==========================================
db.catalog.find({ price: { $ne: -1 } });
