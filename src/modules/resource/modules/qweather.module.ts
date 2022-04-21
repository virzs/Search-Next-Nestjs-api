/*
 * @Author: Vir
 * @Date: 2022-04-21 13:42:18
 * @Last Modified by: Vir
 * @Last Modified time: 2022-04-21 13:54:24
 */

import { HttpModule, Module } from '@nestjs/common';
import { QWeatherController } from '../controllers/qweather.controller';
import { QWeatherService } from '../services/qweather.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [QWeatherController],
  providers: [QWeatherService],
})
export class QWeatherModule {}
