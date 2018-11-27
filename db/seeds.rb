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

Admin.create(email: "generico@hotmail.com", password: "Complicated&3", password_confirmation: "Complicated&3", sign_in_count: 0, created_at: "2018-04-27 09:34:41.306138", updated_at: "2018-04-27 09:34:41.306138", super_admin: true)

#User.create(email: "bob@domain.com", password: "Bob@RLC123", password_confirmation: "Bob@RLC123", user_name: "Bob@RLC", first_name: "Bob", last_name: "Domain", sign_in_count: 0, created_at: "2018-04-27 09:34:41.306138", updated_at: "2018-04-27 09:34:41.306138")

#User.create!(email: "joe@domain.com", password: "Joen@RLC123", password_confirmation: "Joe@RLC123", user_name: "Joe@RLC", first_name: "Joe", last_name: "Domain", sign_in_count: 0, created_at: "2018-04-27 09:34:41.306138", updated_at: "2018-04-27 09:34:41.306138")