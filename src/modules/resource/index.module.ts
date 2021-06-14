/*
 * @Author: Vir
 * @Date: 2021-05-12 15:10:31
 * @Last Modified by: Vir
 * @Last Modified time: 2021-06-11 13:58:49
 */

import { Module } from '@nestjs/common';
import { BingModule } from './modules/bing.module';
import { IconModule } from './modules/icon.module';

@Module({
  imports: [IconModule, BingModule],
})
export class ResourceModule {}
