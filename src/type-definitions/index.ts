import { gql } from "apollo-server-express";

import userDefinitions from "./user";
import taskDefinitions from "./task";

const typeDefs = gql`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`;

export default [typeDefs, userDefinitions, taskDefinitions];
