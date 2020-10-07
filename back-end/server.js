const express = require ('express')
const nunjucks = require('nunjucks')
const videos = require('./data')

const server = express()


server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get('/', function(req, res){
    const about = {
        avatar_url:"image/perfil.jpeg" ,
        name: 'César Azambuja',
        role: 'Desenvolvedor Front-End',
        description:'Programador Front-End especializado em construção de web sites modernos e otimizados para atender diversos publicos.',
        name_git: 'github',
        link_git:'https://github.com/CesarAzambuja',
        links:[
            {
                name: 'Facebook',
                image: 'fab fa-facebook-square',
                link: 'https://www.facebook.com/cesar.azambuja',
            },
            {
                name: 'Instagram',
                image: 'fab fa-instagram-square',
                link: 'https://www.instagram.com/cesarazambuja_o/',
            },
            {
                name: 'Linkedin',
                image: 'fab fa-linkedin',
                link: 'https://www.linkedin.com/in/eng-cesarazambuja/',
            },
            {
                name: 'Youtube',
                image: 'fab fa-youtube-square',
                link: 'https://www.youtube.com/channel/UC0bMrU2VqvemIhFx6ZEykFQ?view_as=subscriber',
            },
        ]

    }

    return res.render('about', { about })
})

server.get('/projects', function(req, res){
    return res.render('projects', {items: videos })
})

server.get('/video', function(req, res){
    const id = req.query.id

    const video = videos.find(function(video){
        return video.id == id
    })

    if (!video){
        return res.send('Video not found!')
    }

   res.render('video', { item: video })
})

server.listen(5000, function(){
    console.log('server is running')
})