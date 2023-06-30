import { gql } from "@apollo/client";

export const VIEW_TRIPS = gql`
  query trips {
    trips {
      id
      trip_duration
      max_voyagers
      title
      trip_description
    }
  }
`;

export const VIEW_TRIP = gql`
  query trip($tripId: ID!) {
    trip(tripId: $tripId) {
      trip_duration
      max_voyagers
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
    }
  }
`;

// export const VIEW_INQUIRER = gql``;

export const VIEW_SUBSCRIBERS = gql`
  query subscribers {
    subscribers {
      email
    }
  }
`;

export const VIEW_SUBSCRIBER = gql`
  query subscriber($subscriberId: ID!) {
    subscriber(subscriberId: $subscriberId) {
      email
      id
    }
  }
`;
