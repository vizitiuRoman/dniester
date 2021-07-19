import { Injectable, Logger } from '@nestjs/common';

import type { UserDto } from './dto/UserDto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    public async getUsers(): Promise<UserDto[]> {
        try {
            return (await this.userRepository.find()).toDtos();
        } catch (e) {
            Logger.error('[getUsers] error', e);
        }
    }

    public async getUsersWithFavoriteServices(): Promise<UserDto[]> {
        try {
            return (
                await this.userRepository.find({
                    relations: ['favoritesUserServices'],
                })
            ).toDtos();
        } catch (e) {
            Logger.error('[getUsersWithFavoriteServices] error', e);
        }
    }

    public async getUserWithFavoriteServices(id: string): Promise<UserDto> {
        try {
            return (
                await this.userRepository.findOne({
                    relations: ['favoritesUserServices'],
                    where: {
                        id,
                    },
                })
            ).toDto();
        } catch (e) {
            Logger.error('[getUserWithFavoriteServices] error', e);
        }
    }
}
