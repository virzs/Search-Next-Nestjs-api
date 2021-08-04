/*
 * @Author: Vir
 * @Date: 2021-06-11 13:35:19
 * @Last Modified by: Vir
 * @Last Modified time: 2021-06-14 17:17:17
 */

import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BingController } from '../controllers/bing.controller';
import BingImgSchema from '../schemas/bing.schema';
import { BingService } from '../services/bing.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'BingImg',
        schema: BingImgSchema,
        collection: 'bing_img',
      },
    ]),
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [BingController],
  providers: [BingService],
})
export class BingModule {}
