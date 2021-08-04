/*
 * @Author: Vir
 * @Date: 2021-08-03 11:21:10
 * @Last Modified by: Vir
 * @Last Modified time: 2021-08-03 11:22:38
 */

import { HttpModule, Module } from '@nestjs/common';
import { BaiduController } from '../controllers/baidu.controller';
import { BaiduService } from '../services/baidu.service';

@Module({
  imports: [HttpModule.register({ timeout: 5000, maxRedirects: 2 })],
  controllers: [BaiduController],
  providers: [BaiduService],
})
export class BaiduModule {}
