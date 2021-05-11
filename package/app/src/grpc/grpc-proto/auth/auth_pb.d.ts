import * as jspb from 'google-protobuf';

export class AuthReq extends jspb.Message {
    getEmail(): string;
    setEmail(value: string): AuthReq;

    getPassword(): string;
    setPassword(value: string): AuthReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthReq.AsObject;
    static toObject(includeInstance: boolean, msg: AuthReq): AuthReq.AsObject;
    static serializeBinaryToWriter(
        message: AuthReq,
        writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): AuthReq;
    static deserializeBinaryFromReader(
        message: AuthReq,
        reader: jspb.BinaryReader
    ): AuthReq;
}

export namespace AuthReq {
    export type AsObject = {
        email: string;
        password: string;
    };
}

export class RegisterReq extends jspb.Message {
    getEmail(): string;
    setEmail(value: string): RegisterReq;

    getPassword(): string;
    setPassword(value: string): RegisterReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterReq.AsObject;
    static toObject(
        includeInstance: boolean,
        msg: RegisterReq
    ): RegisterReq.AsObject;
    static serializeBinaryToWriter(
        message: RegisterReq,
        writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): RegisterReq;
    static deserializeBinaryFromReader(
        message: RegisterReq,
        reader: jspb.BinaryReader
    ): RegisterReq;
}

export namespace RegisterReq {
    export type AsObject = {
        email: string;
        password: string;
    };
}

export class AuthRes extends jspb.Message {
    getToken(): string;
    setToken(value: string): AuthRes;

    getRefreshtoken(): string;
    setRefreshtoken(value: string): AuthRes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthRes.AsObject;
    static toObject(includeInstance: boolean, msg: AuthRes): AuthRes.AsObject;
    static serializeBinaryToWriter(
        message: AuthRes,
        writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): AuthRes;
    static deserializeBinaryFromReader(
        message: AuthRes,
        reader: jspb.BinaryReader
    ): AuthRes;
}

export namespace AuthRes {
    export type AsObject = {
        token: string;
        refreshtoken: string;
    };
}

export class UpdateAuthReq extends jspb.Message {
    getRefreshtoken(): string;
    setRefreshtoken(value: string): UpdateAuthReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAuthReq.AsObject;
    static toObject(
        includeInstance: boolean,
        msg: UpdateAuthReq
    ): UpdateAuthReq.AsObject;
    static serializeBinaryToWriter(
        message: UpdateAuthReq,
        writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAuthReq;
    static deserializeBinaryFromReader(
        message: UpdateAuthReq,
        reader: jspb.BinaryReader
    ): UpdateAuthReq;
}

export namespace UpdateAuthReq {
    export type AsObject = {
        refreshtoken: string;
    };
}

export class UpdateAuthRes extends jspb.Message {
    getToken(): string;
    setToken(value: string): UpdateAuthRes;

    getRefreshtoken(): string;
    setRefreshtoken(value: string): UpdateAuthRes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAuthRes.AsObject;
    static toObject(
        includeInstance: boolean,
        msg: UpdateAuthRes
    ): UpdateAuthRes.AsObject;
    static serializeBinaryToWriter(
        message: UpdateAuthRes,
        writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAuthRes;
    static deserializeBinaryFromReader(
        message: UpdateAuthRes,
        reader: jspb.BinaryReader
    ): UpdateAuthRes;
}

export namespace UpdateAuthRes {
    export type AsObject = {
        token: string;
        refreshtoken: string;
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
