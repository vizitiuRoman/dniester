import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { ReviewDto } from './dto/ReviewDto';
import { ReviewService } from './review.service';

@Controller('reviews')
@ApiTags('reviews')
export class ReviewController {
    constructor(private reviewService: ReviewService) {}

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
