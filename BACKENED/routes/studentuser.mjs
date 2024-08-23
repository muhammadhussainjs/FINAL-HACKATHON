import express from 'express'
import StudentUser from '../models/StudentUser.mjs'

const router = express.Router()

router.post('/register', async (req, res) => {
    try {
        const user = new StudentUser(req.body);
        await user.save();
        res.status(201).send({ message: 'User registered successfully!' });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(400).send({ message: 'Registration failed', error: error.message });
    }
});

router.get('/users', async (req, res) => {
     const users = await StudentUser.find();
    res.send({ message: 'Users Data fetched successfully' , data:users});
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        // Step 1: Check if email exists
        const user = await StudentUser.findOne({ email });

        if (!user) {
            res.send({ message: "User not found!" });
            return;
        }

        // Step 2: Compare the passwords
        const isCorrectPassword = await user.comparePassword(password);

        if (!isCorrectPassword) {
            res.send({ message: "Invalid Password" });
            return;
        }

        await user.save();

        res.status(200).send({ message: 'User logged in successfully!'});
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).send({ message: 'Login failed, please try again.' });
    }
});






export default router