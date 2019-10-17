const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 5000

app.use(bodyParser.json())

//controllers
const AuthController = require('./controllers/auth')
const WebtoonController = require('./controllers/webtoons')
const EpisodeController = require('./controllers/episodes')
const DetailEpisodeController = require('./controllers/detailEpisodes')

//middlewares
const { authenticated } = require('./middleware')

app.group("/api/v1", (router) => {

    //auth API
    router.post('/login', AuthController.login)
    router.post('/register', AuthController.register)

    //webtoon API
    router.get('/webtoons', authenticated, WebtoonController.index)  
    router.get('/webtoon/:id', WebtoonController.show)     
    router.patch('/webtoon/:id', WebtoonController.update)    
    router.delete('/webtoon/:id', WebtoonController.delete)



    //Episode API
    router.get('/episodes', EpisodeController.index)
    router.get('/webtoon/:id/episodes', EpisodeController.show)

    //Detail Episode API
    router.get('/webtoon/:id_webtoon/episode/:id_episode', DetailEpisodeController.show)
    router.get('/detailepisodes', DetailEpisodeController.index)

    //Creation API
    router.get('/user/:id/webtoons', authenticated, WebtoonController.show)
    router.post('/user/:id/webtoon', authenticated, WebtoonController.store)
    router.get('/webtoon/:webtoon_id/episodes', authenticated, EpisodeController.showepisode)
    router.get('/user/:user_id/webtoon/:webtoon_id/episodes',authenticated, EpisodeController.showcreation)
    router.put('/user/:user_id/webtoon/:webtoon_id',authenticated, WebtoonController.update)
    router.delete('/user/:user_id/webtoon/:webtoon_id',authenticated, WebtoonController.delete)
    router.post('/user/:user_id/webtoon/:webtoon_id/episode', authenticated, EpisodeController.createEpisode)
    router.get('/user/:user_id/webtoon/:webtoon_id/episode/:episode_id/images', authenticated, DetailEpisodeController.image)
})


app.listen(port, () => console.log(`Listening on port ${port}!`))