import config from '@app/config';
import { DataSourceOptions } from 'typeorm';
import { Bag, Sector, HouseholdHead, PaidInfo, StreetLeader } from '../entities/EntitiesRegistry';

export class MongoDBConfig {
  public config: DataSourceOptions;

  constructor() {
    this.config = {
      type: 'mongodb',
      url: config.DATABASES.MONGO.HOST,
      useNewUrlParser: true,
      synchronize: true,
      useUnifiedTopology: true,
      logging: true,
      ssl: false,
      entities: [Bag, Sector, HouseholdHead, PaidInfo, StreetLeader],
    };
  }

  public getDataSourceOptions(): DataSourceOptions {
    return this.config;
  }
}
