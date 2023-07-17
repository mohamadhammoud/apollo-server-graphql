import { combineResolvers } from "graphql-resolvers";
import users from "../database/users.data";
import { isAuthenticated } from "../resolvers/middleware/authentication";

export default {
  Query: {
    users: () => {
      return users;
    },
    user: combineResolvers(
      isAuthenticated,
      async (_: any, { id }: { id: string }) => {
        const user = await users.find((user) => user.id == id);
        return user;
      }
    ),
  },
  Mutation: {
    createUser: (
      _: any,
      { input }: { input: { name: string; email: string } }
    ) => {
      users.push({
        id: `${users.length}`,
        name: input.name,
        email: input.email,
      });

      return users[users.length - 1];
    },
  },
};
