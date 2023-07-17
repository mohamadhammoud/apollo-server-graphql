import { skip } from "graphql-resolvers";

// First parameter: parent object in graphql
// Second parameter: input parameters (args object) from graphql
// Third parameter: object injected from the context
export const isAuthenticated = async (_: any, __: any, { req }: any) => {
  if (req?.token == null) {
    throw new Error("Access Denied! Please login to continue");
  }

  return skip;
};
