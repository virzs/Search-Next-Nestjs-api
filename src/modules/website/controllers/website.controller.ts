/*
 * @Author: Vir
 * @Date: 2021-05-14 16:39:32
 * @Last Modified by: Vir
 * @Last Modified time: 2021-05-16 17:36:49
 */

import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { WebsiteCreateDto, WebsiteUpdateDto } from '../dtos/website.dto';
import WebisteService from '../services/website.service';

@ApiTags('网址')
@Controller('website')
export default class WebsiteController {
  constructor(private readonly service: WebisteService) {}

  @Get('list')
  @ApiOperation({ summary: '获取网址列表' })
  list() {
    return this.service.list();
  }

  @Get('classify_list')
  @ApiOperation({ summary: '获取分类及分类下网址列表' })
  classifyList() {
    return this.service.classifyList();
  }

  @Post('create')
  @ApiOperation({ summary: '创建网址' })
  create(@Body() body: WebsiteCreateDto) {
    return this.service.create(body);
  }

  @Put('update')
  @ApiOperation({ summary: '更新网址' })
  update(@Body() body: WebsiteUpdateDto) {
    return this.service.update(body);
  }
}
