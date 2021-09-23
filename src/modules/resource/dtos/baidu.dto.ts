/*
 * @Author: Vir
 * @Date: 2021-08-03 11:20:04
 * @Last Modified by: Vir
 * @Last Modified time: 2021-08-03 11:25:59
 */

import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class BaiduSugDto {
  @ApiProperty({ description: '搜索内容' })
  @Expose()
  wd: string;
}
