import { Router } from "express";

const router = Router();

//      User Routes


// Place a new order
router.route("/api/orders").post();

// Get logged-in user's all orders
router.route("/api/orders/my").get();

// Get single order detail (user's own)
router.route("/api/orders/my/:id").get();

// Cancel order (only if still pending)
router.route("/api/orders/my/:id").delete();


//      Admin Routes


// Get all orders (all users)
router.route("/api/orders").get();

// Get any single order detail
router.route("/api/orders/:id").get();

// Update order status
router.route("/api/orders/:id/status").patch();

export default router;
