/*
 * @Author: Vir
 * @Date: 2021-06-11 13:37:07
 * @Last Modified by: Vir
 * @Last Modified time: 2021-06-14 22:51:04
 */

import { HttpService, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Model } from 'mongoose';
import { Logger } from 'src/utils/log4';
import { BingPageDto, BingRandomDto, BingSugDto } from '../dtos/bing.dto';

@Injectable()
export class BingService {
  constructor(
    private readonly httpRequest: HttpService,
    @InjectModel('BingImg') private readonly model: Model<any>,
  ) {}

  // 获取必应壁纸，每4小时自动获取
  @Cron(CronExpression.EVERY_4_HOURS, { name: 'bing-wallpaper' })
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
    const has = await this.model.findOne({ startdate: img.startdate });
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

  async page(query: BingPageDto) {
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

  async random(query: BingRandomDto) {
    const size = Number(query.size) || 4;
    const hsh = query.hsh;
    let results = [];
    const response = await this.model.aggregate([{ $sample: { size } }]);
    if (hsh) {
      const has = response.find(i => i.hsh === hsh);
      if (!has) {
        const img = await this.model.findOne({ hsh });
        if (img) results = response.splice(0, 1, img);
      }
    }
    results = response;

    return results;
  }

  async latest() {
    const response = await this.model
      .find({})
      .sort({ _id: -1 })
      .limit(1);

    return response;
  }

  async sug(query: BingSugDto) {
    const response = await this.httpRequest
      .get('http://api.bing.com/qsonhs.aspx', {
        params: {
          q: query.wd,
        },
      })
      .toPromise();
    if (response.data) {
      const result = response.data.AS.Results[0].Suggests;
      const newResults = {
        wd: query.wd,
        engine: {
          label: '必应',
          value: 'bing',
        },
        sugs: result
          ? result.map(i => ({
              sa: i.SK,
              type: 'sug',
              content: i.Txt,
            }))
          : [],
      };
      return newResults;
    }
    return response.data;
  }
}
