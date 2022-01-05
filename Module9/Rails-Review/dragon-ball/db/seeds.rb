# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Running seeds..."

puts "Creating the planets"
10.times do
  Planet.create(
    planet_name: Faker::JapaneseMedia::DragonBall.planet
  )
end

puts "Retrieve the planets"
planets = Planet.all

puts "Creating the characters"
50.times do
  Character.create(
    character: Faker::JapaneseMedia::DragonBall.character,
    race: Faker::JapaneseMedia::DragonBall.race,
    num_dragonballs: rand(0..7),
    planet: planets.sample
  )
end

puts "All done!"
