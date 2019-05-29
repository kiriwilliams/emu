const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users");
const entryRoutes = require("./entries");

// User routes
router.use("/users", userRoutes);

// Entry Routes
router.use("/entries", entryRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
