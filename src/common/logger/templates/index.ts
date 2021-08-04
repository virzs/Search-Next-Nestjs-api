/*
 * @Author: Vir
 * @Date: 2021-05-14 11:41:48
 * @Last Modified by: Vir
 * @Last Modified time: 2021-05-15 22:20:53
 */
import { HttpException } from '@nestjs/common';
import { Request } from 'express';

export const ResponseTemplete = (
  request: Request,
  exception: HttpException,
  status?: number,
): string => {
  return `
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
      Request original url: ${request.originalUrl}
      Method: ${request.method}
      IP: ${request.ip}
      Status code: ${status ? status : exception.getStatus()}
      Response: ${exception.toString()}
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  `;
};

export const ResponseDataTemplate = (
  request: { originalUrl: any; method: any; ip: any; user: any },
  data: any,
): string => {
  return `
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
      Request original url: ${request.originalUrl}
      Method: ${request.method}
      IP: ${request.ip}
      User: ${JSON.stringify(request.user)}
      Response data:\n ${JSON.stringify(data)}
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<`;
};
