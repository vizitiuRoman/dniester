import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import type { FindConditions } from 'typeorm';

import type { UserDto } from '../../general/user/dto/UserDto';
import type { UserEntity } from '../../general/user/user.entity';
import { UserRepository } from '../../general/user/user.repository';
import type { UserRegisterDto } from '../app-user-auth/dto/UserRegisterDto';
import type { UpdateAppUserDto } from './dto/UpdateAppUserDto';

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
        try {
            const user = this.userRepository.create(userRegisterDto);

            return this.userRepository.save(user);
        } catch (e) {
            Logger.error('[createUser] error', e);
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

    public async updateUser(user: UpdateAppUserDto): Promise<UserDto> {
        try {
            return (await this.userRepository.save(user)).toDto();
        } catch (e) {
            Logger.error('[updateUser] error', e, AppUserService.name);
        }
    }

    public async getUser(id: string): Promise<UserDto> {
        try {
            return (
                await this.userRepository.findOne({
                    where: {
                        id,
                    },
                })
            ).toDto();
        } catch (e) {
            Logger.error('[getUser] error', e, AppUserService.name);
        }
    }

    public async deleteUser(id: string): Promise<UserDto> {
        try {
            const user = await this.userRepository.findOne({
                where: {
                    id,
                },
            });
            if (!user) {
                throw new NotFoundException(`not found user: id ${id}`);
            }
            return (await this.userRepository.remove(user)).toDto();
        } catch (e) {
            Logger.error('[deleteUser] error', e, AppUserService.name);
        }
    }
}
