/*
 * @Author: Vir
 * @Date: 2021-05-14 16:36:55
 * @Last Modified by: Vir
 * @Last Modified time: 2021-05-16 00:22:38
 */

import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IconModule } from 'src/modules/resource/modules/icon.module';
import { IconService } from 'src/modules/resource/services/icon.service';
import WebsiteController from '../controllers/website.controller';
import WebsiteSchema from '../schemas/website.schema';
import WebsiteClassifySchema from '../schemas/website_classify.schema';
import WebisteService from '../services/website.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Website',
        schema: WebsiteSchema,
        collection: 'website',
      },
      {
        name: 'WebsiteClassify',
        schema: WebsiteClassifySchema,
        collection: 'website_classify',
      },
    ]),
    HttpModule.register({
      timeout: 5000, //超时时间
      maxRedirects: 5, //重试次数
    }),
    IconModule,
  ],
  controllers: [WebsiteController],
  providers: [WebisteService, IconService],
})
export default class WebsiteModule {}
