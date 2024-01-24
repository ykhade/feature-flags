// src/configs/database.ts
import { DataSource, createConnection } from 'typeorm';
import { FeatureFlag } from '../models/FeatureFlag';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'your-database-host',
  port: your-database-port,
  username: 'your-database-user',
  password: 'your-database-password',
  database: 'your-database-name'
});