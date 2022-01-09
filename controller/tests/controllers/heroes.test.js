const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const { describe, it } = require('mocha')
const { getAllHeroes, getHeroBySlug, saveNewHero } = require('../../controllers/heroes')

chai.use(sinonChai)
const { expect } = chai

describe('Controllers - heroes', () => {
    describe('getAllHeroes', () => {
      it('retrieves a list of heroes from the database and calls response.send() with the list', async () => {
        const stubbedFindAll = sinon.stub(models.heroes, 'findAll')
        const stubbedSend = sinon.stub()
        const response = { send: stubbedSend }
  
        await getAllHeroes({}, response)
      })
    })
  
  

  describe('getHeroBySlug', () => {})
  
  describe('saveNewHero', () => {})
})
