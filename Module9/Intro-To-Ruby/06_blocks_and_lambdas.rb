dogs = ['Ziggy', "Milly", "Odie"]

dogs.each do |dog_name|
  puts "hello there #{dog_name}"
end

my_thing_to_do = lambda { |dog_name|
  puts "hello there #{dog_name}"
}

users = ['Alice', 'Bob', 'Carol']

dogs.each &my_thing_to_do
users.each &my_thing_to_do