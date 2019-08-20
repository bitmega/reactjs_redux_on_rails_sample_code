# REACT on RAILS SAMPLE CODE

## Introduction

This is the sample code for building a `react` web app based on `rails`. Moreover
, it's combined with `redux` and `react-router`.

##### Functions overview
Employee management system with basic features:
- Employee listing
- Employee filtered by salary
- Add new, remove, edit a employee

Employee properties:
- name
- salary
- DOB
- level: fresher, junior, senior

All properties are required.

## Tech Stack

* [Ruby on Rails](http://rubyonrails.org/)
* [React](https://facebook.github.io/react/)
* [Redux](http://redux.js.org/)
* [React Router](https://reacttraining.com/react-router/)
* [NodeJS](https://nodejs.org/en/)

## Dependencies
* NodeJS `>= v6.11.4`
* yarn `>= 1.7.0`

## Get The Application Up

#### a. Without Docker

* Install Ruby first, Ruby version is set at `.ruby-version`
* Install Rails, Rails version is set at `Gemfile`
* Install all gems defined at `Gemfile` by `bundle install` command
* Install all `node_modules` defined in `package.json` by `yarn install` command
* Create database by `rake db:create` command and `rake db:migrate` command
* Finally, get the application up by `rails s` command

#### b. Using Docker
* Change the host in `config/database.yml` to `db`
* Run `docker-compose up` to pull images and create containers, network...
* If you need to run `rake db:migrate` with Docker, you could run
  ```
  docker-compose run web /bin/bash -l -c "rake db:migrate"
  ```
* If you need to run rails console
  ```
  docker-compose run web /bin/bash -l -c "rails c"
  ```
* If you need to ssh to web container
  ```
    docker exec -it <CONTAINER_ID> /bin/bash
  ```
* Then go to `http://localhost:3000` on any browser by default to access our demo
* If you see this error:
  ```
  ERROR: Couldn't connect to Docker daemon at http+docker://localunixsocket - is it running?
  If it's at a non-standard location, specify the URL with the DOCKER_HOST environment variable.
  ```

  Please try this way:
  ```
    docker-compose up -d
    docker attach reactjsreduxonrailssamplecode_web_1
  ```

## Deployment

Below script is the guide for deploying to heroku

* Login to heroku first by `heroku login` command
* Add heroku remotely to repository by `heroku git:clone -a your_heroku_app_name` command
* Add custom buildpacks that run `bundle` and `yarn install` on the target machine
by two following commands

  `heroku buildpacks:add https://github.com/heroku/heroku-buildpack-nodejs.git`

  `heroku buildpacks:add https://github.com/heroku/heroku-buildpack-ruby.git`

* Deploy to heroku by `git push heroku master` command
* Finally, run `heroku run rake db:migrate` command

Here’s an example https://nus-3r-demo.herokuapp.com/
