FROM ruby:2.5.3

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev sudo net-tools && \
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash && \
    export NVM_DIR="$HOME/.nvm" && \
    . $NVM_DIR/nvm.sh && \
    nvm install 8.11.4
    # install yarn
    # curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - && \
    # echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list && \
    # sudo apt-get update && sudo apt-get install yarn

RUN mkdir -p /app/frontend
ENV PATH=/app/bin:$PATH RAILS_ENV=development
WORKDIR /app
COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock
RUN gem install bundler
COPY . /app
