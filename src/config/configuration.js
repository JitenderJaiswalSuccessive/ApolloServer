import { config } from 'dotenv';

config();
const configuration = {
    port: process.env.PORT,
};
Object.freeze(configuration);

export default configuration;