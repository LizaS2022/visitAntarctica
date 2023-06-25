const { Inquirer, Subscriber, Trip } = require("../models");

const resolvers = {
  Query: {
    // Find trips
    trips: async () => {
      try {
        return Trip.find();
      } catch (error) {
        console.log(error);
      }
    },

    // Find trip by ID
    trip: async (parent, { tripId }) => {
      return Trip.findById(tripId);
    },

    //find inquirers
    inquirers: async () => {
      return Inquirer.find();
    },

    //find inquirer
    inquirer: async (parent, { inquirerId }) => {
      return Inquirer.findById({ inquirerId });
    },

    //find subscribers
    subscribers: async () => {
      return Subscriber.find();
    },

    //find subscriber
    subscriber: async (parent, { subscriberId }) => {
      return Subscriber.findById(subscriberId);
    },
  },

  Mutation: {
    // Add a tour
    addTrip: async (parent, { input }) => {
      console.log("input :>> ", input);
      const trip = await Trip.create(input);

      console.log("the trip is", trip);

      return trip;
    },

    //update tour details
    updateTrip: async (parent, { tripId, input }) => {
      return Trip.findOneAndUpdate({ _id: tripId }, input, {
        new: true,
      });
    },

    //delete tour
    deleteTrip: async (parent, { tripId }) => {
      console.log("this is the trip ID", tripId);
      const deleteTrip = await Trip.findOneAndDelete({
        _id: tripId,
      });
      return deleteTrip;
    },

    //add subscriber
    addSubscriber: async (parent, { input }) => {
      const subscriber = await Subscriber.create(input);
      console.log(subscriber);
      return subscriber;
    },

    //delte subscriber
    deleteSubscriber: async (parent, { subscriberId }) => {
      const deleteSubscriber = await Subscriber.findOneAndDelete({
        _id: subscriberId,
      });
      if (!deleteSubscriber) {
        throw new Error("subscriber not found");
      }
      return deleteSubscriber;
    },

    //add inquirer
    addInquirer: async (parent, { input }) => {
      const inquirer = await Inquirer.create(input);
      console.log(inquirer);
      return inquirer;
    },

    //delete inquirer
    deleteInquirer: async (parent, { inquirerId }) => {
      const deleteInquirer = await Inquirer.findOneAndDelete({
        _id: inquirerId,
      });
      if (!deleteInquirer) {
        throw new Error("inquirer not found");
      }
      return deleteInquirer;
    },
  },
};
module.exports = resolvers;
