import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import type { FindManyOptions } from 'typeorm/find-options/FindManyOptions';

import type { ReviewDto } from '../../general/review/dto/ReviewDto';
import type { ReviewEntity } from '../../general/review/review.entity';
import { ReviewRepository } from '../../general/review/review.repository';
import type { CreateAppReviewDto } from './dto/CreateAppReviewDto';
import type { UpdateAppReviewDto } from './dto/UpdateAppReviewDto';

@Injectable()
export class AppReviewService {
    constructor(private readonly reviewRepository: ReviewRepository) {}

    public async createReview(review: CreateAppReviewDto): Promise<ReviewDto> {
        try {
            const createdReview = this.reviewRepository.create(review);
            return (await this.reviewRepository.save(createdReview)).toDto();
        } catch (e) {
            Logger.error('[createReview] error', e, AppReviewService.name);
        }
    }

    public async updateReview(review: UpdateAppReviewDto): Promise<ReviewDto> {
        try {
            return (await this.reviewRepository.save(review)).toDto();
        } catch (e) {
            Logger.error('[updateReview] error', e, AppReviewService.name);
        }
    }

    public async getUserReviews(
        userId: string,
        options?: FindManyOptions<ReviewEntity>,
    ): Promise<ReviewDto[]> {
        try {
            return (
                await this.reviewRepository.find({
                    ...options,
                    where: {
                        userId,
                    },
                })
            ).toDtos();
        } catch (e) {
            Logger.error('[getUserReviews] error', e, AppReviewService.name);
        }
    }

    public async getReview(id: string): Promise<ReviewDto> {
        try {
            return (
                await this.reviewRepository.findOne({
                    where: {
                        id,
                    },
                })
            ).toDto();
        } catch (e) {
            Logger.error('[getReview] error', e, AppReviewService.name);
        }
    }

    public async deleteReview(id: string): Promise<ReviewDto> {
        try {
            const review = await this.reviewRepository.findOne({
                where: {
                    id,
                },
            });
            if (!review) {
                throw new NotFoundException(`not found review: id ${id}`);
            }
            return (await this.reviewRepository.remove(review)).toDto();
        } catch (e) {
            Logger.error('[deleteReview] error', e, AppReviewService.name);
        }
    }
}
