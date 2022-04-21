import { HttpService, Injectable } from '@nestjs/common';
import { QWeatherNowDto } from '../dtos/qweather.dto';

const codeMap = {
  '400': '请求错误，请检查请求参数',
  '401': '认证失败，请检查apiKey',
  '402': '超过访问次数或余额不足以支持继续访问服务，请尝试更换apiKey',
  '403': '无访问权限',
  '404': '查询的数据或地区不存在',
  '429': '访问过于频繁，请稍后再试',
  '500': '服务器内部错误',
};

@Injectable()
export class QWeatherService {
  constructor(private readonly httpRequest: HttpService) {}

  async now(query: QWeatherNowDto) {
    const { key, ...rest } = query;
    const result = await this.httpRequest
      .get('https://devapi.qweather.com/v7/weather/now', {
        params: { key: key ? key : process.env.qweather_key, ...rest },
      })
      .toPromise();

    const { code, updateTime, fxLink, now, refer } = result.data;

    const data = {
      updateTime,
      fxLink,
      now,
      refer,
    };

    if (code) {
      if (code === '200') {
        return data;
      } else {
        return { code, message: codeMap[code] };
      }
    }

    return result.data;
  }
}
