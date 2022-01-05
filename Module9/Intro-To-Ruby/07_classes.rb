class Car
    def initialize make, model, year
        @make = make
        @model = model
        @year = year
    end

    def make 
        @make
    end

    def make= new_make
        @make = new_make
    end

    attr_reader :model
    attr_writer :model

    attr_accessor :year

end

my_car = Car.new "Toyota", "Rav4", "2015"

# my_car = {"Honda", "CRV", "2005"}

puts my_car.year