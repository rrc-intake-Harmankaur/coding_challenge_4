import express from "express";
import { setCustomClaims } from ".api/v1/routes/";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";
 
const router: express.Router = express.Router();
 
// Only admins can set custom claims
router.post(
    "/setCustomClaims",
    authenticate,
    isAuthorized({ hasRole: ["admin"] }),
    setCustomClaims
);
 
export default router;