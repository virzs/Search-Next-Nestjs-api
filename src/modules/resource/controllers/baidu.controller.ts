/*
 * @Author: Vir
 * @Date: 2021-08-03 11:20:59
 * @Last Modified by:   Vir
 * @Last Modified time: 2021-08-03 11:20:59
 */

import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { BaiduSugDto } from '../dtos/baidu.dto';
import { BaiduService } from '../services/baidu.service';

@ApiTags('资源/百度')
@Controller('resource/baidu')
export class BaiduController {
  constructor(private readonly service: BaiduService) {}

  @Get('/sug')
  @ApiOperation({ summary: '获取搜索提示词' })
  @ApiQuery({
    name: 'wd',
    type: BaiduSugDto,
    description: '搜索内容',
  })
  sug(@Query() query: BaiduSugDto) {
    return this.service.sug(query);
  }
}
