/*
 * @Author: Vir
 * @Date: 2021-05-14 16:42:42
 * @Last Modified by: Vir
 * @Last Modified time: 2021-05-16 17:36:56
 */

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IconService } from 'src/modules/resource/services/icon.service';
import { WebsiteCreateDto, WebsiteUpdateDto } from '../dtos/website.dto';

@Injectable()
export default class WebisteService {
  constructor(
    @InjectModel('Website') private readonly model: Model<any>,
    @InjectModel('WebsiteClassify') private readonly classifyModel: Model<any>,
    private readonly iconService: IconService,
  ) {}

  async list() {
    const aggre = await this.model
      .aggregate()
      .lookup({
        from: 'website_classify',
        localField: 'classify_id',
        foreignField: '_id',
        as: 'classify',
      })
      .unwind('classify');
    const count = await this.model.count();
    return {
      count,
      results: aggre,
    };
  }

  async classifyList() {
    const aggre = await this.classifyModel.aggregate().lookup({
      from: 'website',
      localField: '_id',
      foreignField: 'classify_id',
      as: 'children',
    });
    return {
      results: aggre,
    };
  }

  async create(body: WebsiteCreateDto) {
    const iconRes = await this.iconService.get({ url: body.url });
    let icon = '';
    if (iconRes) {
      icon = iconRes.code === 1 ? iconRes.results.default : '';
    }
    const data = {
      ...body,
      icon,
    };
    const res = await this.model.create(data);
    return {
      result: res,
    };
  }

  async update(body: WebsiteUpdateDto) {
    const { id, ...data } = body;
    const res = await this.model.updateOne({ _id: id }, data);
    return {
      result: res,
    };
  }
}
