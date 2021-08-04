/*
 * @Author: Vir
 * @Date: 2021-05-11 11:54:14
 * @Last Modified by: Vir
 * @Last Modified time: 2021-05-11 11:54:42
 */

import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class createClassifyDTO {
  @IsString()
  @IsNotEmpty({ message: '分类名称不能为空' })
  @Expose()
  readonly name: string;

  @IsString()
  @IsNotEmpty({ message: '分类值不能为空' })
  @Expose()
  readonly value: string;
}
