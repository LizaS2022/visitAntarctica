const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
//mongoose connector
const db = require("./config/connection");
const app = express();

//apollo server setup
const { typeDefs, resolvers } = require("./schemas");
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// client
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client"));
});

const PORT = process.env.PORT || 3001;

const startApolloServer = async () => {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  db.once("open", () => {
    console.log("di come in here?");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${apolloServer.graphqlPath}`
      );
    });
  });
};

startApolloServer();
