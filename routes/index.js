const router = require('express').Router();
router.post('/', (req, res) => {
  res.send('New contact added');
});


router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    //#swagger.tags=['Hello World]
    res.send('Hello World, I am Samuel Oxeant');
});

router.use('/contacts', require('./contacts'));

module.exports = router;