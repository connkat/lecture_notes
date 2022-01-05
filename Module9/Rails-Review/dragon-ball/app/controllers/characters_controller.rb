class CharactersController < ApplicationController
  def index
    @planet = Planet.find(params[:planet_id])
    @characters = @planet.characters
  end
end
