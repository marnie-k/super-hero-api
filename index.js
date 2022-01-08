const express = require('express')
const bodyParser = require('body-parser')
const heroes = require('./heroes')
const { getAllHeroes, getHeroBySlug,saveNewHero } = require('./controller/heroes')

const app = express()

app.get('/', getAllHeroes)

app.get('/:slug', getHeroBySlug);

app.post('/', bodyParser.json(), saveNewHero)

app.listen('1337', console.log( "Listening on port 1337...")) //eslint-disable-line no-console
