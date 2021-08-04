/*
 * @Author: Vir
 * @Date: 2021-05-14 16:18:07
 * @Last Modified by: Vir
 * @Last Modified time: 2021-05-15 18:44:27
 */

import { Schema } from 'mongoose';
import baseSchema from 'src/common/schemas/base.schema';

const WebsiteSchema = new Schema(
  {
    name: String,
    url: String,
    icon: String,
    classify_id: { type: Schema.Types.ObjectId, ref: 'WebsiteClassify' },
    ...baseSchema,
  },
  {
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

WebsiteSchema.virtual('classify', {
  ref: 'WebsiteClassify',
  localField: 'classify_id',
  foreignField: '_id',
  as: 'classify',
  justOne: true,
});

export default WebsiteSchema;
