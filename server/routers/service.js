const express = require("express");
const {
  create,
  listByParentId,
  update,
  remove,
  serviceId,
} = require("../controllers/service");
const router = express.Router();

router.post("/service", create);
router.get("/services", listByParentId);
router.put("/service/:id", update);
router.delete("/service/:id", remove);

router.post("/booking", (req, res) => {
  const booking = req.body;
  console.log("booking", booking);

  res.status(400).json({
    message: "thành công",
  });
});

router.param("id", serviceId);

module.exports = router;
