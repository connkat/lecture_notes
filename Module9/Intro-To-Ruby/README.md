# Module9W22 - Intro to Ruby

Welcome to Ruby world! You'll notice there are a lot of different things happening in Ruby, but also a lot of similar syntax that you have already experienced with javascript. Apologies for my lack of syntax-knowledge when it comes to lambdas---I've updated the notes with correct syntax for you to check out. You won't see much of lambdas in your Jungle project, but you will see plenty of the rest of the things that we covered tonight. 

Happy holidays!

- [lecture recording](https://vimeo.com/656871017/d6e1f919bb)
- [notes](https://github.com/connkat/lecture_notes/tree/master/Module9/Intro-To-Ruby)

## TODO
- [x] Ruby Intro
- [x] Variables
- [x] Conditionals
- [x] Loops
- [x] Methods
- [x] Hashes
- [x] Blocks and Lambdas

## Intro


### Classes
- You declare a class in Ruby with the class keyword.

```
class Car
end
```

### Initialize

- `initialize` is a special method in classes that is called when a class object is created with .new
- `initialize` methods are used to set the initial state of an object.

```
class Car
 def initialize (color, year, model)
   @color = color
   @year = year
   @model = model
 end
end

my_car = Car.new("red", 2007, "matrix")
```

### Accessors && Readers
- You can set default read and write methods for instance variables with accessor and readers.

```
class Car
 attr_accessor :color
 attr_reader :year
 attr_writer :model

 def initialize (color, year, model)
   @color = color
   @year = year
   @model = model
 end
end
```

Same as:

```
class Car
 def initialize (color, year, model)
   @color = color
   @year = year
   @model = model
 end

 def color
   @color
 end
 def color=(value)
   @color = value
 end

 def year
   @year
 end

 def model=(value)
   @model = value
 end
end
```