import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WebsiteClassifyController } from '../controllers/website_classify.controller';
import WebsiteClassifySchema from '../schemas/website_classify.schema';
import { WebsiteClassifyService } from '../services/website_classify.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'WebsiteClassify',
        schema: WebsiteClassifySchema,
        collection: 'website_classify',
      },
    ]),
  ],
  controllers: [WebsiteClassifyController],
  providers: [WebsiteClassifyService],
})
export class WebsiteClassifyModule {}
