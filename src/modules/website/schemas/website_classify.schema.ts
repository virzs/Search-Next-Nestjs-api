/*
 * @Author: Vir
 * @Date: 2021-05-10 22:17:56
 * @Last Modified by: Vir
 * @Last Modified time: 2021-05-10 22:20:11
 */
import * as mongoose from 'mongoose';

const WebsiteClassifySchema = new mongoose.Schema({
  name: String,
  value: String,
  create_time: Date,
});

export default WebsiteClassifySchema;
