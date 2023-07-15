import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());

const typeDefs = gql`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`;

const resolvers = {
  Query: {},
};

let apolloServer: any = null;
const PORT = process.env.PORT || 3000;

async function startServer() {
  apolloServer = new ApolloServer({ typeDefs, resolvers });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: "/graphql" });

  app.use("/", (req, res, next) => {
    res.send({ message: "Hello World" });
  });

  app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
    console.log(`Graphql endpoint: ${apolloServer.graphqlPath}`);
  });
}

startServer();
