const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
    const name = process.env.APP_NAME;
    res.status(200).json({
        data: name,
        message: "Welcome to Orbit's API!",
    });
});

// User API Routes

module.exports = router;
