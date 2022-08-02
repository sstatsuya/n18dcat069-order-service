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
  },
  Mutation: {
    addOrder: async (parent, args) => {
      console.log("ne")
      console.log(JSON.stringify(args));
      const data = {
        id: uuidv4(),
        userId: args.userId,
        date: parseInt(Date.now() / 1000),
        address: args.address,
        phone: args.phone,
        products: args.products,
      };
      const newOrder = new Order(data);
      return await newOrder.save();
    },
  },
};

module.exports = resolvers;
