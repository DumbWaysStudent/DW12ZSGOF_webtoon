const models = require('../models')
const detailEpisode = models.detail_episode

exports.index = (req, res) => {
    detailEpisode.findAll().then(result=>res.send(result))
}

exports.show = (req, res) => {
    detailEpisode.findAll({where:{webtoon_id: req.params.id_webtoon, episode_id: req.params.id_episode }}).then(result=> res.send(result))
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
