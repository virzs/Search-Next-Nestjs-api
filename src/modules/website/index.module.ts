/*
 * @Author: Vir
 * @Date: 2021-05-10 22:11:51
 * @Last Modified by: Vir
 * @Last Modified time: 2021-05-16 00:12:24
 */

import { Module } from '@nestjs/common';
import WebsiteModule from './modules/website.module';
import { WebsiteClassifyModule } from './modules/website_classify.module';

@Module({
  imports: [WebsiteClassifyModule, WebsiteModule],
})
export default class WebsiteMainModule {}
