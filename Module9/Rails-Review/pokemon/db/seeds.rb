# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Running seeds"

puts "Creating the Pokeworld"
10.times do
    Location.create(
        location:Faker::Games::Pokemon.location 
    )
end

puts "Getting the Pokeworld"

locations = Location.all

puts "Creating the Pokemon"
50.times do
    Name.create(
        pokemon_name:Faker::Games::Pokemon.name,
        level:rand(1..50),
        location:locations.sample
    )
end





puts "All done!"