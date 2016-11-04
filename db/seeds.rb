# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest_login = User.create(username: "guest", password: "password")
test_login = User.create(username: "vince", password: "password")

City.create(name: "San Francisco", image_url: "https://res.cloudinary.com/openbistro/image/upload/v1478134303/Cities/city-sf_fheb0c.jpg")
City.create(name: "New York Area", image_url: "https://res.cloudinary.com/openbistro/image/upload/v1478134301/Cities/city-ny_idkoqf.jpg")
City.create(name: "Los Angeles", image_url: "https://res.cloudinary.com/openbistro/image/upload/v1478134291/Cities/city-la_urfser.jpg")
City.create(name: "Miami", image_url: "https://res.cloudinary.com/openbistro/image/upload/v1478134299/Cities/city-mia_luyl0g.jpg")
City.create(name: "Las Vegas", image_url: "https://res.cloudinary.com/openbistro/image/upload/v1478134295/Cities/city-lv_vjzscn.jpg")
City.create(name: "Chicago", image_url: "https://res.cloudinary.com/openbistro/image/upload/v1478134289/Cities/city-chi_d7stvz.jpg")

# SF
Restaurant.create(name: "Waterbar", image_url: "https://res.cloudinary.com/openbistro/image/upload/v1478193088/Restaurant%20Index/waterbar.jpg", category: "Seafood", price: 3, address: "399 The Embarcadero South", state: "CA", zip_code: "94105", city_id: 1, description: "Waterbar is a seafood-centric restaurant located on the waterfront with spectacular panoramic views of the bay and city skyline.")
Restaurant.create(name: "Akiko's Restaurant & Sushi Bar", image_url: "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-index/akiko.jpg", category: "Japanese", price: 4, address: "431 Bush Street", state: "CA", zip_code: "94108", city_id: 1, description: "Akiko means “autumn child; iris, bright and light” in Japanese. When entering our space guests will see rustic-earth tones, imported rosewood floors, exposed brick walls, and varied place settings on unique oak tables.")
Restaurant.create(name: "River's End", image_url: "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-index/rivers-end.jpg", category: "American", price: 3, address: "11048 Highway 1", state: "CA", zip_code: "95450", city_id: 1, description: "The epicenter of Sonoma Coast dining...the River's End is located in the quaint village of Jenner by the Sea about 20 minutes north of Bodega Bay. The restaurant is set on a bluff overlooking the Russian River spill into the Pacific Ocean.")

# LA
Restaurant.create(name: "ink.", image_url: "http://res.cloudinary.com/openbistro/image/upload/v1478193090/Restaurant%20Index/ink.jpg", category: "American", price: 4, address: "8360 Melrose Avenue #101", state: "CA", zip_code: "90069", city_id: 3, description: "ink. is chef michael voltaggio’s first signature restaurant. alluding to the idea of permanence, ink. endeavors to create an indelible impression with flavor profiles that are inspired by the myriad of cultures that make up the city of los angeles.")
