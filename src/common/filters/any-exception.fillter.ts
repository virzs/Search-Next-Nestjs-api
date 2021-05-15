import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Logger } from '../../utils/log4';
import { ResponseTemplete } from '../logger/templates';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const logFormat = ResponseTemplete(request, exception, status);

    Logger.error(logFormat);
    response.status(status).json({
      code: status,
      error: 'Service Error',
      msg: `Service Error: ${exception}`,
    });
  }
}
