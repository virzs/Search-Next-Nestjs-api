import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from './utils/log4';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const envConfigService = app.get(ConfigService);

  const swaggerOptions = new DocumentBuilder()
    .setTitle('Search React 接口文档')
    .setDescription('Search React 接口文档')
    .setVersion('v0.1.0')
    .addServer('/api')
    .build();

  const doc = SwaggerModule.createDocument(app, swaggerOptions);

  SwaggerModule.setup('doc', app, doc);
  Logger.info(process.env);

  await app.listen(3000);

  Logger.info(`http://localhost:${3000}`, '服务启动成功');
}
bootstrap();
