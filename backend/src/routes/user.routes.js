import Router from "exporess";

 const router  = Router();

 // update name, email, phone, gender.
 router.route("api/update-details").post();

// update avatar
 router.route("api/update-avatar").post();

// update address
 router.route("api/update-address").post();

// store push token
 router.route("api/auth/push-token").post();

 // get current-user details
 router.route("api/auth/me").get();


 export default router;

