import express from "express";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";

import typeDefs from "./type-definitions/index";
import resolvers from "./resolvers";

dotenv.config();
const app = express();

app.use(express.json());

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
