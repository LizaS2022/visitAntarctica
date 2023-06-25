import { gql } from "@apollo/client";

export const VIEW_TRIPS = gql`
  query trips {
    trips {
      end_date_trip
      max_voyagers
      start_date_trip
      title
      trip_description
    }
  }
`;

export const VIEW_TRIP = gql`
  query trip($tripId: ID) {
    trip(tripId: $tripId) {
      end_date_trip
      max_voyagers
      start_date_trip
      title
      trip_description
    }
  }
`;

export const VIEW_INQUIRERS = gql`
  query inquirers {
    inquirers {
      email
      first_name
      id
      last_name
      message
      message_title
      phone_number
    }
  }
`;

export const VIEW_INQUIRER = gql``;

export const VIEW_SUBSCRIBERS = gql`
  query subscribers {
    subscribers {
      email
    }
  }
`;

export const VIEW_SUBSCRIBER = gql`
  query subscriber($subscriberId: ID) {
    subscriber(subscriberId: $subscriberId) {
      email
      id
    }
  }
`;
