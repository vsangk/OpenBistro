# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Cities
- `GET /api/cities`

### Restaurants

- `GET /api/restaurants`
- `GET /api/restaurants/:id`

## Reviews
- `GET /api/restaurants/:id/reviews`
  - index of all reviews for the restaurant
- `POST /api/restaurants/:id/reviews`
- `DELETE /api/restaurants/:id/review`

## Reservations
- `GET /api/restaurants/:id/reservations`
  - index of all reservations for the restaurant
- `POST /api/restaurants/:id/reservations`
