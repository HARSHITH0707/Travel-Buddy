const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'welcome to $oding';

// Route to create a new user
router.post('/createuser', [
    body('name', 'Enter valid name').isLength({ min: 3 }),
    body('email', 'Enter valid email').isEmail(),
    body('password', 'Password should be at least 5 characters').isLength({ min: 5 }),
    body('address', 'Address is required').not().isEmpty(),
    body('state', 'State is required').not().isEmpty(),
    body('street', 'Street is required').not().isEmpty(),
    body('phoneNumber', 'Phone number is required').not().isEmpty(),
    body('preferredDestinations', 'Preferred destinations are required').not().isEmpty(),
    body('whereDidYouHearAboutUs', 'This field is required').not().isEmpty(),
    body('gender', 'Gender is required').not().isEmpty()
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ success, error: "User with email already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const securedpass = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            password: securedpass,
            email: req.body.email,
            address: req.body.address,
            state: req.body.state,
            street: req.body.street,
            phoneNumber: req.body.phoneNumber,
            preferredDestinations: req.body.preferredDestinations,
            whereDidYouHearAboutUs: req.body.whereDidYouHearAboutUs,
            gender: req.body.gender
        });
        const data = { user: { id: user.id } };
        const jwtData = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, jwtData });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

// Route to authenticate a user
router.post('/login', [
    body('email', 'Enter valid email').isEmail(),
    body('password', 'password cannot be blank').exists()
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }
        const data = { user: { id: user.id } };
        const jwtData = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, jwtData });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

// Route to get user details
router.get('/getuser', fetchuser, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

module.exports = router;
