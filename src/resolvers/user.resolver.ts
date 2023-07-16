import users from "../database/users.data";

export default {
  Query: {
    users: () => {
      return users;
    },
    user: (_: any, { id }: { id: string }) => {
      const user = users.find((user) => user.id == id);
      return user;
    },
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
