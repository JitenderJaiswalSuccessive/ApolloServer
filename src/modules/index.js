import { mergeTypeDefs } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import path from 'path';
import { userQuery } from './user';

const typeArray = loadFilesSync(path.join(__dirname, './**/*.graphql'));
const typeDefs = mergeTypeDefs(typeArray, { all: true });

const Query = {
  ...userQuery,
}
const resolvers = { Query };

export default {
  resolvers, 
  typeDefs
};

