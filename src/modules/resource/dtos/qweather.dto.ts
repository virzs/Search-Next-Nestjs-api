/*
 * @Author: Vir
 * @Date: 2022-04-21 10:01:13
 * @Last Modified by: Vir
 * @Last Modified time: 2022-04-21 14:06:45
 */

import { ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

// 和风天气 实时天气
export class QWeatherNowDto {
  @ApiPropertyOptional({ description: 'KEY' })
  @IsString()
  @Expose()
  @IsOptional()
  key?: string;

  @ApiPropertyOptional({ description: '位置' })
  @IsString()
  @Expose()
  @IsNotEmpty()
  location: string;

  @ApiPropertyOptional({ description: '语言' })
  @IsString()
  @Expose()
  @IsOptional()
  lang?: 'zh';

  @ApiPropertyOptional({ description: '单位' })
  @IsString()
  @Expose()
  @IsOptional()
  unit?: 'm' | 'i';
}
