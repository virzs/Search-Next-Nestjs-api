/*
 * @Author: Vir
 * @Date: 2021-05-14 11:41:48
 * @Last Modified by: Vir
 * @Last Modified time: 2021-05-14 15:50:10
 */
import { HttpException } from '@nestjs/common';
import { Request } from 'express';

export const ResponseTemplete = (
  request: Request,
  exception: HttpException,
): string => {
  return `
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
      Request original url: ${request.originalUrl}
      Method: ${request.method}
      IP: ${request.ip}
      Status code: ${exception.getStatus()}
      Response: ${exception.toString()}
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  `;
};

export const ResponseDataTemplate = (request, data: any): string => {
  return `
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
      Request original url: ${request.originalUrl}
      Method: ${request.method}
      IP: ${request.ip}
      User: ${JSON.stringify(request.user)}
      Response data:\n ${JSON.stringify(data)}
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<`;
};
