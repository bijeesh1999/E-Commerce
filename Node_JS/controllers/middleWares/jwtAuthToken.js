const jwt = require("jsonwebtoken");
require("dotenv").config();

const verify = async (req, res, next) => {
    try {
        const {token} = req.cookies; // Access the 'token' property directly from req.cookies
        console.log(req.cookies, token);

        if (!token) {
            return res.status(404).send("Please login first");
        }

        const decode = jwt.verify(token, process.env.MY_SECRET);
        console.log(decode);
        req.user = decode;
        res.status(200).json(token);
    } catch (error) {
        res.status(401).send("Invalid token");
    }

    next();
};

module.exports = verify;
