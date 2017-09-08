const express = require('express')
const request = require('request')
const _ = require('lodash')
const app = express()
const tuzsaAPI = 'http://www.zaragoza.es/api/recurso/urbanismo-infraestructuras/transporte-urbano'

function trimPunct(str) {
  return _.trim(str, '.,')
}

function processStopInfo(stop) {
  const [title, lines] = stop.title.split('Líneas:')

  return {
    id: stop.id,
    title: trimPunct(title),
    lines: lines.split(',').map((s) => s.trim()),
    icon: stop.icon
  }
}

function processStopSchedule(stop) {
  return {
    schedule: _.map(stop.destinos, (line) => ({
      id: line.linea,
      destination: trimPunct(line.destino),
      times: [
        line.primero,
        line.segundo,
        line.tercero
      ].filter((s) => !!s).map((s) => +s.split(' ')[0]).filter(Number)
    }))
  }
}

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/api/stops', (req, res) => {
  request(`${tuzsaAPI}/poste.json`, (err, response, body) => {
    if (!err) {
      const data = JSON.parse(body).result

      const stops = _.map(data, (s) => processStopInfo(s))

      res.send(stops)
    } else {
      res.status(500).send()
    }
  })
})

app.get('/api/stops/:id', (req, res) => {
  const id = req.params.id

  request(`${tuzsaAPI}/poste/${id}.json`, (err, response, body) => {
    if (!err) {
      const data = JSON.parse(body)

      const stop = _.extend({}, processStopInfo(data), processStopSchedule(data))

      res.send(stop)
    } else {
      res.status(500).send()
    }
  })
})

app.listen(3000)
