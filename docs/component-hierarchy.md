## Component Hierarchy

**HomeContainer**
- Home
- Header
- Reservations
- CityIndex

**AuthFormContainer**
- AuthForm

**RestaurantIndexContainer**
- RestaurantIndex

**RestaurantDetailContainer**
- Reservations
  - ReservationDetails
- RestaurantDescription
- RestaurantLocation
- ReviewForm
  - Reviews


## Routes

|Path               | Component           |
|-------------------|---------------------|
| "/"               | "HomeContainer"     |
| "/sign-up"        | "AuthFormContainer" |
| "/sign-in"        | "AuthFormContainer" |
| "/city/:id"       | "RestaurantIndexContainer"  |
| "/restaurant/:id" | "RestaurantDetailContainer" |
