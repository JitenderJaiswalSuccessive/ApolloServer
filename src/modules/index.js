import { mergeTypeDefs } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import path from 'path';
import { userQuery } from './user';
import { traineeQuery, traineeMutation, traineeSubscription } from './trainee';

const typeArray = loadFilesSync(path.join(__dirname, './**/*.graphql'));
const typeDefs = mergeTypeDefs(typeArray, { all: true });

const Query = {
  ...userQuery,
  ...traineeQuery,
}
const Mutation = {
  ...traineeMutation,
}
const Subscription = {
  ...traineeSubscription,
}

const resolvers = { Query, Mutation, Subscription };

export default {
  resolvers, 
  typeDefs
};

