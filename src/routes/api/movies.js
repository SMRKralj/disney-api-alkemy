const router = require("express").Router();

const { Movie } = require("../../../data/db");

router.get("/", async (req, res) => {
  const movies = await Movie.findAll();
  res.json(movies);
});

router.post("/", async (req, res) => {
  const movie = await Movie.create(req.body);
  res.json(movie);
});

router.put("/:id", async (req, res) => {
  await Movie.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({ success: "Actualizado" });
});

router.delete("/:id", async (req, res) => {
  await Movie.destroy( {
    where: { id: req.params.id },
  });
  res.json({ success: "Se ha borrado la película" });
});
module.exports = router;
