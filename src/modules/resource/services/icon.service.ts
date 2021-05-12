/*
 * @Author: Vir
 * @Date: 2021-05-12 15:15:21
 * @Last Modified by: Vir
 * @Last Modified time: 2021-05-12 21:27:50
 */

import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';

@Injectable()
export class IconService {
  constructor(private readonly httpService: HttpService) {}

  async get(req) {
    // const response = await this.httpService
    //   .get(
    //     `https://api.webmasterapi.com/v1/favicon/DaiyEDsLDKX3D1bi/${req.query.url}`,
    //     {
    //       headers: {},
    //     },
    //   )
    //   .toPromise();
    const response = await this.httpService
      .post(`https://api.webmasterapi.com/v1/favicon`, {
        apiKey: 'DaiyEDsLDKX3D1bi',
        url: req.query.url,
      })
      .toPromise();
    console.log(response.data);
    return response.data;
    // res.writeHead(200, {
    //   ...response.headers,
    // });
    // res.end(response.data);

    // res.send();
  }
}
