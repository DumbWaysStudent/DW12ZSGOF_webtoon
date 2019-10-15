const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 5000

app.use(bodyParser.json())

//controllers
const AuthController = require('./controllers/auth')
const WebtoonController = require('./controllers/webtoons')

//middlewares
const { authenticated } = require('./middleware')

app.group("/api/v1", (router) => {

    //auth API
    router.post('/login', AuthController.login)

    //webtoon API
    router.get('/webtoons', WebtoonController.index)    
    router.get('/webtoon/:id', WebtoonController.show)    
    router.post('/webtoon', WebtoonController.store)    
    router.patch('/webtoon/:id', WebtoonController.update)    
    router.delete('/webtoon/:id', WebtoonController.delete)

    //another APIs goes here
})


app.listen(port, () => console.log(`Listening on port ${port}!`))