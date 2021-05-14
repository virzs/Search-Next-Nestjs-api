import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Logger } from '../../utils/log4';
import { ResponseTemplete } from '../logger/templates';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    const logFormat = ResponseTemplete(request, exception);

    Logger.info(logFormat);
    response.status(status).json({
      code: status,
      error: `${status >= 500 ? 'Service Error' : 'Client Error'}`,
      msg: exception.message,
    });
  }
}
