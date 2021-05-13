/*
 * @Author: Vir
 * @Date: 2021-05-13 16:53:35
 * @Last Modified by: Vir
 * @Last Modified time: 2021-05-13 22:59:59
 */

import { IsNotEmpty, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class IconGetDto {
  @ApiProperty({ description: 'url' })
  @IsUrl({ require_host: true }, { message: 'url格式错误' })
  @IsNotEmpty({ message: 'url不能为空' })
  @Expose()
  url: string;
}