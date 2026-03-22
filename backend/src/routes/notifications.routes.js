import Router from "express";

const router = Router();

// alter isSubscribed field in user Model
router.route("api/notifications/subscribe").patch();

// alter isSubscribed field in user Model
router.route("api/notifications/unsubscribe").patch();




