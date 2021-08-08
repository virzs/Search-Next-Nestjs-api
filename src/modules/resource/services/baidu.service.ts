/*
 * @Author: Vir
 * @Date: 2021-08-03 11:21:05
 * @Last Modified by:   Vir
 * @Last Modified time: 2021-08-03 11:21:05
 */

import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class BaiduService {
  constructor(private readonly httpService: HttpService) {}

  async sug(query) {
    const response = await this.httpService
      .get('https://www.baidu.com/sugrec', {
        params: {
          json: 1,
          prod: 'pc',
          wd: query.wd,
        },
      })
      .toPromise();
    if (response.data) {
      const results = response.data;
      const newResults = {
        wd: results.q,
        engine: {
          name: '百度',
          value: 'baidu',
        },
        sugs: results.g
          ? results.g.map(i => ({
              sa: i.sa,
              type: i.type,
              content: i.q,
            }))
          : [],
      };
      return newResults;
    }
    return response.data;
  }
}
