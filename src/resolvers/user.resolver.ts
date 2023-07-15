import users from "../database/users.data";

export default {
  Query: {
    users: () => {
      return users;
    },
  },
};
