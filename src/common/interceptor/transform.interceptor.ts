import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Logger } from '../../utils/log4';
import { ResponseDataTemplate } from '../logger/templates';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.getArgByIndex(1).req;
    return next.handle().pipe(
      map(data => {
        const logFormat = ResponseDataTemplate(req, data);

        Logger.info(logFormat);
        Logger.access(logFormat);
        return data;
      }),
    );
  }
}
