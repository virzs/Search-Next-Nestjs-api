/*
 * @Author: Vir
 * @Date: 2021-05-15 23:14:19
 * @Last Modified by: Vir
 * @Last Modified time: 2021-05-16 22:39:40
 */

import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class WebsiteCreateDto {
  @ApiProperty({ description: '名称' })
  @IsString()
  @IsNotEmpty({ message: '名称不能为空' })
  @Expose()
  name: string;

  @ApiProperty({ description: 'url' })
  @IsUrl({ require_host: true }, { message: 'url格式错误' })
  @IsNotEmpty({ message: 'url不能为空' })
  @Expose()
  url: string;

  @ApiProperty({ description: '分类id' })
  @IsString()
  @IsOptional()
  classify_id: string;
}

export class WebsiteUpdateDto {
  @ApiProperty({ description: '网址id' })
  @IsString()
  @IsNotEmpty({ message: 'id不能为空' })
  @Expose()
  id: string;

  @ApiProperty({ description: '名称' })
  @IsString()
  @IsOptional()
  @Expose()
  name: string;

  @ApiProperty({ description: 'url' })
  @IsOptional()
  @IsUrl({ require_host: true }, { message: 'url格式错误' })
  @Expose()
  url: string;

  @ApiProperty({ description: '分类id' })
  @IsString()
  @IsOptional()
  classify_id: string;
}
