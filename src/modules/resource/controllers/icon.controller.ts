/*
 * @Author: Vir
 * @Date: 2021-05-12 15:15:34
 * @Last Modified by: Vir
 * @Last Modified time: 2021-05-16 00:21:27
 */

import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { IconGetDto } from '../dtos/icon.dto';
import { IconService } from '../services/icon.service';

@ApiTags('资源/图标')
@Controller('resource/icon')
export class IconController {
  constructor(private readonly service: IconService) {}

  @Get('/get')
  @ApiOperation({ summary: '获取图标' })
  @ApiQuery({
    name: 'url',
    type: IconGetDto,
    description: '网址，不带https或http',
  })
  get(@Query() query: IconGetDto) {
    return this.service.get(query);
  }
}
