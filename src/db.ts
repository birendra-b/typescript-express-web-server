import "reflect-metadata";
import {createConnection} from "typeorm";
import { Tedis} from "tedis";
// import {User} from "../entities/User";
import logger from '@shared/Logger';

async function intializeDB(): Promise<void> {
  await createConnection()
  logger.info('Database successfully initialized');
}

export function initializeCache(port: number | undefined) : unknown {
  const tedis = new Tedis({
    port: port,
    host: "127.0.0.1"
  });
  logger.info('Redis cache successfully initialized');
  return tedis;
}

// Export express instance
export default intializeDB;