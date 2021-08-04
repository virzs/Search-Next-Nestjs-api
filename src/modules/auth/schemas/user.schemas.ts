/*
 * @Author: Vir
 * @Date: 2021-05-12 13:52:15
 * @Last Modified by: Vir
 * @Last Modified time: 2021-05-12 14:16:07
 */

import { Schema } from 'mongoose';
import baseSchema from 'src/common/schemas/base.schema';

const UserSchema = new Schema(
  {
    account: String,
    username: String,
    password: String,
    ...baseSchema,
  },
  { versionKey: false },
);

export default UserSchema;
