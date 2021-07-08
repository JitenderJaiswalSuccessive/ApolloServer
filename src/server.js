import express from 'express';
import bodyParser from 'body-parser';
import { UserAPI } from './datasource';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';

class Server {
  constructor(config) {
    this.app = express();
    this.config = config;
  }

  bootstrap = () => {
    this.initBodyParser();
    this.setupRoutes();
    return this;
  };

  initBodyParser = () => {
    const { app } = this;
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
  };

  setupRoutes = () => {
    const { app } = this;
    app.use('/health-check', (res) => {
      console.log(' Inside health check ');
      res.send(' I am OK ');
      app.use('/graphql', graphqlHTTP({schema, graphiql: true}));
    });
};

  setupApolloServer = (schema) => {
    const { app } = this;
    const { resolvers, typeDefs } = schema;
    this.server = new ApolloServer({
      typeDefs, 
      resolvers,
      dataSources: () => {
        return { 
          userAPI : new UserAPI(),
        };
      }
    });
    this.server.applyMiddleware({ app });
    this.httpServer = createServer(app);
    this.server.installSubscriptionHandlers(this.httpServer);
    this.run();
  };

  run = () => {
    const {config } = this;
    const { port } = config;
    this.httpServer.listen(port, (err) => {
      if (err) {
        console.log('error');
        throw err;
      }
      console.log(`App is running successfully on port ${port}`);
    });
  };
}

export default Server;