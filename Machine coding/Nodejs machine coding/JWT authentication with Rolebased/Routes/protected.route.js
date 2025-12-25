import Router from "express";
import {verifyAdmin, verifyToken} from "../Middleware/middleware.js";

const protectedRoute = Router();

protectedRoute.get('/admin', verifyToken, verifyAdmin, (req, res) => {

    const role = req.role;

    if(role === 'admin'){
        res.status(200).json({ message: 'Protected route accessed' });
    }else{
        return res.status(400).json({error:"Sorry, you are not admin."});
    }

})

export default protectedRoute;