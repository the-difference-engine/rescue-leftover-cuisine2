# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Recipe.create(title: "Lasagna", description: "Lots of tomato sauce and cheese and pasta", ingredients: "stuff", directions: "bake it", difficulty: "Intermediate")

Recipe.create(title: "Cookies", description: "chocolate chip", ingredients: "other stuff", directions: "use the ones on the box", difficulty: "Beginner")

Comment.create(name: "Hal", text: "This is pretty good i guess", recipe_id: 1)