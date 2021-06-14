/*
 * @Author: Vir
 * @Date: 2021-06-11 13:35:12
 * @Last Modified by: Vir
 * @Last Modified time: 2021-06-11 14:19:32
 */

import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { BingListDto } from '../dtos/bing.dto';
import { BingService } from '../services/bing.service';

@ApiTags('资源/必应')
@Controller('resource/bing')
export class BingController {
  constructor(private readonly service: BingService) {}

  @Get('/list')
  @ApiOperation({ summary: '获取壁纸列表' })
  liet(@Query() query: BingListDto) {
    return this.service.list(query);
  }
}
