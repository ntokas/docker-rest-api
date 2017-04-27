const donuts = require("./donut");

const constructorMethod = (app) => {
    app.use("/donut", donuts);


    app.use("*", (req, res) => {
        res.status(404).json({ error: "Not found" });
    });
};

module.exports = constructorMethod;