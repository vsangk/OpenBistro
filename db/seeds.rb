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
Restaurant.create(name: "Waterbar", image_url: "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-index/waterbar.jpg",
  category: "Seafood", price: 3, address: "399 The Embarcadero South", city_name: "San Francisco", state: "CA", zip_code: "94105", neighborhood: "Embarcadero", city_id: 1,
  description: "Waterbar is a seafood-centric restaurant located on the waterfront with spectacular panoramic views of the bay and city skyline.",
  detail_image_url: ["https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/waterbar-1.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/waterbar-2.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/waterbar-3.jpg"])
Restaurant.create(name: "Akiko's", image_url: "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-index/akiko.jpg",
  category: "Japanese", price: 4, address: "431 Bush Street", city_name: "San Francisco", state: "CA", zip_code: "94108", neighborhood: "Union Square", city_id: 1,
  description: "Akiko means “autumn child; iris, bright and light” in Japanese. When entering our space guests will see rustic-earth tones, imported rosewood floors, exposed brick walls, and varied place settings on unique oak tables.",
  detail_image_url: ["https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/akiko-1.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/akiko-2.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/akiko-3.jpg"])
Restaurant.create(name: "River's End", image_url: "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-index/rivers-end.jpg",
  category: "American", price: 3, address: "11048 Highway 1", city_name: "San Francisco", state: "CA", zip_code: "95450", neighborhood: "Bodega Bay", city_id: 1,
  description: "The epicenter of Sonoma Coast dining...the River's End is located in the quaint village of Jenner by the Sea about 20 minutes north of Bodega Bay. The restaurant is set on a bluff overlooking the Russian River spill into the Pacific Ocean.",
  detail_image_url: ["https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/river-1.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/river-2.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/river-3.jpg"])
Restaurant.create(name: "El Techo", image_url: "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-index/el-techo.jpg",
  category: "Latin American", price: 2, address: "2518 Mission Street", city_name: "San Francisco", state: "CA", zip_code: "94110", neighborhood: "Mission", city_id: 1,
  description: "El Techo is the heated and covered open-air rooftop restaurant above Lolinda. Offering sweeping city views, pan-Latin American casual cuisine, and crafty classic cocktails, we are the perfect venue for your celebration or as a compliment to your dinner at the Mission's finest steakhouse.",
  detail_image_url: ["https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/techo-1.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/techo-2.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/techo-3.jpg"])

# NY
Restaurant.create(name: "Barbuto", image_url: "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/barbuto-home.jpg",
  category: "Italian", price: 3, address: "775 Washington Street", city_name: "New York", state: "NY", zip_code: "10014", neighborhood: "Meatpacking District", city_id: 2,
  description: "Barbuto is a casual Italian Eatery in the Meat Packing District featuring the seasonal green market cuisine of Jonathan Waxman. We accept reservations for parties of three or more and all parties of two are accommodated on a walk-in basis.",
  detail_image_url: ["https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/barbuto-1.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/barbuto-2.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/barbuto-3.jpg"])
Restaurant.create(name: "Dirty Candy", image_url: "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/dirt-home.jpg",
  category: "American", price: 3, address: "86 Allen Street", city_name: "New York", state: "NY", zip_code: "10002", neighborhood: "East Village", city_id: 2,
  description: "Cutting edge vegetarian food with added flavor and no politics in this sleek and stylish restaurant showcasing colorful, pop-tastic dishes from award-winning chef, Amanda Cohen. A full bar, counter seating, a wine list of cult favorites from around the world, two stars from the New York Times, and vegetables presented in all their earth-shattering, gob-smacking glory.",
  detail_image_url: ["https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/dirt-1.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/dirt-2.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/dirt-3.jpg"])
Restaurant.create(name: "Soco", image_url: "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/soco-home.jpg",
  category: "Southern", price: 1, address: "509 Myrtle Avenue", city_name: "Brooklyn", state: "NY", zip_code: "11205", neighborhood: "Clinton Hill", city_id: 2,
  description: "Soco is located in Brooklyn. We serve Cajun-Southern food.",
  detail_image_url: ["https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/soco-1.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/soco-2.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/soco-3.jpg"])
Restaurant.create(name: "Jams", image_url: "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/jams-home.jpg",
  category: "American", price: 2, address: "1414 6th Avenue", city_name: "New York", state: "NY", zip_code: "10019", neighborhood: "Midtown West", city_id: 2,
  description: "Celebrity chef Jonathan Waxman's new restaurant with an emphasis on seasonal ingredients and an air of simplicity serving breakfast, lunch and dinner.",
  detail_image_url: ["https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/jams-1.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/jams-2.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/jams-3.jpg"])
Restaurant.create(name: "Bar SixtyFive", image_url: "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/sixtyfive-home.jpg",
  category: "American", price: 3, address: "30 Rockefellar Plaza", city_name: "New York", state: "NY", zip_code: "10112", neighborhood: "Midtown", city_id: 2,
  description: "The highest outdoor terrace bar in New York City creates an elevated lounge experience 65 stories above the landmark Rockefeller Center. Bar SixtyFive at Rainbow Room offers playful bistro fare and curated cocktails in a polished vintage gem framed by awe-inspiring urban views.",
  detail_image_url: ["https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/sixtyfive-1.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/sixtyfive-2.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/sixtyfive-3.jpg"])

# LA
Restaurant.create(name: "ink.", image_url: "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-index/ink.jpg",
  category: "American", price: 4, address: "8360 Melrose Avenue #101", city_name: "West Hollywood", state: "CA", zip_code: "90069", neighborhood: "West Hollywood", city_id: 3,
  description: "ink. is chef michael voltaggio’s first signature restaurant. alluding to the idea of permanence, ink. endeavors to create an indelible impression with flavor profiles that are inspired by the myriad of cultures that make up the city of los angeles.",
  detail_image_url: ["https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/ink-1.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/ink-2.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/ink-3.jpg"])
Restaurant.create(name: "Tar and Roses", image_url: "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/tar-home.jpg",
  category: "American", price: 2, address: "602 Santa Monica Blvd", city_name: "Santa Monica", state: "CA", zip_code: "90401", neighborhood: "Santa Monica", city_id: 3,
  description: "Tar & Roses is located in Santa Monica, California.",
  detail_image_url: ["https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/tar-1.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/tar-2.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/tar-3.jpg"])
Restaurant.create(name: "Perch", image_url: "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/perch-home.jpg",
  category: "French", price: 3, address: "448 S Hill St", city_name: "Los Angeles", state: "CA", zip_code: "90013", neighborhood: "Downtown", city_id: 3,
  description: "Glamorous rooftop setting with French small plates, handcrafted cocktails & grand views of the city.",
  detail_image_url: ["https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/perch-1.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/perch-2.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/perch-3.jpg"])
Restaurant.create(name: "Yamashiro", image_url: "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/yama-home.jpg",
  category: "Japanese", price: 3, address: "1999 North Sycamore Ave", city_name: "Hollywood", state: "CA", zip_code: "90068", neighborhood: "Hollywood", city_id: 3,
  description: "Perhaps the most romantic venue in Southern California, Yamashiro’s unique ambiance of historic tranquility and unparalleled views offer guests a place of serenity high above Los Angeles. Our dynamic, culinary team is skilled in creating Asian-inspired Californian fare.",
  detail_image_url: ["https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/yama-1.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/yama-2.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/yama-3.jpg"])

#MIA
Restaurant.create(name: "Deck 84", image_url: "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/deck-home.jpg",
  category: "American", price: 2, address: "840 East Atlantic Avenue", city_name: "Delray Beach", state: "FL", zip_code: "33483", neighborhood: "Delray Beach", city_id: 4,
  description: "Named Top 100 Al Fresco Dining Restaurants by Opentable Diners in 2015, 2013 and 2012, Deck 84 offers casual American waterfront dining in Delray Beach. Situated adjacent to the Atlantic Avenue Bridge, Deck 84 offers fresh sophistication with playful aquatic blue and vibrant orange hued interiors designed to embrace Florida’s resort lifestyle.",
  detail_image_url: ["https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/deck-1.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/deck-2.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/deck-3.jpg"])
Restaurant.create(name: "The Bazaar", image_url: "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/bazaar-home.jpg",
  category: "Spanish", price: 3, address: "1701 Collins Ave", city_name: "Miami Beach", state: "FL", zip_code: "33139", neighborhood: "South Beach", city_id: 4,
  description: "The Bazaar by James Beard Award Wining Chef José Andrés is a world-renowned restaurant combining vibrant sophisticated cuisine and playful indoor and outdoor lounge spaces.",
  detail_image_url: ["https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/bazaar-1.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/bazaar-2.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/bazaar-3.jpg"])

#LV
Restaurant.create(name: "Gordon Ramsay Steak", image_url: "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/gordon-home.jpg",
  category: "Steakhouse", price: 4, address: "3655 Las Vegas Blvd", city_name: "Las Vegas", state: "LV", zip_code: "89109", neighborhood: "Paris Hotel", city_id: 5,
  description: "The contemporary steakhouse boasts a total of 274 seats including a large bar area and private dining room in addition to the main room. Guests are encouraged to relax in the spacious lounge or enjoy a cozy booth in this ultimate modern steakhouse.",
  detail_image_url: ["https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/gordon-1.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/gordon-2.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/gordon-3.jpg"])
Restaurant.create(name: "Top of the World Restaurant", image_url: "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/top-home.jpg",
  category: "American", price: 4, address: "2000 Las Vegas Blvd S", city_name: "Las Vegas", state: "LV", zip_code: "89104", neighborhood: "Stratosphere Hotel", city_id: 5,
  description: "Consistently voted one of Las Vegas' best for food, atmosphere, and view, Top of the World restaurant delivers an internationally inspired menu crafted by renowned chefs Rick Giffen and Claude Gaty. Prime beef, farm raised Colorado lamb, and line caught seafood are but a few of the fresh, wholesome, and natural ingredients that are combined to create a dining experience guaranteed to be memorable.",
  detail_image_url: ["https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/top-1.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/top-2.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/top-3.jpg"])

#CHI
Restaurant.create(name: "GT Prime", image_url: "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/gt-home.jpg",
  category: "Steakhouse", price: 3, address: "707 North Wells Street", city_name: "Chicago", state: "IL", zip_code: "60654", neighborhood: "River North", city_id: 6,
  description: "With an emphasis on sourcing from local farms and cuisine highlighted by seasonal ingredients, Executive Chef/Partner and Food & Wine Best New Chef 2008 Giuseppe Tentori has curated a share plate meat-centric menu highlighting various cuts of steak and seasonal vegetables.",
  detail_image_url: ["https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/gt-1.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/gt-2.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/gt-3.jpg"])
Restaurant.create(name: "Girl & the Goat", image_url: "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/goat-home.jpg",
  category: "American", price: 2, address: "809 W Randolph", city_name: "Chicago", state: "IL", zip_code: "60607", neighborhood: "West Loop", city_id: 6,
  description: "Girl & the Goat opened in 2010 with the goal of serving a family style menu of tasty, bold flavored foods in a fun and lively setting. To enhance the experience we offer a selection of wines from around the world with a focus on small producers, a rotating list of craft beers, and a list of fun cocktails created by our bartenders.",
  detail_image_url: ["https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/goat-1.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/goat-2.jpg", "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/goat-3.jpg"])
