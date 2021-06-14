const express = require("express");
const connectDB = require("./db");
const router = require("./router");

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("trust proxy", true);

// API Router

app.use("/", router);
app.get("/ip", (req, res) => {
    res.json({
        ip: req.header("x-forwarded-for"),
    });
});

connectDB()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

app.listen(PORT, () => {
    console.log(`Server up on PORT ${PORT}`);
});
