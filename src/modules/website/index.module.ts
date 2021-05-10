/*
 * @Author: Vir
 * @Date: 2021-05-10 22:11:51
 * @Last Modified by: Vir
 * @Last Modified time: 2021-05-10 22:38:54
 */

import { Module } from '@nestjs/common';
import { WebsiteClassifyModule } from './modules/website_classify.module';

@Module({
  imports: [WebsiteClassifyModule],
})
export default class WebsiteMainModule {}
