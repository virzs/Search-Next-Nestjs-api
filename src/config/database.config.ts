/*
 * @Author: Vir
 * @Date: 2021-05-12 10:53:35
 * @Last Modified by: Vir
 * @Last Modified time: 2021-05-12 11:45:27
 */

import { registerAs } from '@nestjs/config';

export default registerAs('MongoConfig', () => ({
  uri: `mongodb://${process.env.mongo_username}:${process.env.mongo_password}@${process.env.mongo_host}:${process.env.mongo_port}/${process.env.mongo_database}`,
}));
