FROM ruby:2.5.1
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
ENV PATH=/usr/src/app/bin:$PATH RAILS_ENV=development
RUN mkdir /app
WORKDIR /app
COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock
COPY . /app

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

apt-get update && apt-get install yarn
