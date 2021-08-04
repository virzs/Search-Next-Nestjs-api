import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
  Type,
} from '@nestjs/common';
import { classToPlain, plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { Logger } from '../../utils/log4';

@Injectable()
export class DefaultDTOValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value, {
      excludeExtraneousValues: true,
    });
    //删除未验证的值及非实体中的值
    const deleteUndefined = classToPlain(object);
    for (const i in deleteUndefined) {
      if (deleteUndefined[i] === undefined) {
        delete deleteUndefined[i];
      }
    }
    const delObj = plainToClass(metatype, deleteUndefined);
    const errors = await validate(delObj);
    console.log(errors, value, delObj);
    if (errors.length > 0) {
      console.log('error', Object.values(errors[0].constraints)[0]);
      const msg = Object.values(errors[0].constraints)[0]; // 只需要取第一个错误信息并返回即可
      Logger.error(`Validation failed: ${msg}`);
      throw new BadRequestException(`Validation failed: ${msg}`);
    }
    return deleteUndefined;
  }
  private toValidate(metaType: Type<any>): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.find(type => metaType === type);
  }
}
