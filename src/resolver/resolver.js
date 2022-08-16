const Order = require("../model/Order");
const { v4: uuidv4 } = require("uuid");

const resolvers = {
  Query: {
    getUserOrders: async (parent, args) => {
      return await Order.find({ userId: args.userId });
    },
    getOrder: async (parent, args) => {
      return await Order.findOne({ id: args.id });
    },
    getAllOrders: async (parent, args) => {
      return await Order.find({});
    },
  },
  Mutation: {
    addOrder: async (parent, args) => {
      const data = {
        id: uuidv4(),
        userId: args.userId,
        date: parseInt(Date.now() / 1000),
        address: args.address,
        phone: args.phone,
        status: 1,
        shipDate: 0,
        products: args.products,
      };
      const newOrder = new Order(data);
      return await newOrder.save();
    },
    approveOrder: async (parent, args) => {
      return Order.findOneAndUpdate(
        { id: args.id },
        { status: 2, shipDate: parseInt(Date.now() / 1000) },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
