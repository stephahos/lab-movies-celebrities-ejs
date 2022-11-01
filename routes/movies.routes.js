const router = require('express').Router()

module.exports = router
const { render } = require('../app')

const Movie = require('../models/Movie.model')

/* GET Movies */
router.get('/', async (req, res, next) => {
    try {
      const movies = await Movie.find()
      res.render('movies', { movies })
  
    } catch (err) {
      console.log(err)
    }
  })


router.get('/new', (req, res, next) => {
    res.render('new-movie', { movie: { title: '', genre: '', pilot: '', cast: [] } })
  })

// Create Movie
router.post('/', async (req, res) => {
    try {
      await Movie.create({
        title: req.body.title,
        genre: req.body.genre,
        pilot: req.body.pilot,
        cast: req.body.cast.split(''),
      })
      res.redirect('/movies')
    } catch (error) {
      res.render('/movies/new-movie')
        console.log('render the new movie view so the user can try again')
    }
  })

//Get Movie with ID
router.get('/:movieId', async (req, res) => {
  console.log(req.params.movieId)
  const movie = await Movie.findById(req.params.movieId)
  res.render('movie-details', { movie })
})

//to Update a movie
router.get('/update/:movieId', async (req, res) => {
  const movie = await Movie.findById(req.params.movieId)
  res.render('new-movie', { movie })
})

router.post('/update/:movieId', async (req, res) => {
  console.log(req.body)
  await Movie.findByIdAndUpdate(req.params.movieId, { ...req.body, genre: req.body.genre.split('') }) // Exactly the same as line 25
  res.redirect(`/movies/${req.params.movieId}`)
})

//To Delete a movie
router.get('/delete/:movieId', async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.movieId)
    res.redirect('/movies')
  } catch (error) {
    console.log(error)
  }
})

module.exports = router