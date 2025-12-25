import { Router } from "express";
import bcrypt from 'bcrypt';
import UserModel from "../Models/user.model.js";
import jwt from 'jsonwebtoken';


const authRoutes = Router();

authRoutes.post('/signup', async (req, res) => {
    try {
        const { email, password, first, last, role } = req.body;

        if (!email || !password) {
            res.status(400).send("Please enter email and password")
            return;
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userToSave = {
            email: email,
            password: hashedPassword,
            firstname: first,
            lastname: last,
            role: role || 'user'
        }

        const addedUser = await UserModel.create(userToSave);

        res.status(200).json(addedUser)

    } catch (err) {
        res.status(500).send(err);
        console.log(err)
    }
})


authRoutes.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send("Please enter email and password")
        }

        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(401).json({ error: 'Authentication failed' });
        }

        const pass = await bcrypt.compare(password, user.password);

        if (!pass) {
            return res.status(401).json({ error: 'Authentication failed' });
        }

        const token = jwt.sign({ userId: user._id, role : user.role }, 'sdjfhsdfs+df7s5dff^%@$ghhkbv', {
            expiresIn: '1h'
        }); 

        res.status(200).json({ token });

    } catch (err) {
        res.status(500).send(err);
        console.log(err)
    }
})

export default authRoutes;