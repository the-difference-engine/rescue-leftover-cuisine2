#!/usr/bin/env bash
dir="$(pwd)"

echo "Linting JS... 🕵️"
$dir/node_modules/.bin/eslint $1 src/App.js src/App.test.js src/index.js 'src/*/**/*.js' && {
  echo "We're lint free! 🚀"
  echo
  sleep 1
} || {
  echo "Oh no! Lint! 😭"
  exit 1
}

echo "Linting CSS... 🕵️"
./node_modules/stylelint/bin/stylelint.js $1 'src/**/*.scss' && {
  echo "We're lint free! 🚀"
} || {
   echo "Oh no! Lint! 😭"
   exit 1
}
