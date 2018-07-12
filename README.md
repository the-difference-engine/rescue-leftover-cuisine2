# rescue-leftover-cuisine

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
This will build your `db`, and `rlc_web` images

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

### Initial container setup
If this is your first time running these containers, you will need to perform the following commands to setup the project:

1. find your rlc-web container

```
docker ps

```

2. run the followin command to connect to the container's shell

```
docker exec -it <container_id> bash
```

3. Create and migrate database

```
RAILS_ENV=development db:create
RAILS_ENV=development rails db:migrate
```
This will create and migrate all databases in `config/database.yml`.
