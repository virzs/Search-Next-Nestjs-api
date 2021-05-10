/*
 * @Author: Vir
 * @Date: 2021-05-10 22:28:16
 * @Last Modified by: Vir
 * @Last Modified time: 2021-05-10 22:42:55
 */

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class WebsiteClassifyService {
  constructor(
    @InjectModel('WebsiteClassify') private readonly WebSiteClassifyModel,
  ) {}

  async list() {
    return await this.WebSiteClassifyModel.find();
  }
}
