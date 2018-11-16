# Rescue Leftover Cuisine

Inside the README:
How to install all necessary software/dependencies for a dev to be able to run the app locally.
Steps for setting up a local database populated with sample data. (Seed files, etc.)
Any gotchas that aren’t intuitive.

# Dev Setup

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

1. You will need an empty `Gemfile.lock` in order to build your `Dockerfile`. You can delete and create a new blank dockerfile by running the following commands in the rails app root directory:

```
rm -rf Gemfile.lock
touch Gemfile.lock
```

2. Then, run following command to your containers:
```
docker-compose up -d
```

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
