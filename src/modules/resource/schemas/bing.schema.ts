/*
 * @Author: Vir
 * @Date: 2021-06-14 17:03:08
 * @Last Modified by: Vir
 * @Last Modified time: 2021-06-14 17:08:40
 */

import { Schema } from 'mongoose';

const BingImgSchema = new Schema(
  {
    startdate: String,
    fullstartdate: String,
    enddate: String,
    url: String,
    urlbase: String,
    copyright: String,
    copyrightlink: String,
    title: String,
    quiz: String,
    wp: Boolean,
    hsh: String,
    drk: Number,
    top: Number,
    bot: Number,
    hs: Array,
  },
  {
    versionKey: false,
  },
);

export default BingImgSchema;
