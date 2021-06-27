const router = require("express").Router();

const { Gender } = require("../../../data/db");

router.get("/", async (req, res) => {
  const genders = await Gender.findAll();
  res.json(genders);
});

router.post("/", async (req, res) => {
  const gender = await Gender.create(req.body);
  res.json(gender);
});

router.put("/:id", async (req, res) => {
  await Gender.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({ success: "Actualizado" });
});

router.delete("/:id", async (req, res) => {
  await Gender.destroy({
    where: { id: req.params.id },
  });
  res.json({ success: "Se ha borrado el género" });
});
module.exports = router;
