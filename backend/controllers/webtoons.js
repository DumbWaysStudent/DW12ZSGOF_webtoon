const models = require('../models')
const Webtoon = models.webtoon

exports.index = (req, res) => {
    Webtoon.findAll().then(result=>res.send(result))
}

exports.show = (req, res) => {
    Webtoon.findAll({where:{id: req.params.id}}).then(result=> res.send(result))
}

exports.search = (req, res) => {
    Webtoon.findAll({where:{title: req.params.title}}).then(result=> res.send(result))
}

exports.favorite = (req, res) => {
    Webtoon.findAll({where:{isFavorite: req.params.fav}}).then(result=> res.send(result))
}

exports.store = (req, res) => {
    Webtoon.create(req.body).then(webtoon=> {
        res.send({
            message: "success",
            webtoon
        })
    })
}

exports.update = (req, res) => {
    Webtoon.update(
        req.body,
        {where: {id: req.params.id}}
    ).then(webtoon=> {
        res.send({
            message: "success",
            webtoon
        })
    })
}

exports.delete = (req, res) => {
    Webtoon.destroy({where: {id: req.params.id}}).then(webtoon=> {
        res.send({
            message: "success",
            webtoon
        })
    })
}
