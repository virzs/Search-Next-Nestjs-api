/*
 * @Author: Vir
 * @Date: 2022-04-21 10:01:13
 * @Last Modified by: Vir
 * @Last Modified time: 2022-04-21 14:06:45
 */

import { ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

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

export class GeoLocationDto {
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

  @ApiPropertyOptional({ description: '上级行政区划' })
  @IsString()
  @Expose()
  @IsOptional()
  adm?: string;

  @ApiPropertyOptional({ description: '搜索范围' })
  @IsString()
  @Expose()
  @IsOptional()
  range?: 'cn' | 'world';

  @ApiPropertyOptional({ description: '返回数量' })
  @IsNumber()
  @Expose()
  @IsOptional()
  number?: number;

  @ApiPropertyOptional({ description: '语言' })
  @IsString()
  @Expose()
  @IsOptional()
  lang?: 'zh';
}
