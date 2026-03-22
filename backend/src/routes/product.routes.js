import { Router } from "express";

const router = Router();

// Get all products (with filters)
router.route("/api/products").get();

// Get single product detail
router.route("/api/products/:id").get();

// Get products by category
router.route("/api/products/category/:name").get();

// Search products by name
router.route("/api/products/search").get();


// Admin Routes


// Add new product + trigger notification
router.route("/api/products").post();

// Update product details
router.route("/api/products/:id").put();

// Update stock only
router.route("/api/products/:id/stock").patch();

// Toggle product visible/hidden
router.route("/api/products/:id/availability").patch();

// Delete product
router.route("/api/products/:id").delete();

// Upload product images to S3
router.route("/api/products/:id/images").post();

// Remove a product image
router.route("/api/products/:id/images").delete();

export default router;
