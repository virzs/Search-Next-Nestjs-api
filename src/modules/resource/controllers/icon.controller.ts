/*
 * @Author: Vir
 * @Date: 2021-05-12 15:15:34
 * @Last Modified by: Vir
 * @Last Modified time: 2021-05-12 21:28:08
 */

import { Controller, Get, Req } from '@nestjs/common';
import { IconService } from '../services/icon.service';

@Controller('resource/icon')
export class IconController {
  constructor(private readonly service: IconService) {}

  @Get('/get')
  get(@Req() req) {
    return this.service.get(req);
  }
}
