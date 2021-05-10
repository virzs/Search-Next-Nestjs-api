import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import WebsiteMainModule from './modules/website/index.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://search_owner:owner112611@47.100.53.121:27017/search',
    ),
    WebsiteMainModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
