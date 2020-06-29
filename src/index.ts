import './LoadEnv'; // Must be the first import
import app from '@server';
import logger from '@shared/Logger';
import intializeDB from './db';
import { initializeCache } from './db';

intializeDB();

const redisPORT = Number(process.env.REDIS_PORT || 6379)
initializeCache(redisPORT);

// Start the server
const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
    logger.info('Express server started on port: ' + port);
});
