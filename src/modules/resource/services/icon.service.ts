/*
 * @Author: Vir
 * @Date: 2021-05-12 15:15:21
 * @Last Modified by: Vir
 * @Last Modified time: 2021-05-13 22:59:15
 */

import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class IconService {
  constructor(private readonly httpService: HttpService) {}

  async get(query) {
    const response = await this.httpService
      .post(`https://api.webmasterapi.com/v1/favicon`, {
        apiKey: 'DaiyEDsLDKX3D1bi',
        url: query.url,
      })
      .toPromise();
    return response.data;
  }
}
