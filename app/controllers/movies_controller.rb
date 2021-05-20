class MoviesController < ApplicationController
  def index
    @movies = Movie.all.order(:title)
  end
end
