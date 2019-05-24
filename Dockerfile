FROM ruby:2.5.3

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev sudo net-tools && \
    curl -sSL "https://nodejs.org/dist/v8.11.4/node-v8.11.4-linux-x64.tar.gz" | tar -C /usr --strip-components=1 -xz

RUN mkdir -p /app/frontend
ENV PATH=/app/bin:$PATH RAILS_ENV=development
WORKDIR /app
COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock
RUN gem install bundler -v 1.17.3
COPY . /app
