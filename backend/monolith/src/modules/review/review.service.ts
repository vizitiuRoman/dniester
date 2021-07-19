import { Injectable, Logger } from '@nestjs/common';

import type { ReviewDto } from './dto/ReviewDto';
import { ReviewRepository } from './review.repository';

@Injectable()
export class ReviewService {
    constructor(private readonly reviewRepository: ReviewRepository) {}

    async getReviews(): Promise<ReviewDto[]> {
        try {
            return (await this.reviewRepository.find()).toDtos();
        } catch (e) {
            Logger.error('[getReviews] error', e);
        }
    }
}
