import {
  CallHandler,
  ExecutionContext,
  HttpException,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    //异常拦截器，将错误信息改写为指定格式
    return next.handle().pipe(
      catchError((error): any => {
        if (error instanceof HttpException) {
          return Promise.resolve({
            code: error.getStatus(),
            msg: error.getResponse(),
          });
        }
        return Promise.resolve({
          code: 500,
          msg: error.toString(),
        });
      }),
    );
  }
}
