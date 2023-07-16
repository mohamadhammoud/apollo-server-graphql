import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    tasks: [Task!]
    task(id: ID!): Task
  }

  type Task {
    id: ID
    name: String
    completed: Boolean
    user: User
  }
`;
