/*
 * @Author: Vir
 * @Date: 2021-05-12 15:15:21
 * @Last Modified by: Vir
 * @Last Modified time: 2022-04-21 14:50:50
 */

import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class IconService {
  constructor(private readonly httpService: HttpService) {}

  async get(query) {
    const response = await this.httpService
      .post(`https://api.webmasterapi.com/v1/favicon`, {
        apiKey: process.env.webmaster_key,
        url: query.url,
      })
      .toPromise();
    return response.data;
  }
}
