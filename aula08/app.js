const express = require('express')
const expressHandlebars = require('express-handlebars')

const controller = require('./controllers/controller')
const weatherMiddleware = require('./controllers/middleware/weather')

const port = process.env.PORT || 3000;

const app = express()

// configure Handlebars view engine
app.engine('.hbs', expressHandlebars.engine({
  defaultLayout: 'main',
  extname: '.hbs',
  helpers: {
    section: function(name, options) {
      if(!this._sections) this._sections = {}
      this._sections[name] = options.fn(this)
      return null
    },
  },
}))

app.set('view engine', '.hbs')

app.use(express.static(__dirname + '/public'))

app.use(weatherMiddleware)

app.get('/', controller.home)
app.get('/section-test', controller.sectionTest)

app.use(controller.notFound)
app.use(controller.serverError)

app.listen(port, () => {
console.log( `Express started on http://localhost:${port}` +
    '; press Ctrl-C to terminate.' )
})
