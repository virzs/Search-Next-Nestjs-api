/*
 * @Author: Vir
 * @Date: 2021-05-12 14:37:22
 * @Last Modified by: Vir
 * @Last Modified time: 2021-05-12 15:05:47
 */

import { RedisModuleOptions } from 'nestjs-redis';

export default {
  port: 6379,
  host: '47.100.53.121',
  password: '',
  db: 0,
} as RedisModuleOptions;
