/*
 * @Author: Vir
 * @Date: 2021-05-10 22:28:16
 * @Last Modified by: Vir
 * @Last Modified time: 2021-05-11 11:22:31
 */

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AddBodyType } from '../interfaces/website_classify';

@Injectable()
export class WebsiteClassifyService {
  constructor(@InjectModel('WebsiteClassify') private readonly model) {}

  async list() {
    return await this.model.find();
  }

  async add(body: AddBodyType) {
    const data = {
      ...body,
      create_time: new Date(),
    };
    return this.model.create(data);
  }
}
