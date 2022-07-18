const db = require("../models");
const Pokemons = db.pokemons;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty !",
    });
    return;
  }

  const note = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  Pokemons.create(note)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while create the Notes",
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;

  Pokemons.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving Notes",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Pokemons.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Notes with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Pokemons.update(req.body, {
    where: { id: id },
  }).then((data) => {
    if (data) {
      res.send({
        message: "Note was updated successfully",
      });
    } else {
      res.send({
        message: `Cannot update Note with id=${id}`,
      });
    }
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Pokemons.destroy({
    where: { id: id },
  }).then((data) => {
    if (data) {
      res.send({
        message: "Note was delete successfully!",
      });
    } else {
      res.send({
        message: `Cannot delete Note with id=${id}`,
      });
    }
  });
};
