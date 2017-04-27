const educationroutes = require("./donut");

const constructorMethod = (app) => {
    app.use("/donut", educationroutes);


    app.use("*", (req, res) => {
        res.status(404).json({ error: "Not found" });
    });
};

module.exports = constructorMethod;