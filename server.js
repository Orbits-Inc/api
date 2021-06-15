const express = require("express");
const connectDB = require("./db");
const router = require("./router");
const cors = require("cors");

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

function getIp(req) {
    let ip = req.connection.remoteAddress;
    ip = ip.replace("::ffff:", "");

    if (ip == "127.0.0.1") {
        ip = req.headers["x-real-ip"];
    }

    return ip;
}
// API Router

app.use("/", router);
app.get("/ip", (req, res) => {
    res.json({
        ip: getIp(req),
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
