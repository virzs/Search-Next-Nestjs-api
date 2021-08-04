/*
 * @Author: Vir
 * @Date: 2021-05-12 15:15:27
 * @Last Modified by: Vir
 * @Last Modified time: 2021-05-12 15:16:19
 */

import { HttpModule, Module } from '@nestjs/common';
import { IconController } from '../controllers/icon.controller';
import { IconService } from '../services/icon.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000, //超时时间
      maxRedirects: 5, //重试次数
    }),
  ],
  controllers: [IconController],
  providers: [IconService],
})
export class IconModule {}
