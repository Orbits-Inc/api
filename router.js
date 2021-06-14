const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
    res.status(200).json({
        data: process.env.APP_NAME,
        message: "Welcome to Orbit's API!",
    });
});

// User API Routes

module.exports = router;
