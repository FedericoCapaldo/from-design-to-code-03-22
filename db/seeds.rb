require "open-uri"
require "yaml"

file = "https://gist.githubusercontent.com/juliends/461638c32c56b8ae117a2f2b8839b0d3/raw/3df2086cf31d0d020eb8fcf0d239fc121fff1dc3/imdb.yml"
sample = YAML.safe_load(open(file).read)

puts 'Creating movies...'
sample["movies"].each do |movie|
  Movie.create! movie.slice("title", "year", "synopsis")
end
