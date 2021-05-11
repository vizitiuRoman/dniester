import * as grpcWeb from 'grpc-web';

import * as grpc$proto_user_user_pb from '../../grpc-proto/user/user_pb';

export class UserServiceClient {
    constructor(
        hostname: string,
        credentials?: null | { [index: string]: string },
        options?: null | { [index: string]: any }
    );

    createUser(
        request: grpc$proto_user_user_pb.CreateUserReq,
        metadata: grpcWeb.Metadata | undefined,
        callback: (
            err: grpcWeb.Error,
            response: grpc$proto_user_user_pb.UserRes
        ) => void
    ): grpcWeb.ClientReadableStream<grpc$proto_user_user_pb.UserRes>;

    updateUser(
        request: grpc$proto_user_user_pb.UpdateUserReq,
        metadata: grpcWeb.Metadata | undefined,
        callback: (
            err: grpcWeb.Error,
            response: grpc$proto_user_user_pb.UserRes
        ) => void
    ): grpcWeb.ClientReadableStream<grpc$proto_user_user_pb.UserRes>;

    deleteUser(
        request: grpc$proto_user_user_pb.UserReq,
        metadata: grpcWeb.Metadata | undefined,
        callback: (
            err: grpcWeb.Error,
            response: grpc$proto_user_user_pb.Stub
        ) => void
    ): grpcWeb.ClientReadableStream<grpc$proto_user_user_pb.Stub>;

    verifyUser(
        request: grpc$proto_user_user_pb.VerifyUserReq,
        metadata: grpcWeb.Metadata | undefined,
        callback: (
            err: grpcWeb.Error,
            response: grpc$proto_user_user_pb.UserRes
        ) => void
    ): grpcWeb.ClientReadableStream<grpc$proto_user_user_pb.UserRes>;

    getUser(
        request: grpc$proto_user_user_pb.UserReq,
        metadata: grpcWeb.Metadata | undefined,
        callback: (
            err: grpcWeb.Error,
            response: grpc$proto_user_user_pb.UserRes
        ) => void
    ): grpcWeb.ClientReadableStream<grpc$proto_user_user_pb.UserRes>;

    getUsers(
        request: grpc$proto_user_user_pb.Stub,
        metadata: grpcWeb.Metadata | undefined,
        callback: (
            err: grpcWeb.Error,
            response: grpc$proto_user_user_pb.UsersRes
        ) => void
    ): grpcWeb.ClientReadableStream<grpc$proto_user_user_pb.UsersRes>;
}

export class UserServicePromiseClient {
    constructor(
        hostname: string,
        credentials?: null | { [index: string]: string },
        options?: null | { [index: string]: any }
    );

    createUser(
        request: grpc$proto_user_user_pb.CreateUserReq,
        metadata?: grpcWeb.Metadata
    ): Promise<grpc$proto_user_user_pb.UserRes>;

    updateUser(
        request: grpc$proto_user_user_pb.UpdateUserReq,
        metadata?: grpcWeb.Metadata
    ): Promise<grpc$proto_user_user_pb.UserRes>;

    deleteUser(
        request: grpc$proto_user_user_pb.UserReq,
        metadata?: grpcWeb.Metadata
    ): Promise<grpc$proto_user_user_pb.Stub>;

    verifyUser(
        request: grpc$proto_user_user_pb.VerifyUserReq,
        metadata?: grpcWeb.Metadata
    ): Promise<grpc$proto_user_user_pb.UserRes>;

    getUser(
        request: grpc$proto_user_user_pb.UserReq,
        metadata?: grpcWeb.Metadata
    ): Promise<grpc$proto_user_user_pb.UserRes>;

    getUsers(
        request: grpc$proto_user_user_pb.Stub,
        metadata?: grpcWeb.Metadata
    ): Promise<grpc$proto_user_user_pb.UsersRes>;
}
