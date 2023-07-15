import { gql } from "apollo-server-express";

import userDefinitions from "./user";

const typeDefs = gql`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`;

export default [typeDefs, userDefinitions];
