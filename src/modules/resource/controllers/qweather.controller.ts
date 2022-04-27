/*
 * @Author: Vir
 * @Date: 2022-04-21 11:56:03
 * @Last Modified by: Vir
 * @Last Modified time: 2022-04-21 11:58:19
 */

import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { QWeatherNowDto, GeoLocationDto } from '../dtos/qweather.dto';
import { QWeatherService } from '../services/qweather.service';

@ApiTags('资源/和风天气')
@Controller('resource/qweather')
export class QWeatherController {
  constructor(private readonly service: QWeatherService) {}

  @Get('/now')
  @ApiOperation({ summary: '获取实时天气' })
  now(@Query() query: QWeatherNowDto) {
    return this.service.now(query);
  }

  @Get('/city')
  @ApiOperation({ summary: '获取城市信息' })
  city(@Query() query: GeoLocationDto) {
    return this.service.city(query);
  }
}
