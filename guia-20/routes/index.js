const { default: axios } = require("axios");
var express = require("express");
var router = express.Router();

const Sequelize = require("sequelize");
const Producto = require("../models").producto;

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/productos", function (req, res, next) {
  Producto.findAll({
    attributes: { exclude: ["updatedAt"] },
  })
    .then((productos) => {
      res.json(productos);
    })
    .catch((error) => res.status(400).send(error));
});

router.get("/reporte", async function (req, res, next) {
  try {
    const response = await axios.get(
      "https://guia20-c5a69-default-rtdb.firebaseio.com/collection.json"
    );

    const productos = await Producto.findAll({
      attributes: { exclude: ["updatedAt"] },
    });

    res.render("reporte", {
      title: "My Dashboard :: Reporte",
      arrProductos: productos,
      arrColeccion: response.data,
    });
  } catch (err) {
    console.log(err);
    res.render("reporte", {
      title: "My Dashboard :: Reporte",
      arrProductos: {},
      arrColeccion: {},
    });
  }
});

module.exports = router;
