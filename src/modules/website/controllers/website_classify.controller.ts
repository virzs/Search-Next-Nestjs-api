/*
 * @Author: Vir
 * @Date: 2021-05-10 22:34:32
 * @Last Modified by: Vir
 * @Last Modified time: 2021-05-11 11:55:04
 */

import { Body, Controller, Get, Post } from '@nestjs/common';
import { createClassifyDTO } from '../dtos/classify.dto';
import { WebsiteClassifyService } from '../services/website_classify.service';

@Controller('website/classify')
export class WebsiteClassifyController {
  constructor(private readonly service: WebsiteClassifyService) {}

  @Get('list')
  list() {
    return this.service.list();
  }

  @Post('add')
  add(@Body() body: createClassifyDTO) {
    return this.service.add(body);
  }
}
