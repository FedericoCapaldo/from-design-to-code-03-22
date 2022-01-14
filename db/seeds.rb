movies = [
  "batman",
  "superman",
  "spiderman",
  "wonder woman",
  "thor",
  "black panther",
  "avengers"
]

movies.each do |movie|
  omdb_endpoint = "http://www.omdbapi.com/?s=#{movie}&apikey=a881ace5"

  serialized_data = URI.open(omdb_endpoint).read
  results = JSON.parse(serialized_data)["Search"]

  results.each do |result|
    next if result["Type"] != "movie" || result["Poster"] == "N/A"

    Movie.create(title: result["Title"], year: result["Year"].to_i, image_url: result["Poster"])
  end
end
