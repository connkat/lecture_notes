class PlanetsController < ApplicationController
  def index
    @planets = Planet.all
    render json: @planets
  end
end
