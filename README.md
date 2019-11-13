# Rescue Leftover Cuisine

Inside the README:
How to install all necessary software/dependencies for a dev to be able to run the app locally.
Steps for setting up a local database populated with sample data. (Seed files, etc.)
Any gotchas that aren’t intuitive.

# Dev Setup

We require specific versions of Node (8.11.4) and Ruby (2.5.3) in this project. Though the application runs in a Docker container with fixed versions, you may need to run commands in your local environment, like linting and testing described below. In order to get the correct versions installed, it is recommended to use a VM (version manager) like [asdf-vm](https://asdf-vm.com/#/).


## Local Environment Setup
If you've already used a package manager like rvm or rbenv for ruby or npm for node on your machine, make sure you have ruby 2.5.3 and node 8.11.4 installed for this project. Otherwise, please follow the instructions for installing asdf below:

### ASDF

You'll need to [install asdf](https://asdf-vm.com/#/core-manage-asdf-vm?id=install-asdf-vm), then run:

```
asdf plugin-add ruby
asdf install ruby 2.5.3

asdf plugin-add nodejs
asdf install nodejs 8.11.4
```

### Docker

#### New to Docker?
If you are completely new to Docker, please see the [Getting Started with Docker Guide](https://docs.docker.com/get-started/) on Docker's official website. Your first exposure to using containers can be confusing, so please don't hesitate to ask your team's Technical Lead for help.

#### Install Docker
Select the installation guide below for your laptop's operating system:
- [**Mac OSX**](https://docs.docker.com/docker-for-mac/install/)
- [**Linux**](https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/#set-up-the-repository)
- [**Windows**](https://docs.docker.com/docker-for-windows/install/)

#### Install Docker Compose
##### Mac OSX & Windows
For **Mac OSX** and **Windows** users, Docker Compose is already included with the Docker toolbox.

##### Linux
For linux users, you will have to install the docker compose binary from the [Docker Compoose release repository](https://github.com/docker/compose/releases). Please follow the instructions below to properly install docker compose:

1. Run this command in your terminal to install the Docker Compose binary

```
sudo curl -L https://github.com/docker/compose/releases/download/1.22.0-rc2/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

<<<<<<< HEAD
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
=======
2. Apply [executable permissions](https://ryanstutorials.net/linuxtutorial/permissions.php) to the binary
>>>>>>> 03692cb8d40b180e9d1069f8b78573ca1616e50a

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

After you're done setting up your local environment, you can read more about Docker and find some useful commands below, under "More about Docker"

### Environment Variables

We use [environment variables](https://medium.com/chingu/an-introduction-to-environment-variables-and-how-to-use-them-f602f66d15fa) to control some configuration aspects of the application. When deployed to Heroku, these values are set using the "config var" apparatus, but in our local development environment, we don't have access to those. In most cases, we rely on defaults in development, but there are a few cases where environment variables are necessary.

We use the `dotenv` [Ruby gem](https://github.com/bkeepers/dotenv) and [npm package](https://www.npmjs.com/package/dotenv). These packages allow us to define environment variables in our local environment using a file called `.env`. For example, the backend requires a variety of secret keys to generate JSON Web Tokens, and we define those in our `.env` file. When the application starts up, it reads those variables from that file.

Since the `.env` file can contain sensitive information, we don't commit it (it's [gitignored](https://git-scm.com/docs/gitignore)), so you need to create one on your local computer. To set yours up, copy the existing `.env.example` file to the `.env` file:

```
cp .env.example .env
```

This will provide the minimum you need to run the site on your local computer. If you need to work on signup/confirmation/forgot password workflows, you'll also need to set the sendgrid configuration to enable sending emails. Talk to a tech lead if you need those credentials.


### Editorconfig

Please install one of the following code editors (unless you're already using one of them): VSCode, Atom, Sublime Text

We have a `.editorconfig` file which specifies some default text editor settings that should help with code styling (e.g. cleaning up whitespace). This requires a plugin to work, so follow the link below to the install instructions for you specific editor:

* [VSCode](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
* [Atom](https://atom.io/packages/editorconfig)
* [Sublime Text](https://github.com/sindresorhus/editorconfig-sublime)


The local setup ends here. Please continue to read about Steps to Develop Locally, about more tools and useful commands we're using, below:
_________________________________________________________________________________________________________

## Steps to spin the app locally

1. Clone this repository locally unless you've already done so:
git clone git@github.com:the-difference-engine/rescue-leftover-cuisine2.git

2. in your terminal, navigate locally to the rescue-leftover-cuisine2 folder

3. run 'bundle install'

4. run 'rails server' or 'rails s' to start the server

5. Change your current working directory to the `frontend` folder (`cd frontend` if you're currently in the project root)

6. Run `npm install`

7. Run `PORT=5000 npm start`

8. Navigate to 'http://localhost:5000' in your browser


## Steps to develop locally

1. Ask your product manager to assign you on a Zenhub ticket.
Ask questions and try to understand your requirement.

2. Make a new git branch off of the staging branch

3. On the new feature branch, start developing your solution. Try to commit often to be able to follow your progress.

4. Feel free to run `rails console` and http://localhost:5000 to visually test your changes.

5. Push you branch up: 'git push origin *branch_name*' or 'git push origin HEAD'

6. In Github, make a Pull Request (PR), and make sure a tech lead or mentor is marked as a reviewer or assignee

  1. Follow-up on the reviewer's feedback, and implement any requested code changes in your local branch

  2. Push your local changes up to Github, making sure your local branch is up-to-date with the latest version of the `staging` branch

  3. Re-request a review from a tech lead or mentor

  4. Repeat steps 6a through 6c until your PR is approved

  5. Merge your branch into Github

7. Mark your ticket as Done in Zenhub.
Congrats on getting it done!


# Deployment

The site is presently deployed to Heroku as two separate apps: the API and the frontend.

When the staging branch is updated, it automatically deploys to the staging app, which you can find at https://rlc-stg.herokuapp.com/

When the master branch is updated, it automatically deploys to the production app, which you can find at https://rlc-prod.herokuapp.com/

We typically use the staging app to do QA at the end of each sprint, before merging the completed work into master. We demo from the production app.


# Other useful tools and commands

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

### Dependencies

For icons throughout the site, we use [icons8](https://icons8.com/).

We use React on the frontend, employing Bootstrap and Reactstrap for styling.

We use Ruby on Rails in API mode on the backend, with Devise for authentication.

# More about Docker

Useful commands for using Docker:
## Building rlc images
Build the docker images by running the following command:
```
docker-compose build
```
This will build your `web` image and download the `db` image.

## Running rlc-web containers

1. Run following command to start your containers:
```
docker-compose up
```

## Stopping rlc-web containers
You can try to stop the running containers from the running `docker-compose up` session by pressing CTRL-C.

You can delete the containers (resetting the database) entirely by running `docker-compose down`.

#### Updating dependencies

Sometimes, someone else will add or update a dependency, whether that's a Ruby gem or an npm package. When that gets merged into staging, you'll need to download the update, as well. To do that, it's easiest to destroy your containers and rebuild the application:

```
docker-compose down
docker-compose build
```

## Resetting images/containers
Sometimes issues will come up with your Docker instance than cannot be solved with a simple `docker-compose up/down`. In these cases, it is recommended to use the "nuclear option" and wipe out all running containers and images and then rebuild them:

1. Stop all containers: `docker stop $(docker ps -aq)`
    * If you receive the message `"docker stop" requires at least 1 argument.` it means that there are no running containers; it is safe to proceed.
2. Remove all containers: `docker rm $(docker ps -aq)`
    * If you receive the message `"docker rm" requires at least 1 argument.` it means that there are no built containers; it is safe to proceed.
3. Remove all images: `docker rmi $(docker images -q)`
    * If you receive the message `"docker rmi" requires at least 1 argument.` it means that there are no downloaded images; it is safe to proceed.
4. Download images and rebuild containers: `docker-compose up`


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
