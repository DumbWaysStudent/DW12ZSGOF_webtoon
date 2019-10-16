const models = require('../models')
const Webtoon = models.webtoon

exports.index = (req, res) => {
   let favorite = req.query.is_favorite
   if (favorite == 'true') {
       favorite = 1
        Webtoon.findAll({where:{isFavorite:favorite}}).then(result=> res.send(result))
   } else {
       Webtoon.findAll().then(result=>res.send(result))
   }
}

exports.show = (req, res) => {
    Webtoon.findAll({where:{id: req.params.id}}).then(result=> res.send(result))
}

exports.search = (req, res) => {
    Webtoon.findAll({where:{title: req.params.title}}).then(result=> res.send(result))
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
