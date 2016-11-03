# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest_login = User.create(username: "guest", password: "password")
test_login = User.create(username: "vince", password: "password")

City.create(name: "San Francisco", image_url: "media.otstatic.com/img/metros/us-san-francisco-aa3420f9bb8f33c79df53521f413756d.jpg")
City.create(name: "New York Area", image_url: "media.otstatic.com/img/metros/us-new-york-city-9537c56f295fe358cee957581f1c3f78.jpg")
City.create(name: "Los Angeles", image_url: "media.otstatic.com/img/metros/us-los-angeles-8f2f00f7aa446546f977b53e26c16029.jpg")
City.create(name: "Miami", image_url: "media.otstatic.com/img/metros/us-miami-fd879bb9ac0e7e21aad607f6e03e529d.jpg")
City.create(name: "Las Vegas", image_url: "media.otstatic.com/img/metros/us-las-vegas-c52ae0ec450fe61b46886daa2e06f284.jpg")
City.create(name: "Chicago", image_url: "media.otstatic.com/img/metros/us-chicago-3db15f197bbdb319ee7de67241189d66.jpg")

Restaurant.create(name: "Waterbar", image_url: "http://resizer.otstatic.com/v2/photos/large/23367687.jpg", category: "Seafood", price: 3, address: "399 The Embarcadero South", state: "CA", zip_code: "94105", city_id: 1, description: "Waterbar is a seafood-centric restaurant located on the waterfront with spectacular panoramic views of the bay and city skyline")
