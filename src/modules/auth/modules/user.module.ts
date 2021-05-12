/*
 * @Author: Vir
 * @Date: 2021-05-12 13:51:16
 * @Last Modified by: Vir
 * @Last Modified time: 2021-05-12 14:17:37
 */

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import UserSchema from '../schemas/user.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema,
        collection: 'user',
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class UserModule {}
