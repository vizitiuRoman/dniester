import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { ReviewDto } from '../../general/review/dto/ReviewDto';
import { AppReviewService } from './app-review.service';

@Controller('app/reviews')
@ApiTags('app/reviews')
export class AppReviewController {
    constructor(private reviewService: AppReviewService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Get reviews list',
        type: ReviewDto,
    })
    getReviews(): Promise<ReviewDto[]> {
        return this.reviewService.getReviews();
    }
}
