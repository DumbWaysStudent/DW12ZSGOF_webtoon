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

    //webtoon API
    router.get('/webtoons', authenticated, WebtoonController.index)  
    router.get('/webtoon/:id', WebtoonController.show)   
    router.get('/webtoon/search/:title', WebtoonController.search) 
    router.get('/webtoons/favorite/:fav', WebtoonController.favorite)   
    router.post('/webtoon', WebtoonController.store)    
    router.patch('/webtoon/:id', WebtoonController.update)    
    router.delete('/webtoon/:id', WebtoonController.delete)


    //Episode API
    router.get('/episodes', EpisodeController.index)
    router.get('/webtoon/:id/episodes', EpisodeController.show)

    //Detail Episode API
    router.get('/webtoon/:id_webtoon/episode/:id_episode', DetailEpisodeController.show)
    router.get('/detailepisodes', DetailEpisodeController.index)

    
})


app.listen(port, () => console.log(`Listening on port ${port}!`))