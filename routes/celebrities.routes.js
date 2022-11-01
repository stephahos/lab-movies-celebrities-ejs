const router = require('express').Router()

const Celebrity = require('../models/Celebrity.model')
const { render } = require('../app')


/* GET Celebrities */
router.get('/', async (req, res, next) => {
    try {
      const celebrities = await Celebrity.find()
      res.render('celebrities', { celebrities })
  
    } catch (err) {
      console.log(err)
    }
  })
router.get('/new', (req, res, next) => {
    res.render('newcelebrity', { celebrity: { name: '', occupation: '', catchPhrase: '' } })
  })

// Create Celebrity
router.post('/', async (req, res) => {
    try {
      await Celebrity.create({
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
      })
      res.redirect('/celebrities')
    } catch (error) {
      res.render('/celebrities/newcelebrity')
        console.log('render the new celebrity view so the user can try again')
    }
  })

module.exports = router
