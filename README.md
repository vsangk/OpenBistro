# OpenBistro

[OpenBistro][openbistro]
[openbistro]: https://openbistro.site/

OpenBistro is a restaurant review and reservation website with an intuitive,
snappy, and responsive UI based off single-page application principles. OpenBistro
is a full-stack app built on the following technologies:

- Rails Backend
- React/Redux Frontend
- Postgres RDBMS


## Features & Implementation
The bulk of the data is presented to the user in a clean and simple layout
that includes a simply-built reservation/time-management system, Google Maps
API integration, flexbox display for image handling, and a star based
rating and review system.

![alttag](http://res.cloudinary.com/openbistro/image/upload/c_scale,w_778/v1478904208/open-bistro-screenshot_fc58v5.png)

Updating and displaying all of this data efficiently was achieved by making AJAX requests to our rails backend and having our response sent back in JSON utilizing nested objects for structuring and fast look up times. This also allows users to search for reservations, book reservations, and to write and edit reviews without ever leaving the page or current route.

![alttag](http://res.cloudinary.com/openbistro/image/upload/c_scale,q_53,w_523/v1478906516/Screen_Shot_2016-11-11_at_3.21.40_PM_nlqads.png)

## Future Features

The next steps in developing OpenBistro include:

##### Restaurant Search

Allow users to search for the specific restaurant or location from the home page.

##### Review Histogram
Add a review histogram above the reviews section for a easy to read breakdown of total ratings and reviews.

##### User Point System
Implement a user point system for booking reservations and leaving reviews through the website.
