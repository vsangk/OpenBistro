```js
{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createReservation: {errors: ["no reservations available"]},
    createReview: {errors: ["body can't be blank"]}
  },
  cities: {
    1: {
      name: "San Francisco",
      image_url: "http://hoteldiva.com/sites/default/files/HD-home-2.jpg",
      num_of_restaurants: 16
    }
  },
  restaurants: {
    1: {
      name: "Waterbar",
      image_url: "http://resizer.otstatic.com/v2/photos/large/23367687.jpg",
      category: "Seafood",
      price_range: 3
    }
  },
  restaurantDetail: {
    1: {
      name: "Waterbar",
      image_url: "http://resizer.otstatic.com/v2/photos/large/23367687.jpg",
      category: "Seafood",
      price_range: 3,
      address: "399 The Embarcadero South",
      city: "San Francisco",
      state: "CA",
      zip_code: "94105",
      description: "Waterbar is a seafood-centric restaurant located on the waterfront with spectacular panoramic views of the bay and city skyline",
      detail_image_urls: []
      reservations: {
        1: {
          party_size: 2,
          time_slot: "2016-11-15 18:00:00"
          user_id: 1,
          restaurant_id: 1
        }
      }
      reviews: {
        1: {
          rating: 5,
          body: "Excellent!",
          user_id: 1,
          restaurant_id: 1
        }
      }
    }
  }
}
```
