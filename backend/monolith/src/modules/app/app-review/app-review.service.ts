import { Injectable, Logger } from '@nestjs/common';

import type { ReviewDto } from '../../general/review/dto/ReviewDto';
import { ReviewRepository } from '../../general/review/review.repository';

@Injectable()
export class AppReviewService {
    constructor(private readonly reviewRepository: ReviewRepository) {}

    async getReviews(): Promise<ReviewDto[]> {
        try {
            return (await this.reviewRepository.find()).toDtos();
        } catch (e) {
            Logger.error('[getReviews] error', e);
        }
    }
}
