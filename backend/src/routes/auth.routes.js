import Router from "express";

const router = Router();

// Send phone number to your backend Baton will call fire sdk for OTP
router.route("/api/auth/send-otp").post();

// App send phone and OTP
//  backend will verify it with Firebase Admin Sdk
//  If valid =>
//  1. Create user in database 
//  2. Send access reference token in keychain
router.route("/api/auth/verify-otp").post();



// For Google oAuth
// Verify id token (received from Google sign in)  
// create user Send refresh in access to open
router.route("api/auth/google").post();


router.route("")


// To  refresh the access token
router.route("api/auth/refresh").get();

router.route("api/auth/login").post();

router.route("api/auth/logout").post();




 



export default router;