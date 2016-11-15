# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest_login = User.create(username: "guest", password: "password")
User.create(username: "Tom", password: "password")
User.create(username: "Jonathan", password: "password")
User.create(username: "Sam", password: "password")
User.create(username: "Michael", password: "password")
User.create(username: "Jeffrey", password: "password")
User.create(username: "vince", password: "password")

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
Restaurant.create(name: "Dirt Candy", image_url: "https://s3-us-west-1.amazonaws.com/openbistro/restaurant-detail/dirt-home.jpg",
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


#SF Reviews
Review.create(restaurant_id: 1, body: "One of the best brunch meals I've had in a long time! Great food. Option to eat outside (quieter and nice on a sunny day with great views of the Bay Bridge).",
  user_id: 2, rating: 5)
Review.create(restaurant_id: 1, body: "We had a perfect table overlooking the bay bridge. Lovely setting and delicious food.",
  user_id: 1, rating: 5)
Review.create(restaurant_id: 1, body: "Excellent fresh seafood, excellent service; and we are picky. Beautiful views of the bay bridge, had a magical night. Noisy though",
  user_id: 3, rating: 5)
Review.create(restaurant_id: 1, body: "This was a great find! We invited friends who were visiting San Francisco from the mid west and wanted to take them somewhere special. Waterbar was the place. They LOVED the view, the ambiance and the food -and so did we.",
    user_id: 1, rating: 4)
Review.create(restaurant_id: 1, body: "We left Waterbar with lighter wallets yet unsatisfied palates, and walked next door to Epic, which offered better views, tastier food, friendlier service, less frenzy and lower prices.",
  user_id: 4, rating: 2)

Review.create(restaurant_id: 2, body: "The fish were flown in from Japan that morning as well as local ones. Quite a variety were available. A very enjoyable evening. It is expensive.",
  user_id: 4, rating: 4)
Review.create(restaurant_id: 2, body: "Omakase was incredible. Just tell them your price and let them do the work, you won't regret it.",
  user_id: 2, rating: 5)
Review.create(restaurant_id: 2, body: "Great restaurant. Really top tier. If I were a Michelin reviewer I'd give it at least one star. First two courses were 12 nigiri picked by my chef Alex. Then two rolls. Nigiri were remarkable both for the quality of the fish and the preparation. Can't wait to bring my wife. Can't recommend highly enough.",
  user_id: 1, rating: 5)
Review.create(restaurant_id: 2, body: "Delicious food, excellent service (especially at the chef's counter), but a little overpriced. Still, one of the better sushi experiences I have had, and the quality of the food was top notch.",
  user_id: 3, rating: 4)

Review.create(restaurant_id: 3, body: "Great scenery, hard to a hear a conversation during brunch hours but with a sangria in hand, who cares!! Great eggs Benedict, amazing beignets!!",
  user_id: 1, rating: 4)
Review.create(restaurant_id: 3, body: "They charge too much. The food was good but not worth the price. Also, their wine by the glass is around $15/glass. Way too high",
  user_id: 4, rating: 2)
Review.create(restaurant_id: 3, body: "Always one of my favorites , food is innovative and always the freshest available. Great Chef and service. Go for the sunsets on the west coast....",
  user_id: 3, rating: 5)
Review.create(restaurant_id: 3, body: "The wonderful view at River's End makes the food seem secondary. But I wouldn't love dining there if wasn't really good. The seafood is always very fresh and delicious and the service is good. Add that million dollar view and you have a real winner!",
  user_id: 5, rating: 4)

Review.create(restaurant_id: 4, body: "Went here for brunch. The sun was out, the margaritas flowed, the food was good (especially the donuts). Really enjoyed it and will definitely be back.",
  user_id: 2, rating: 5)
Review.create(restaurant_id: 4, body: "Perfect for a sunny day brunch",
  user_id: 1, rating: 5)
Review.create(restaurant_id: 4, body: "Great rooftop dining. The views & atmosphere were amazing. Food was incredible and promptly served. Suggested for a weekend trip stop and it did not disappoint. The one draw back - tables for 2 are very small, it was hard to fit everything on one surface. Other than that I highly recommend.",
  user_id: 4, rating: 5)
Review.create(restaurant_id: 4, body: "Amazing food and sangria! Great staff and perfect views",
  user_id: 5, rating: 5)
Review.create(restaurant_id: 4, body: "Great outdoor dining in SF, great food and cocktails. The view along with the amazing service just add to the delightful ambiance, to be one of my favorite restaurants to have brunch or afternoon cocktails and appies. I make all sorts of excuses to dine at this fine establishment.",
  user_id: 3, rating: 4)

# NY Reviews
Review.create(restaurant_id: 5, body: "We went for the food and found everything else just as good - the food was excellent - the chicken was very tasty and tender - I can see why it is the house specialty - but the kale salad was a surprising flavor treat. I wish I could be there when all the overhead doors are open to the street- PS - I made my lunch reservations a month in advance",
  user_id: 2, rating: 4)
Review.create(restaurant_id: 5, body: "With the space enclosed the noise levels appear to rise and we found it verging on uncomfortable.",
  user_id: 5, rating: 3)
Review.create(restaurant_id: 5, body: "Food was great. Prices are fair. Highly recommended.",
  user_id: 3, rating: 4)

Review.create(restaurant_id: 6, body: "Incredible! The ambiance is great, the place is really modern and cool, and all of the good was delicious. The food options are very unique, as are the drinks. This place is great for both vegetarians and non vegetarians alike!
Highly recommend!",
  user_id: 4, rating: 5)
Review.create(restaurant_id: 6, body: "Crazy good. We just completely loved our meal. Great date night!",
  user_id: 3, rating: 5)
Review.create(restaurant_id: 6, body: "Great restaurant for vegetarians, vegans and those that just enjoy great food.",
  user_id: 5, rating: 4)

Review.create(restaurant_id: 7, body: "I really like this restaurant. The food is good and I love the ambiance. As long as the atmosphere stays this way I would keep coming and recommend others to come here too",
  user_id: 2, rating: 4)
Review.create(restaurant_id: 7, body: "Food was awful. Not at all Southern. Staff was accommodating and nice but the food was just starch and protein on a plate and very disappointing.",
  user_id: 3, rating: 2)

Review.create(restaurant_id: 8, body: "Overall, a good restaurant in a location where it can be hard to find a place to dine for a casual brunch. Be aware, if you are doing brunch on a Sunday it is buffet style with no alternative menu option. My guests and I were surprised about that since (in my opinion) isn't clearly denoted on the online menu on the website. The buffet however, met our needs and most of us went for seconds.",
  user_id: 3, rating: 4)
Review.create(restaurant_id: 8, body: "The roasted chicken was the best I've ever had, just amazing. The staff was wonderful and the decor was very cool and comfortable. I love this restaurant!",
  user_id: 4, rating: 5)
Review.create(restaurant_id: 8, body: "Entire experience was amazing. I found the service team from the front through service to be exceptional. Looking forward to returning.",
  user_id: 5, rating: 4)

Review.create(restaurant_id: 9, body: "Amazing, fenomenal! Best place ever! I'm sure I will come back!",
  user_id: 5, rating: 5)
Review.create(restaurant_id: 9, body: "Excellent venue.Great views.Overpriced food and drink..but the view compensated for that...I suppose!",
  user_id: 4, rating: 4)
Review.create(restaurant_id: 9, body: "Great views, wonderful way to see the NY skyline. Great ambience. The cheese board was very good. The small one was perfect for two. Would definitely return on a future visit.",
  user_id: 3, rating: 5)
Review.create(restaurant_id: 9, body: "Beautiful view, great food and drinks. Great service.",
  user_id: 2, rating: 5)

# LA Reviews
Review.create(restaurant_id: 10, body: "Great innovative food with a wonderful well trained staff",
  user_id: 3, rating: 5)
Review.create(restaurant_id: 10, body: "Our favorite restaurant from the day it opened and for years to come! Amazing new menu - short ribs are to die for! Perfect cuisine matched by perfect service! Thank you to Andrew and the entire team for taking such amazing care of us over the years!",
  user_id: 2, rating: 5)
Review.create(restaurant_id: 10, body: "Hands down the best foot experience of my life. I was wowed by every dish and the service was superb to anything I've experienced. Cannot wait to go back...",
  user_id: 4, rating: 5)

Review.create(restaurant_id: 11, body: "Such a delightful restaurant. The food, ambiance, and service was wonderful. Everything we sampled was beyond delicious. We sat in the patio and it was a charming, intimate space. I will absolutely return again.",
  user_id: 2, rating: 5)
Review.create(restaurant_id: 11, body: "Innovative food, good service, interesting to visit especially as a tourist, reasonably good wines, pricy as many hotsopts are in Los Angeles.",
  user_id: 3, rating: 4)
Review.create(restaurant_id: 11, body: "Quiet cozy little restaurant with an amazing menu. I literally wanted to try everything! Can't wait to go back",
  user_id: 5, rating: 5)

Review.create(restaurant_id: 12, body: "Excellent view. Food was not what I expected for the price. I was not thrilled about the quality, or presentation or portion size. Too many lines. Thank goodness I had a reservation, but then had to get in line to go upstairs.",
  user_id: 4, rating: 4)
Review.create(restaurant_id: 12, body: "Incredible view and very good food. Lovely server. The only thing service stuff didn't wait until we were all finished with our meal to clean the table.",
  user_id: 5, rating: 5)
Review.create(restaurant_id: 12, body: "Great restaurant. Attentive and personable staff. Will definitely be back.",
  user_id: 2, rating: 4)
Review.create(restaurant_id: 12, body: "The evening was fabulous. A friend from NYC was in town and I wanted to WOW her. She loved the restaurant, the food, the ambience, the views, the music. It was perfect evening!",
  user_id: 3, rating: 5)

Review.create(restaurant_id: 13, body: "One of my favorite place for many years. I am so glad that they kept the restaurant open. Yamashiro is LA's classic.",
  user_id: 1, rating: 5)
Review.create(restaurant_id: 13, body: "Very slow service. Took 15 minutes for our drinks to arrive. Server was not attentive - all 4 of our water glasses were empty and the dessert arrived 25 minutes after placing the order. Lastly, it took 20 mins for our car to arrive from the valet.",
  user_id: 3, rating: 2)
Review.create(restaurant_id: 13, body: "Best restaurant view of Los Angeles! Convenient to the theaters of Hollywood and the bowl make a great date night location. It is a bit pricey ($80 per person). Staff is very friendly.",
  user_id: 5, rating: 4)

# MIA Reviews
Review.create(restaurant_id: 14, body: "Skeptical at first but food was delicious and service excellent. Not the most beautiful restaurant !!!! Weather was rainy so we we not able to enjoy the view of the water.",
  user_id: 2, rating: 4)
Review.create(restaurant_id: 14, body: "We had a great time and everyone was great. We always look forward to an evening there.",
  user_id: 4, rating: 5)

Review.create(restaurant_id: 15, body: "The ambiance is nice, however, the food is nothing to ride home about. It was pricey and to be honest we all walked out with room for more, yet we had no interest in ordering anything else again. The best dish was the octopus. Not impressed, would not return.",
  user_id: 5, rating: 4)
Review.create(restaurant_id: 15, body: "Everything was delicious! Will not disappoint! We have been back twice and will come back soon!",
  user_id: 1, rating: 4)

# LV Reviews
Review.create(restaurant_id: 16, body: "Food and service outstanding. Beef wellington onion soup sticky toffee pudding all incredible. Pricey but worth it",
  user_id: 2, rating: 5)
Review.create(restaurant_id: 16, body: "Good service; food is overrated; extremely high prices - paying for the Gordon Ramsey experience.",
  user_id: 3, rating: 3)
Review.create(restaurant_id: 16, body: "Had an amazing experience at the restaurant. Staff were amazing and very helpful. The taster menu tasted absolutely fantastic. Quite possibly the best meal I have ever tasted.",
  user_id: 5, rating: 4)

Review.create(restaurant_id: 17, body: "Had a very nice dinner. The service was excellent and the view of Las Vegas at night was spectacular. The main course (Filet Mignon) was good, the dessert (Creme Brulee) was great . Would go back for a special occasion",
  user_id: 1, rating: 5)
Review.create(restaurant_id: 17, body: "Great view of Las Vegas, food very good but very expensive.",
  user_id: 2, rating: 4)
Review.create(restaurant_id: 17, body: "Best view in Las Vegas and great martinis in the bar for happy hour.",
  user_id: 5, rating: 4)

# CHI Reviews
Review.create(restaurant_id: 18, body: "Service was AMAZING. Very attentive and helpful. He had great suggestions and made it a very fun night.",
  user_id: 2, rating: 5)
Review.create(restaurant_id: 18, body: "Phenomenal vegetable dishes! So good we just ordered several of them for our meal. Perfectly times to come out one at a time so that we could enjoy.",
  user_id: 4, rating: 4)
Review.create(restaurant_id: 18, body: "Love the decor. The food was amazing. It's nice too because they offer a 4oz or an 8oz steak and sometimes you don't want a huge steak. The tomato and crab salad, mac and cheese, and smores dessert was so good!",
  user_id: 3, rating: 5)

Review.create(restaurant_id: 19, body: "It is really hard to get a reservation but totally with the effort. The food was outstanding and our waiter was great. It was our first time and he was a great guide. I would highly recommend Girl and the Goat!",
  user_id: 5, rating: 5)
Review.create(restaurant_id: 19, body: "Awesome! Surprisingly good prices and the food was excellent. Our waiter was so helpful and friendly. Would go back!",
  user_id: 1, rating: 5)
Review.create(restaurant_id: 19, body: "The pork shank, the mussels, the Parmesan baked peppers and the cheezy bread we used to soak up all the sauces. What a delicious meal. Made even better by our server, Owen, who was helpful, attentive and intent on making it a perfect first time experience for us. Can't wait to return!",
  user_id: 2, rating: 5)
Review.create(restaurant_id: 19, body: "Couldn't find a single thing wrong with this restaurant! Definitely a must try when in Chicago/West Loop!",
  user_id: 3, rating: 5)
