const { sequelize } = require('../models');
const models = require('../models');

const LeaseController = {}

LeaseController.newLease = async (req, res) => {
    const user_id = req.auth.user_id;
    try {
        const { articles_id } = req.body;
        const resp = await models.Lease.create({
            user_id: user_id,
        })
        if (articles_id) {
            articles_id.forEach(async (article_id) => {
                await sequelize.query(`INSERT INTO Articles_Lease(article_id, lease_id) VALUES (${article_id},${resp.lease_id})`);
            });
            res.send('Lease created');
        } else {
            throw new Error('Article error');
        }

    } catch (error) {
        res.send(error);
    }
}

LeaseController.updateLease = async (req, res) => {
    try {
        const { lease_id, article_id, newArticleId } = req.body;
        const user_id = req.auth.user_id;
        const lease = await models.Lease.findByPk(lease_id);
        if (lease.user_id !== user_id) {
           throw new Error('Update your Lease');
        }else{
            await sequelize.query(`UPDATE Articles_Lease SET article_id=${newArticleId} WHERE lease_id=${lease_id} AND article_id=${article_id}`)
            res.status(200).json({message :'Registro actualizado'});
        }
        
    } catch (error) {
        res.send(`${error}`);
    }
}

LeaseController.showLease = async (req, res) => {
    try {
        const user_id = req.auth.user_id;
        const resp = await models.Lease.findAll({
            where: {
                user_id: user_id,
            }
        })
        res.send(resp);
    } catch (error) {
        res.send(error);
    }

}

LeaseController.showAll = async (req, res) => {
    try {
        let isAdmin = req.auth.user_role;
        if (isAdmin !== 1) {
            throw new Error('Only Admin can do this');
        } else {
            let resp = await models.Lease.findAll({});
            res.send(resp);
        }

    } catch (error) {
        res.send(`${error}`);
    }
}
module.exports = LeaseController;

//sequelize.query(`SELECT article_id FROM Articles_Lease WHERE lease_id=${lease_id}`)