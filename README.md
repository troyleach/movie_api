READEME.md

Built by Troy Leach

November 12, 2020,

# movie_api


## Requirements
npm v6.14.8

node v14.12.0

# Available Scripts
In the project directory, you can run:

`npm run ns`

Runs the app in development mode using nodemon. The server
will restart on save.

`npm start`

runs the app in development mode. The server will not restart on save.

`http://localhost:3010`

live on Heroku:

`https://dev-movie-api.herokuapp.com/`

the root will give you a list of endpoints.

### Routes

`GET`

```javascript
/ratings
/auth
/movies?page=2
/movies/:id
/movies?page=1&year=2020&sort=ASC // not built
/movies?page=1&genre=horror // not built
```

You can open up your favorite [API Client](https://www.postman.com/) to explore these routes.
> If postman is being used you can find a json file named `Aetna Movie API.posttman_collection.json` in the root of this project that you can import.


# Environment variables

none

# Database
No set up is needed. ~~However I did have some issues with the path. currently hard coded. NOT ideal~~.

> I feel this has been resolved.

# Set up the API
`npm install`

# Testing
### Notes on testing
I did not build the test suite like I wanted. I would never use the real db to run tests. In the interest of time that is what I did here.

One thought I had would be to mock the database calls, then I could also control what the db was responding with.

Second thought is have a test database but I think a project of this size, mocking the response would be just fine.

A [Jest](https://jestjs.io) test harness has been set up. Tests are found in
the `test` directory, replicating the style of a Rails/Sails application where
the directory structure is (basically) mirrored inside `test`.

To execute the tests one time, execute `npm test` (or `npm run test`). To
execute the tests in "watch-mode" (where tests will be run after every file
change), execute `npm run test:watch`.

# Migrations

none used or needed

# Logging 
Again with the interest of time I did not install logging, however logging is critical in maintaining an API.
I would have used [morgan](http://expressjs.com/en/resources/middleware/morgan.html) I have used morgan in the past and thought it was cool.

# Monitoring
Obviously there is no monitoring required but again, if the app has logging it should have a good way to monitor what is going on. I have used New Relic in the past. so so important to have some sort of monitoring system.

# Challenges
Using two db was a bit challenging for me. I couldn't decide the best route to take. Do I create models or just write queries for everything I needed and craft the payload as needed. I decided to use [Sequelize](https://sequelize.org/master/). In the interest of time I thought this would be best to get the most amount work done in a short time. Other then the associations this was the easier route for me.

Timeboxing, I wanted to do everything... I tried to touch most things I would do in production API, if I did not write code I tried to leave comments. This is not to say I didn't miss something. Everything can be refactored and or improved upon.

-- END --