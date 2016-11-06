# OpenBistro

[Heroku link][heroku]

[Trello link][trello]

[heroku]: https://openbistro.herokuapp.com/
[trello]: https://trello.com/b/ELTsC2u0/openbistro

## Minimum Viable Product

OpenBistro is a web application inspired by OpenTable built using Ruby on Rails
and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] List of available restaurants
- [ ] Restaurant item page with details and user reviews
- [ ] Users can write reviews for restaurants
- [ ] Book reservations through home page and restaurant item page
- [ ] Production README [sample](docs/production_readme.md)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: ../docs/wireframes
[components]: ../docs/component-hierarchy.md
[sample-state]: ../docs/sample-state.md
[api-endpoints]: ../docs/api-endpoints.md
[schema]: ../docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication.
* The header will have the website's name and icon, sign up, and sign in
buttons.
* Website name and icon should link back to the root view.
* Clicking sign up or sign in buttons will display respective forms.

### Phase 2: City List and Restaurant Index (1.5 days)

**Objective:** Styled list of cities and restaurant index page.
* Root view should have list of available cities.
* Clicking on a city will show the available list of restaurants.
* Restaurant index should display an image, name, category, and 1 through 4 price range.

### Phase 3: Restaurant Details Page (1.5 days)

**Objective:** Functional core of details page.
* Details will include description and additional photos.
* Details page will have address and google maps location.

### Phase 4: Reviews (2 days)

**Objective:** Users can leave reviews on restaurant details page.
* Review form will include a body and 1 through 5 rating.
* Add rating and number of reviews to restaurant index page.
* Add full review details to restaurant details page.

### Phase 5: Reservations (2 day)

**Objective:** Users can search for available time slots and book reservations.
* Reservation form will include number of people, date, and time.
* Form will be added to the root view and details page.
* Available time slots will be shown on the details page.


### Phase 6: - User Page with Reviews and Reservations (1.5 day)

**Objective:** User has access to a profile page.
* Profile page contains upcoming reservations.
* Profile page contains posted reviews.

### Bonus Features (TBD)
- [ ] City highlights other than restaurants
- [ ] Pagination or infinite scroll
- [ ] Point system for bookings and site usage
- [ ] Request user for review after reservation date has passed
