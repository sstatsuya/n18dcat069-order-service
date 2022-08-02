const { gql } = require("apollo-server-express");

const typeDefs = gql`
  input ProductInput {
    productId: String
    name: String
    quantity: Int
    price: Int
    image: String
  }

  type Product {
    productId: String
    name: String
    quantity: Int
    price: Int
    image: String
  }

  type Order {
    id: ID
    userId: String
    date: Int
    address: String
    phone: String
    products: [Product]
  }

  type Query {
    getUserOrders(userId: String): [Order]
    getOrder(id: ID): Order
  }

  type Mutation {
    addOrder(
      userId: String
      address: String
      phone: String
      products: [ProductInput]
    ): Order
  }
`;

module.exports = typeDefs;
