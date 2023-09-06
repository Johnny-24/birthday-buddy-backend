const {Router} = require('express')
const router = Router()
const List = require('./../models/list')

router.get('/', async (req, res) => {
  try {
    const items = await List.findAll()
    res.status(200).json(items)
  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'Server Error'
    })
  }
})


router.post('/', async (req, res) => {
  try {
    const list = await List.create({
      name: req.body.name,
      date: req.body.date
    })
    res.status(201).json({list})
  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'Server Error'
    })
  }
})

router.put('/:id', (req, res) => {
  try {

  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'Server Error'
    })
  }
})

router.delete('/:id', (req, res) => {
  try {

  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'Server Error'
    })
  }
})

module.exports = router