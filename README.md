[![Travis builds](https://travis-ci.org/RecuencoJones/tuzsa-frontend.svg?branch=develop)](https://travis-ci.org/RecuencoJones/tuzsa-frontend)
[![Heroku deployment](https://img.shields.io/badge/deploy-heroku-9878bb.svg)](https://tuzsa-frontend.herokuapp.com)

# tuzsa-frontend

Generated with vue-cli [webpack-simple](https://github.com/vuejs-templates/webpack-simple) template.

## Install

```
npm install
```

## Development build

```
npm run dev
```

A live-reload server will be started on [http://localhost:8080](http://localhost:8080)

## Production build

```
npm run build
```

Everything will be built into `dist/` directory.

## Dockerize

```
docker build -t recuencojones/tuzsa-frontend .

docker run -it -d --name tuzsa-frontend -p 8080:80 recuencojones/tuzsa-frontend
```
