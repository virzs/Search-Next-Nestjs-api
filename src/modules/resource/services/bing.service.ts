/*
 * @Author: Vir
 * @Date: 2021-06-11 13:37:07
 * @Last Modified by: Vir
 * @Last Modified time: 2021-06-14 20:55:21
 */

import { HttpService, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cron } from '@nestjs/schedule';
import { Model } from 'mongoose';
import { Logger } from 'src/utils/log4';

@Injectable()
export class BingService {
  constructor(
    private readonly httpRequest: HttpService,
    @InjectModel('BingImg') private readonly model: Model<any>,
  ) {}

  @Cron('10 * * * * *')
  async getImgToDB() {
    const response = await this.httpRequest
      .get('https://cn.bing.com/HPImageArchive.aspx', {
        params: {
          format: 'js',
          idx: 0,
          n: 8,
          mkt: 'zh-CN',
        },
      })
      .toPromise();
    const img = response.data.images[0];
    if (!img) return;
    const has = await this.model.findOne({ hsh: img.hsh });
    const baseUrl = 'https://cn.bing.com';
    if (!has) {
      this.model.create({
        ...img,
        url: `${baseUrl}${img.url}`,
        urlbase: `${baseUrl}${img.urlbase}`,
        quiz: `${baseUrl}${img.quiz}`,
      });
    }
    Logger.info('调用定时任务 bing image api');
  }

  async list(query: any) {
    const size = Number(query.size) || 10;
    const page = Number(query.page) || 1;
    const total = await this.model.count();
    const response = await this.model.aggregate([
      {
        $sort: { enddate: -1 },
      },
      {
        $skip: (page - 1) * size,
      },
      {
        $limit: size || 10,
      },
    ]);

    return {
      results: response,
      total,
      size,
      page,
    };
  }
}
