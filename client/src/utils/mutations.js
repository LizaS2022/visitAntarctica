import { gql } from "@apollo/client";

export const ADD_TRIP = gql`
  mutation Mutation($input: TripInput) {
    addTrip(input: $input) {
      id
      max_voyagers
      trip_duration
      title
      trip_description
    }
  }
`;

export const UPDATE_TRIP = gql`
  mutation updateTrip($tripId: ID!, $input: TripInput) {
    updateTrip(tripId: $tripId, input: $input) {
      id
      max_voyagers
      trip_duration
      title
      trip_description
    }
  }
`;

export const DELETE_TRIP = gql`
  mutation deleteTrip($tripId: ID) {
    deleteTrip(tripId: $tripId) {
      max_voyagers
      trip_duration
      title
      trip_description
      id
    }
  }
`;

export const ADD_SUBSCRIBER = gql`
  mutation addSubscriber($input: SubscriberInput) {
    addSubscriber(input: $input) {
      email
      id
    }
  }
`;

export const DELETE_SUBSCRIBER = gql`
  mutation deleteSubscriber($subscriberId: ID!) {
    deleteSubscriber(subscriberId: $subscriberId) {
      email
      id
    }
  }
`;

export const ADD_INQUIRER = gql`
  mutation addInquirer($input: InquirerInput) {
    addInquirer(input: $input) {
      first_name
      last_name
      email
      id
      message_title
      message
    }
  }
`;

export const DELETE_INQUIRER = gql`
  mutation deleteInquirer($inquirerId: ID!) {
    deleteInquirer(inquirerId: $inquirerId) {
      email
      first_name
      id
    }
  }
`;
