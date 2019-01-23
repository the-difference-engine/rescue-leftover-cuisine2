# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# examples creating Recipe row using rails console
#Recipe.create(title: "Lasagna", snippet: "Lots of tomato sauce and cheese and pasta", ingredients: ["eggs","pasta","cheese"], directions: ["put ingredients in bowl","stir","put in pan","bake it"], difficulty: "Intermediate",duration:30,servings:4)
#Recipe.create(title: "Cookies", snippet: "chocolate chip heaven", ingredients: ["flour","eggs","chocolate chips"], directions: ["stir ingredients","make 1 inch balls","place on cookie sheet 2 inches apart","bake at 350 degress"], difficulty: "Beginner",duration:45,servings:6)

#Comment.create(name: "Hal", text: "This is pretty good i guess", recipe_id: 1)

# examples creating User row using rails console
#User.create(email: "bob@domain.com", password: "Bob@RLC123", password_confirmation: "Bob@RLC123", username: "Bob@RLC", first_name: "Bob", last_name: "Domain", created_at: "2018-04-27 09:34:41.306138", updated_at: "2018-04-27 09:34:41.306138")
#User.create(email: "joe@domain.com", password: "Joe@RLC123", password_confirmation: "Joe@RLC123", username: "Joe@RLC",first_name: "Bob", last_name: "Domain", created_at: "2019-01-20 09:34:41.306138", updated_at: "2018-01-20 09:34:41.306138")

# examples creating Tag row using rails console
#Tag.create(title: "Easy")
#Tag.create(title: "Intermediate")
#Tag.create(title: "Difficult")