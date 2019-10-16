const models = require('../models')
const Episode = models.episode

exports.index = (req, res) => {
    Episode.findAll().then(result=>res.send(result))
}

exports.show = (req, res) => {
    Episode.findAll({where:{Webtoon_id: req.params.id}}).then(result=> res.send(result))
}

exports.detailEpisode = (req, res) => {
    Episode.findAll({where:{Webtoon_id: req.params.id}}).then(result=> res.send(result))
}


exports.store = (req, res) => {
    Episode.create(req.body).then(webtoon=> {
        res.send({
            message: "success",
            webtoon
        })
    })
}

exports.update = (req, res) => {
    Episode.update(
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
    Episode.destroy({where: {id: req.params.id}}).then(webtoon=> {
        res.send({
            message: "success",
            webtoon
        })
    })
}
