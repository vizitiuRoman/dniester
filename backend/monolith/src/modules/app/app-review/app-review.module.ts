import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ReviewRepository } from '../../general/review/review.repository';
import { AppReviewController } from './app-review.controller';
import { AppReviewService } from './app-review.service';

@Module({
    imports: [TypeOrmModule.forFeature([ReviewRepository])],
    controllers: [AppReviewController],
    exports: [AppReviewService],
    providers: [AppReviewService],
})
export class AppReviewModule {}
