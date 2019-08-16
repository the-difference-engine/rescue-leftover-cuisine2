# Rescue Leftover Cuisine

Inside the README:
How to install all necessary software/dependencies for a dev to be able to run the app locally.
Steps for setting up a local database populated with sample data. (Seed files, etc.)
Any gotchas that aren’t intuitive.

# Dev Setup

## Local Environment

### Language Versions

We require specific versions of Node (8.11.4) and Ruby (2.5.3) in this project. In order to get the correct versions installed, it is recommened to use a VM (version manager) like [asdf-vm](https://asdf-vm.com/#/).

### Lodash

This project uses [`lodash`](https://lodash.com/docs/4.17) to provide some additional JavaScript helper functions. Check out lodash's developer documentation, it's super helpful.

If you find a function you'd like to use (e.g. [`map`](https://lodash.com/docs/4.17.11#map)), you should import it individually at the top of your file like so:

```javascript
import map from 'lodash/map';
```

### Testing

This project uses [`jest` 23.x](https://jestjs.io/docs/en/23.x/getting-started.html) for unit testing. Use the `npm test` command from within the `frontend` folder to run the existing tests.

In order to add new tests for a component (e.g. `YourComponent.js`), add a `YourComponent.test.js` file to the same folder as the component you would like to test.

### Linting

We use `[eslint](https://eslint.org/)` to help out with code styling for our front-end code (everything in the `frontend/` directory). Assuming you have the correct version of node installed, running the following command from within the `frontend/` directory will run the linter locally:

```
npm run lint
```

The linter automatically fix _some_ styling mistakes if you run the following (also from within the `frontend/` directory):

```
npm run lint -- --fix
```

Note: You will have to run `npm install` before-hand (again, also from within the `frontend/` directory) in order for this to work.

### Editorconfig

We have a `.editorconfig` file which specifies some default text editor settings that should help with code styling (e.g. cleaning up whitespace). This requires a plugin to work, so follow the link below to the install instructions for you specific editor:

* [VSCode](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
* [Atom](https://atom.io/packages/editorconfig)
* [Sublime Text](https://github.com/sindresorhus/editorconfig-sublime)

## Docker

### New to Docker?
If you are completely new to Docker, please see the [Getting Started with Docker Guide](https://docs.docker.com/get-started/) on Docker's official website. Your first exposure to using containers can be confusing, so please  don't hesitate to ask your team's Technical Lead for help.

### Install Docker
Select the installation guide below for your laptop's operating system:
- [**Mac OSX**](https://docs.docker.com/docker-for-mac/install/)
- [**Linux**](https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/#set-up-the-repository)
- [**Windows**](https://docs.docker.com/docker-for-windows/install/)

## Install Docker Compose
### Mac OSX & Windows
For **Mac OSX** and **Windows** users, Docker Compose is already included with the Docker toolbox.

### Linux
For linux users, you will have to install the docker compose binary from the [Docker Compoose release repository](https://github.com/docker/compose/releases). Please follow the instructions below to properly install docker compose:

1. Run this command in your terminal to install the Docker Compose binary

```
sudo curl -L https://github.com/docker/compose/releases/download/1.22.0-rc2/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

2. Apply [executable permissions](https://ryanstutorials.net/linuxtutorial/permissions.php) to the binary

```
sudo chmod +x /usr/local/bin/docker-compose
```

3.) Run the following command to confirm that Docker Compose was properly installed:
```
docker-compose --version
```
You should expect the results to look similar to:
```
docker-compose version 1.22.0, build something
```

## Building rlc images
Build the docker images by running the following command:
```
docker-compose build
```
This will build your `db`, and `web` images

## Running rlc-web containers

1. Run following command to start your containers:
```
docker-compose up
```

## Stopping rlc-web containers
You can try to stop the running containers from the running `docker-compose up` session by pressing CTRL-C.

You can delete the containers (resetting the database) entire by running `docker-compose down`.

## Staging
You can preview what the applicaton will look a production-ish environment by merging changes into the `staging` branch:

```
git checkout staging
git merge my-feature-branch
git push origin staging
```

This will kick off a build in Heroku, and, after a minute or three, your changes should be visible at https://rescue-leftover-cuisine-stage.herokuapp.com/

## Resetting images/containers
Sometimes issues will come up with your Docker instance than cannot be solved with a simple `docker-compose up/down`. In these cases, it is recommended to use the "nuclear option" and wipe out all running containers and images and then rebuild them:

1. Stop all containers: `docker stop $(docker ps -aq)`
    * If you receive the message `"docker stop" requires at least 1 argument.` it means that there are no running containers; it is safe to proceed.
2. Remove all containers: `docker rm $(docker ps -aq)`
    * If you receive the message `"docker rm" requires at least 1 argument.` it means that there are no built containers; it is safe to proceed.
3. Remove all images: `docker rmi $(docker images -q)`
    * If you receive the message `"docker rmi" requires at least 1 argument.` it means that there are no downloaded images; it is safe to proceed.
4. Download images and rebuild containers: `docker-compose up`

## Dependencies

For icons throughout the site, we use [icons8](https://icons8.com/).

We use React on the frontend, employing Bootstrap and Reactstrap for styling.

We use Ruby on Rails in API mode on the backend, with Devise for authentication.

## Project directory structure

In order to keep our code organized, we'll store our files using something like
the following directory structure:

```
frontend/
|-- node_modules/
|
|-- public/
|   |-- index.html
|
|-- src/
|   |-- assets/  # This is only temporary!
|   |
|   |-- components/
|   |   |-- App/
|   |   |   |-- App.js
|   |   |   |-- App.css
|   |   |
|   |   |-- LogIn/
|   |   |   |-- LogIn.js
|   |   |   |-- LogIn.css
|   |   |
|   |   |-- RecipeCard/
|   |   |   |-- RecipeCard.js
|   |   |   |-- RecipeCard.css
|   |   |
|   |   |-- YetAnotherComponent/
|   |       |-- YetAnotherComponent.js
|   |       |-- YetAnotherComponent.css
|   |
|   |-- containers/
|   |   |-- HomePage/
|   |       |-- HomePage.js
|   |       |-- HomePage.css
|   |
|   |-- index.js
|
|-- package.json
|-- README.md
```
