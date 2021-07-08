import { config } from 'dotenv';

config();
const configuration = {
    port: process.env.PORT,
    serviceUrl: process.env.SERVICE_URL,
};
Object.freeze(configuration);

export default configuration;