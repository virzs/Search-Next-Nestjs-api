import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Logger } from './utils/log4';
import { TransformInterceptor } from './common/interceptor/transform.interceptor';
import { HttpExceptionFilter } from './common/filters/http-exception.fillter';
import { AllExceptionsFilter } from './common/filters/any-exception.fillter';
import { DefaultDTOValidationPipe } from './common/pipes/defaultDTOValidation.pipe';
import { logger } from './common/middleware/logger.middleware';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerOptions = new DocumentBuilder()
    .setTitle('Search React 接口文档')
    .setDescription('Search React 接口文档')
    .setVersion('v0.1.0')
    .addServer('/v1')
    .build();

  const doc = SwaggerModule.createDocument(app, swaggerOptions);

  SwaggerModule.setup('doc', app, doc);
  //全局路径
  app.setGlobalPrefix('/v1');
  // 监听所有的请求路由，并打印日志
  app.use(logger); //使用日志
  //默认参数验证
  app.useGlobalPipes(new DefaultDTOValidationPipe());
  //全局拦截器
  app.useGlobalInterceptors(new TransformInterceptor());
  //过滤其他类型异常
  app.useGlobalFilters(new AllExceptionsFilter());
  // 过滤处理 HTTP 异常
  app.useGlobalFilters(new HttpExceptionFilter());
  // 配置跨域
  app.enableCors();
  // TODO 打包后指定ip访问
  //防止跨站脚本攻击
  app.use(helmet());

  await app.listen(3100);

  Logger.info(`http://localhost:${3100}`, '服务启动成功');
}
bootstrap();
