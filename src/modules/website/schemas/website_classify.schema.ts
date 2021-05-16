/*
 * @Author: Vir
 * @Date: 2021-05-10 22:17:56
 * @Last Modified by: Vir
 * @Last Modified time: 2021-05-14 16:19:49
 */
import { Schema } from 'mongoose';
import baseSchema from 'src/common/schemas/base.schema';

const WebsiteClassifySchema = new Schema(
  {
    name: String,
    value: String,
    ...baseSchema,
  },
  { versionKey: false },
);

export default WebsiteClassifySchema;
