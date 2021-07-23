import { Injectable, Logger } from '@nestjs/common';
import type { FindConditions } from 'typeorm';

import type { UserDto } from '../../general/user/dto/UserDto';
import type { UserEntity } from '../../general/user/user.entity';
import { UserRepository } from '../../general/user/user.repository';
import type { UserRegisterDto } from '../app-user-auth/dto/UserRegisterDto';

@Injectable()
export class AppUserService {
    constructor(private readonly userRepository: UserRepository) {}

    public async getUsers(): Promise<UserDto[]> {
        try {
            return (await this.userRepository.find()).toDtos();
        } catch (e) {
            Logger.error('[getUsers] error', e);
        }
    }

    /**
     * Find single app-company-module-app-company
     */
    public findOne(findData: FindConditions<UserEntity>): Promise<UserEntity> {
        return this.userRepository.findOne(findData);
    }

    /**
     * create user
     */
    public async createUser(
        userRegisterDto: UserRegisterDto,
    ): Promise<UserEntity> {
        const user = this.userRepository.create(userRegisterDto);

        return this.userRepository.save(user);
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
