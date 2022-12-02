const { sequelize } = require("../models");
const models = require("../models");

const LeaseController = {};
// Para cambiar
LeaseController.newLease = async (req, res) => {
  try {
    const user_id = req.auth.user_id;
    const { movie_id } = req.body;
    const resp = await models.Lease.create({
      user_id,
      movie_id,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.status(200).json({ message: "Lease created" });
  } catch (error) {
    res.send(error);
  }
};

LeaseController.updateLease = async (req, res) => {
  try {
    const {lease_id} = req.body
    const user_id = req.auth.user_id;
    if (!user_id) {
      throw new Error("Authorization fail");
    }
    const lease = await models.Lease.update({ refund: 1 }, { where: {lease_id} });
    if (!lease) {
      throw new Error("Update fail");
    }
    res.status(200).json({ message: "Registro actualizado" });
  } catch (error) {
    res.send(`${error}`);
  }
};

LeaseController.showLease = async (req, res) => {
  try {
    const user_id = req.auth.user_id;
    // const resp = await sequelize.query(`SELECT l.user_id, l.createdAt, l.refund , m.movie_id, m.title, m.poster FROM Leases AS l
    // INNER JOIN Movies AS m ON l.movie_id = m.movie_id 
    // WHERE l.user_id=${user_id} AND l.refund = 0`)
    const resp = await models.Lease.findAll({
      where: {
        user_id:user_id,
        refund : 0,
      },
      include: {
        model:models.Movie
      }
    })
    res.send(resp);
  } catch (error) {
    res.send(error);
  }
};

LeaseController.showAll = async (req, res) => {
  try {
    let isAdmin = req.auth.user_role;
    if (isAdmin !== 1) {
      throw new Error("Only Admin can do this");
    } else {
      let resp = await models.Lease.findAll({});
      res.send(resp);
    }
  } catch (error) {
    res.send(`${error}`);
  }
};
module.exports = LeaseController;

//sequelize.query(`SELECT article_id FROM Articles_Lease WHERE lease_id=${lease_id}`)
