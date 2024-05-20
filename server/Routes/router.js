const express = require("express")
const router = new express.Router()
const controllers = require("../controllers/userControllers")
const authenticate = require("../middleware/authenticate")
const userupload = require("../multerconfig/user/userStorageConfig")


// Routes
router.post("/user/register",userupload.single("user_upload"), controllers.userRegister)
router.post("/user/login",userupload.single("user_upload"), controllers.userLogin)
router.put("/user/userUpdate/:id", controllers.userUpdate)
router.put("/user/profileUpdate/:id", controllers.profileUpdate)
router.get("/user/uservalid", authenticate,controllers.userValid)
router.get("/user/userlogout", authenticate,controllers.userLogout)



module.exports = router