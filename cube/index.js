const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser');
const locationRouter = require('./locationRouter');
const memberRouter = require('./memberRouter');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .use('/member', memberRouter)
  .use('/location', locationRouter)

  .get('/', (req, res) => res.render('pages/index'))

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
