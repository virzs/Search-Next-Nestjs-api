/*
 * @Author: Vir
 * @Date: 2021-06-11 14:09:31
 * @Last Modified by: Vir
 * @Last Modified time: 2021-06-14 22:48:10
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNumberString, IsOptional } from 'class-validator';

export class BingPageDto {
  @ApiPropertyOptional({ description: '第几页' })
  @IsNumberString()
  @IsOptional()
  @Expose()
  page: number;

  @ApiPropertyOptional({ description: '每页数量' })
  @IsNumberString()
  @IsOptional()
  @Expose()
  size: number;
}

export class BingRandomDto {
  @ApiPropertyOptional({ description: '返回数量' })
  @IsNumberString()
  @IsOptional()
  @Expose()
  size: number;
}
