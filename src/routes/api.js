const router = require("express").Router();

const moviesRouter = require("./api/movies");
const charactersRouter = require("./api/characters");
const gendersRouter = require("./api/genders");
const registerUsers = require("./api/users");
const middlewares = require("./middlewares");

router.use("/movies", middlewares.checkToken, moviesRouter);
router.use("/characters", charactersRouter);
router.use("/genders", gendersRouter);
router.use("/users", registerUsers);

module.exports = router;
