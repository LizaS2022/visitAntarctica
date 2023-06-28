const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Trip {
    id: ID!
    image: String
    title: String!
    trip_duration: Int
    trip_description: String!
    max_voyagers: Int
  }
  type Subscriber {
    id: ID!
    email: String!
  }

  type Inquirer {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
    message_title: String!
    message: String!
  }

  type Query {
    trips: [Trip]
    trip(tripId: ID): Trip
    inquirers: [Inquirer]
    inquirer(inquirerId: ID): Inquirer
    subscribers: [Subscriber]
    subscriber(subscriberId: ID): Subscriber
  }

  type Mutation {
    addTrip(input: TripInput): Trip
    updateTrip(tripId: ID!, input: TripInput): Trip
    deleteTrip(tripId: ID): Trip
    addSubscriber(input: SubscriberInput): Subscriber
    deleteSubscriber(subscriberId: ID!): Subscriber
    addInquirer(input: InquirerInput): Inquirer
    deleteInquirer(inquirerId: ID!): Inquirer
  }

  input SubscriberInput {
    email: String!
  }

  input TripInput {
    image: String
    title: String!
    trip_duration: Int
    trip_description: String
    max_voyagers: Int
  }

  input InquirerInput {
    first_name: String!
    last_name: String!
    email: String!
    message_title: String!
    message: String!
  }
`;
module.exports = typeDefs;
