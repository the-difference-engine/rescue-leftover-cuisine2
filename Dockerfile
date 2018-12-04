FROM ruby:2.5.1
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev sudo net-tools && \
    # install node
    curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash - && \
    sudo apt-get install -y nodejs && \
    # install yarn
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list && \
    sudo apt-get update && sudo apt-get install yarn

ENV PATH=/usr/src/app/bin:$PATH RAILS_ENV=development
RUN mkdir -p /app/frontend
WORKDIR /app
COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock
RUN gem install bundler
COPY . /app