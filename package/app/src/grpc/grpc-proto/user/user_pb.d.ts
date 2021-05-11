import * as jspb from 'google-protobuf';

export class User extends jspb.Message {
    getId(): number;
    setId(value: number): User;

    getEmail(): string;
    setEmail(value: string): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static serializeBinaryToWriter(
        message: User,
        writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(
        message: User,
        reader: jspb.BinaryReader
    ): User;
}

export namespace User {
    export type AsObject = {
        id: number;
        email: string;
    };
}

export class CreateUserReq extends jspb.Message {
    getEmail(): string;
    setEmail(value: string): CreateUserReq;

    getPassword(): string;
    setPassword(value: string): CreateUserReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateUserReq.AsObject;
    static toObject(
        includeInstance: boolean,
        msg: CreateUserReq
    ): CreateUserReq.AsObject;
    static serializeBinaryToWriter(
        message: CreateUserReq,
        writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): CreateUserReq;
    static deserializeBinaryFromReader(
        message: CreateUserReq,
        reader: jspb.BinaryReader
    ): CreateUserReq;
}

export namespace CreateUserReq {
    export type AsObject = {
        email: string;
        password: string;
    };
}

export class UpdateUserReq extends jspb.Message {
    getEmail(): string;
    setEmail(value: string): UpdateUserReq;

    getPassword(): string;
    setPassword(value: string): UpdateUserReq;

    getId(): number;
    setId(value: number): UpdateUserReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateUserReq.AsObject;
    static toObject(
        includeInstance: boolean,
        msg: UpdateUserReq
    ): UpdateUserReq.AsObject;
    static serializeBinaryToWriter(
        message: UpdateUserReq,
        writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): UpdateUserReq;
    static deserializeBinaryFromReader(
        message: UpdateUserReq,
        reader: jspb.BinaryReader
    ): UpdateUserReq;
}

export namespace UpdateUserReq {
    export type AsObject = {
        email: string;
        password: string;
        id: number;
    };
}

export class VerifyUserReq extends jspb.Message {
    getEmail(): string;
    setEmail(value: string): VerifyUserReq;

    getPassword(): string;
    setPassword(value: string): VerifyUserReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VerifyUserReq.AsObject;
    static toObject(
        includeInstance: boolean,
        msg: VerifyUserReq
    ): VerifyUserReq.AsObject;
    static serializeBinaryToWriter(
        message: VerifyUserReq,
        writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): VerifyUserReq;
    static deserializeBinaryFromReader(
        message: VerifyUserReq,
        reader: jspb.BinaryReader
    ): VerifyUserReq;
}

export namespace VerifyUserReq {
    export type AsObject = {
        email: string;
        password: string;
    };
}

export class UserReq extends jspb.Message {
    getId(): number;
    setId(value: number): UserReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserReq.AsObject;
    static toObject(includeInstance: boolean, msg: UserReq): UserReq.AsObject;
    static serializeBinaryToWriter(
        message: UserReq,
        writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): UserReq;
    static deserializeBinaryFromReader(
        message: UserReq,
        reader: jspb.BinaryReader
    ): UserReq;
}

export namespace UserReq {
    export type AsObject = {
        id: number;
    };
}

export class UserRes extends jspb.Message {
    getId(): number;
    setId(value: number): UserRes;

    getEmail(): string;
    setEmail(value: string): UserRes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserRes.AsObject;
    static toObject(includeInstance: boolean, msg: UserRes): UserRes.AsObject;
    static serializeBinaryToWriter(
        message: UserRes,
        writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): UserRes;
    static deserializeBinaryFromReader(
        message: UserRes,
        reader: jspb.BinaryReader
    ): UserRes;
}

export namespace UserRes {
    export type AsObject = {
        id: number;
        email: string;
    };
}

export class UsersRes extends jspb.Message {
    getUsersList(): Array<UserRes>;
    setUsersList(value: Array<UserRes>): UsersRes;
    clearUsersList(): UsersRes;
    addUsers(value?: UserRes, index?: number): UserRes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UsersRes.AsObject;
    static toObject(includeInstance: boolean, msg: UsersRes): UsersRes.AsObject;
    static serializeBinaryToWriter(
        message: UsersRes,
        writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): UsersRes;
    static deserializeBinaryFromReader(
        message: UsersRes,
        reader: jspb.BinaryReader
    ): UsersRes;
}

export namespace UsersRes {
    export type AsObject = {
        usersList: Array<UserRes.AsObject>;
    };
}

export class Stub extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Stub.AsObject;
    static toObject(includeInstance: boolean, msg: Stub): Stub.AsObject;
    static serializeBinaryToWriter(
        message: Stub,
        writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): Stub;
    static deserializeBinaryFromReader(
        message: Stub,
        reader: jspb.BinaryReader
    ): Stub;
}

export namespace Stub {
    export type AsObject = {};
}

export enum EStatus {
    UNKNOWN = 0,
    SUCCESS = 1,
    ERROR = 2,
}
