/*
 * @Author: Vir
 * @Date: 2021-05-10 22:34:32
 * @Last Modified by: Vir
 * @Last Modified time: 2021-05-10 22:47:29
 */

import { Controller, Get } from '@nestjs/common';
import { WebsiteClassifyService } from '../services/website_classify.service';

@Controller('website_classify')
export class WebsiteClassifyController {
  constructor(
    private readonly websiteClassifyService: WebsiteClassifyService,
  ) {}

  @Get()
  list() {
    return this.websiteClassifyService.list();
  }
}
