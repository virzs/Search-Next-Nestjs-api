import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from './utils/log4';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  Logger.info(`http://localhost:${3000}`, '服务启动成功');
}
bootstrap();
