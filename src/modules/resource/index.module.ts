/*
 * @Author: Vir
 * @Date: 2021-05-12 15:10:31
 * @Last Modified by: Vir
 * @Last Modified time: 2021-08-03 11:22:50
 */

import { Module } from '@nestjs/common';
import { BaiduModule } from './modules/baidu.module';
import { BingModule } from './modules/bing.module';
import { IconModule } from './modules/icon.module';

@Module({
  imports: [IconModule, BingModule, BaiduModule],
})
export class ResourceModule {}
