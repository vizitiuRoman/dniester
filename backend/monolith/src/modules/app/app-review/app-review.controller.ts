import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Put,
} from '@nestjs/common';
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';

import { AuthUser } from '../../../core/decorators/auth-user.decorator';
import { UserAuth, UUIDParam } from '../../../core/decorators/http.decorators';
import { ReviewDto } from '../../general/review/dto/ReviewDto';
import { UserEntity } from '../../general/user/user.entity';
import { AppReviewService } from './app-review.service';
import { CreateAppReviewDto } from './dto/CreateAppReviewDto';
import { UpdateAppReviewDto } from './dto/UpdateAppReviewDto';

@Controller('app/reviews')
@ApiTags('app/reviews')
export class AppReviewController {
    constructor(private appReviewReview: AppReviewService) {}

    @Post()
    @UserAuth()
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({
        type: ReviewDto,
        description: 'Successfully created review',
    })
    createReview(@Body() body: CreateAppReviewDto): Promise<ReviewDto> {
        return this.appReviewReview.createReview(body);
    }

    @Put()
    @UserAuth()
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({
        type: ReviewDto,
        description: 'Successfully updated review',
    })
    updateReview(@Body() body: UpdateAppReviewDto): Promise<ReviewDto> {
        return this.appReviewReview.updateReview(body);
    }

    @Get()
    @UserAuth()
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Get reviews list',
        type: ReviewDto,
    })
    getUserReviews(@AuthUser() user: UserEntity): Promise<ReviewDto[]> {
        return this.appReviewReview.getUserReviews(user.id, {
            relations: ['staffs', 'bookings'],
        });
    }

    @Get(':id')
    @UserAuth()
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Get review',
        type: ReviewDto,
    })
    getReview(@UUIDParam('id') reviewId: string): Promise<ReviewDto> {
        return this.appReviewReview.getReview(reviewId);
    }

    @Delete(':id')
    @UserAuth()
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Delete review',
        type: ReviewDto,
    })
    deleteUserReview(@UUIDParam('id') reviewId: string): Promise<ReviewDto> {
        return this.appReviewReview.deleteReview(reviewId);
    }
}
