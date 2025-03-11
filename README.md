# fantasyRace
<img src="src/assets/logo.png" alt="" width=100px >

FantasyRace

General Features:

    • JavaScript project with the Vue.js framework, using Vite (development environment), router, Pinia, Cypress, and a composable.
    • Jira: Tool for creating, assigning, and tracking tasks within the project.
    • Figma: Tool for designing different views or mockups.
    • Github: Shared project repository with version control using Git. An organization has been created, roles have been assigned within the organization, and work has been done on branches using pull requests to verify content before merging with the main branch.
    • Responsive CSS design: Using relative measurements and media queries with breakpoints for mobile, tablet, and desktop views.

Project Description:

    Our project is a game based on the results of Formula 1 competitions or Grand Prix races held from the year 2000 to the present.
    The game consists of the following steps:
        1. Select a year.
        2. Choose one of the races held that year.
        3. Select one of the teams (escuderías) that participated in the race.
        4. Finally, choose one of the drivers from the selected team who competed in the race.

    You receive a score based on the podium positions achieved by the selected team and driver in the chosen race.
    Scoring for teams and drivers:
    If you get the correct answer
    If the player guesses the podium positions correctly, he will be given the following punctuations/scores
        • First position: 25 points.
        • Second position: 18 points.
        • Third position: 15 points.

    These are the same points awarded to teams and drivers who finish on the podium in a Formula 1 Grand Prix.
    The scores obtained in different game sessions are accumulated to get a total score. A user ranking is established based on total scores and the number of games played.

    User must be registered and logged in before starting a game or accessing their data.

Technical part of the project

    1- Various pages or views have been created in src/views: home, login, registration, ratings, etc.
    2- There are components that are displayed in the different views: src/components:
    3- A router has been created to manage all the link routes within the project. src/router/index.js
    4- There is a store file to manage the data that will be saved in the local Storage. Pinia has been used to create this store. This allows for data reactivity. That is, any component has access to the data updated in real time. src/store/useF1Store.js
    5- A composable file manage all the http requests to the API. src/composable/useFetchApi.js
    6- A local json server has been setup. Itt acts as a fake-server, in which the user's registration data, game data and total score are stored.


A public API has been used. These are the main endpoints:
    1- list of races from a year
    https://api.jolpi.ca/ergast/f1/2024.json
    It shows us the list of circuits where GP races were held in the indicated year.
    2-race data
    https://api.jolpi.ca/ergast/f1/2024/2/results.json
    It tells us a wide variety of data from a specific race, such as participating teams and drivers or classifications, among others.
    3-Documentation of this API at:
    https://github.com/jolpica/jolpica-f1


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) 

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Headed Component Tests with [Cypress Component Testing](https://on.cypress.io/component)

```sh
npm run test:unit:dev # or `npm run test:unit` for headless testing
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```
