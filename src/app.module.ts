import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import WebsiteMainModule from './modules/website/index.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from './config/database.config';
import { ResourceModule } from './modules/resource/index.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      //env文件路径
      envFilePath: ['development.env'],
      //是否忽略env文件
      ignoreEnvFile: false,
      //是否忽略env变量
      ignoreEnvVars: false,
      //是否全局
      isGlobal: true,
      //加载变量
      load: [databaseConfig],
    }),
    // 数据库配置
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => config.get('MongoConfig'),
      inject: [ConfigService],
    }),
    ResourceModule,
    WebsiteMainModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
