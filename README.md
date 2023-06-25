# visitAntarctica

An informative app about Antarctica that invites people to book a trip

## Database

contact_form: first_name, last_name, email, phone_number, subject, description

subscription: first_name, last_name, email

trip: trip_title, trip_description, trip_dates, travelers (ref: traveler id)

traveler: first_name, last_name, email, phone_number, date_of_birth, address, passport_number, special_notes.

subscriber: first_name, last_name, email

## graphQL

- query = view_trip, view_traveler, view_travelers, view_trips
- mutation = add_traveler, updateTraveler, deleteTraveler, add_trip, update_trip, delete_trip

## Front End Technologies

- React
- Bootstrap template
- React-router
- context-api

## back End Technologies

- express
- apollo/server
- graphql
- mongoose
