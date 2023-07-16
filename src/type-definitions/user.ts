import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    users: [User!]
    user(id: ID!): User
  }

  input createUserInput {
    name: String
    email: String
  }

  extend type Mutation {
    createUser(input: createUserInput): User
  }

  type User {
    id: ID!
    name: String
    email: String
  }
`;
