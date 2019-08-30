# Rescue Leftover Cuisine

Inside the README:
How to install all necessary software/dependencies for a dev to be able to run the app locally.
Steps for setting up a local database populated with sample data. (Seed files, etc.)
Any gotchas that aren’t intuitive.

# Dev Setup

## Local Environment

### Language Versions

We require specific versions of Node (8.11.4) and Ruby (2.5.3) in this project. Though the application runs in a Docker container with fixed versions, you may need to run commands in your local environment, like linting and testing described below. In order to get the correct versions installed, it is recommended to use a VM (version manager) like [asdf-vm](https://asdf-vm.com/#/).

Loosely, you'll want to [install asdf](https://asdf-vm.com/#/core-manage-asdf-vm?id=install-asdf-vm), then run:

```
asdf plugin-add ruby
asdf install ruby 2.5.3

asdf plugin-add nodejs
asdf install nodejs 8.11.4
```

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

We use [`eslint`](https://eslint.org/) to help out with code styling for our front-end code (everything in the `frontend/` directory). Assuming you have the correct version of node installed, running the following command from within the `frontend/` directory will run the linter locally:

```
npm run lint
```

The linter can automatically fix _some_ styling mistakes if you run the following (also from within the `frontend/` directory):

```
npm run lint -- --fix
```

Note: You will have to run `npm install` before-hand (again, also from within the `frontend/` directory) in order for this to work.

### Editorconfig

We have a `.editorconfig` file which specifies some default text editor settings that should help with code styling (e.g. cleaning up whitespace). This requires a plugin to work, so follow the link below to the install instructions for you specific editor:

* [VSCode](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
* [Atom](https://atom.io/packages/editorconfig)
* [Sublime Text](https://github.com/sindresorhus/editorconfig-sublime)

### Environment Variables

We use [environment variables](https://medium.com/chingu/an-introduction-to-environment-variables-and-how-to-use-them-f602f66d15fa) to control some configuration aspects of the application. When deployed to Heroku, these values are set using the "config var" apparatus, but in our local development environment, we don't have access to those. In most cases, we rely on defaults in development, but there are a few cases where environment variables are necessary.

We use the `dotenv` [Ruby gem](https://github.com/bkeepers/dotenv) and [npm package](https://www.npmjs.com/package/dotenv). These packages allow us to define environment variables in our local environment using a file called `.env`. For example, the backend requires a variety of secret keys to generate JSON Web Tokens, and we define those in our `.env` file. When the application starts up, it reads those variables from that file.

Since the `.env` file can contain sensitive information, we don't commit it (it's [gitignored](https://git-scm.com/docs/gitignore)), so you need to create one on your local computer. To set yours up, copy the existing `.env.example` file to the `.env` file:

```
cp .env.example .env
```

This will provide the minimum you need to run the site on your local computer. If you need to work on signup/confirmation/forgot password workflows, you'll also need to set the sendgrid configuration to enable sending emails. Talk to a tech lead if you need those credentials.

## Docker

### New to Docker?
If you are completely new to Docker, please see the [Getting Started with Docker Guide](https://docs.docker.com/get-started/) on Docker's official website. Your first exposure to using containers can be confusing, so please don't hesitate to ask your team's Technical Lead for help.

### Install Docker
Select the installation guide below for your laptop's operating system:
- [**Mac OSX**](https://docs.docker.com/docker-for-mac/install/)
- [**Linux**](https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/#set-up-the-repository)
- [**Windows**](https://docs.docker.com/docker-for-windows/install/)

### Install Docker Compose
#### Mac OSX & Windows
For **Mac OSX** and **Windows** users, Docker Compose is already included with the Docker toolbox.

#### Linux
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

### Building rlc images
Build the docker images by running the following command:
```
docker-compose build
```
This will build your `web` image and download the `db` image.

### Running rlc-web containers

1. Run following command to start your containers:
```
docker-compose up
```

### Stopping rlc-web containers
You can try to stop the running containers from the running `docker-compose up` session by pressing CTRL-C.

You can delete the containers (resetting the database) entirely by running `docker-compose down`.

### Updating dependencies

Sometimes, someone else will add or update a dependency, whether that's a Ruby gem or an npm package. When that gets merged into staging, you'll need to download the update, as well. To do that, it's easiest to destroy your containers and rebuild the application:

```
docker-compose down
docker-compose build
```

### Resetting images/containers
Sometimes issues will come up with your Docker instance than cannot be solved with a simple `docker-compose up/down`. In these cases, it is recommended to use the "nuclear option" and wipe out all running containers and images and then rebuild them:

1. Stop all containers: `docker stop $(docker ps -aq)`
    * If you receive the message `"docker stop" requires at least 1 argument.` it means that there are no running containers; it is safe to proceed.
2. Remove all containers: `docker rm $(docker ps -aq)`
    * If you receive the message `"docker rm" requires at least 1 argument.` it means that there are no built containers; it is safe to proceed.
3. Remove all images: `docker rmi $(docker images -q)`
    * If you receive the message `"docker rmi" requires at least 1 argument.` it means that there are no downloaded images; it is safe to proceed.
4. Download images and rebuild containers: `docker-compose up`

# Deployment

The site is presently deployed to Heroku as two separate apps: the API and the frontend.

When the staging branch is updated, it automatically deploys to the staging app, which you can find at https://rlc-stg.herokuapp.com/

When the master branch is updated, it automatically deploys to the production app, which you can find at https://rlc-prod.herokuapp.com/

We typically use the staging app to do QA at the end of each sprint, before merging the completed work into master. We demo from the production app.

# Dependencies

For icons throughout the site, we use [icons8](https://icons8.com/).

We use React on the frontend, employing Bootstrap and Reactstrap for styling.

We use Ruby on Rails in API mode on the backend, with Devise for authentication.

# Project directory structure

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
