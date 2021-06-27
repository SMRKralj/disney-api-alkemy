const router = require("express").Router();

const { Character } = require("../../../data/db");

router.get("/", async (req, res) => {
  const characters = await Character.findAll();
  res.json(characters);
});

router.post("/", async (req, res) => {
  const character = await Character.create(req.body);
  res.json(character);
});

router.put("/:id", async (req, res) => {
  await Character.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({ success: "Actualizado" });
});

router.delete("/:id", async (req, res) => {
  await Character.destroy({
    where: { id: req.params.id },
  });
  res.json({ success: "Se ha borrado el personaje" });
});
module.exports = router;
