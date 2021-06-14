/*
 * @Author: Vir
 * @Date: 2021-06-11 14:09:31
 * @Last Modified by: Vir
 * @Last Modified time: 2021-06-14 20:56:18
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNumberString, IsOptional } from 'class-validator';

export class BingListDto {
  @ApiPropertyOptional({ description: '第几页' })
  @IsNumberString()
  @IsOptional()
  @Expose()
  page: number;

  @ApiProperty({ description: '每页数量' })
  @IsNumberString()
  @IsOptional()
  @Expose()
  size: number;
}
