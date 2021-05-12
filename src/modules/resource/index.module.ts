/*
 * @Author: Vir
 * @Date: 2021-05-12 15:10:31
 * @Last Modified by: Vir
 * @Last Modified time: 2021-05-12 15:11:46
 */

import { Module } from '@nestjs/common';
import { IconModule } from './modules/icon.module';

@Module({
  imports: [IconModule],
})
export class ResourceModule {}
