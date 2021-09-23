/*
 * @Author: Vir
 * @Date: 2021-06-11 13:35:12
 * @Last Modified by: Vir
 * @Last Modified time: 2021-06-14 22:49:45
 */

import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { BingPageDto, BingRandomDto, BingSugDto } from '../dtos/bing.dto';
import { BingService } from '../services/bing.service';

@ApiTags('资源/必应')
@Controller('resource/bing')
export class BingController {
  constructor(private readonly service: BingService) {}

  @Get('/page')
  @ApiOperation({ summary: '获取壁纸分页' })
  list(@Query() query: BingPageDto) {
    return this.service.page(query);
  }

  @Get('/random')
  @ApiOperation({ summary: '获取随机壁纸列表' })
  random(@Query() query: BingRandomDto) {
    return this.service.random(query);
  }

  @Get('/latest')
  @ApiOperation({ summary: '获取最新的壁纸' })
  latest() {
    return this.service.latest();
  }

  @Get('/sug')
  @ApiOperation({ summary: '获取搜索提示词' })
  sug(@Query() query: BingSugDto) {
    return this.service.sug(query);
  }
}
