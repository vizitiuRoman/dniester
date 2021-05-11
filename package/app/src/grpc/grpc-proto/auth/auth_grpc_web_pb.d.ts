import * as grpcWeb from 'grpc-web';

import * as grpc$proto_auth_auth_pb from '../../grpc-proto/auth/auth_pb';

export class AuthServiceClient {
    constructor(
        hostname: string,
        credentials?: null | { [index: string]: string },
        options?: null | { [index: string]: any }
    );

    auth(
        request: grpc$proto_auth_auth_pb.AuthReq,
        metadata: grpcWeb.Metadata | undefined,
        callback: (
            err: grpcWeb.Error,
            response: grpc$proto_auth_auth_pb.AuthRes
        ) => void
    ): grpcWeb.ClientReadableStream<grpc$proto_auth_auth_pb.AuthRes>;

    register(
        request: grpc$proto_auth_auth_pb.RegisterReq,
        metadata: grpcWeb.Metadata | undefined,
        callback: (
            err: grpcWeb.Error,
            response: grpc$proto_auth_auth_pb.AuthRes
        ) => void
    ): grpcWeb.ClientReadableStream<grpc$proto_auth_auth_pb.AuthRes>;

    updateAuth(
        request: grpc$proto_auth_auth_pb.UpdateAuthReq,
        metadata: grpcWeb.Metadata | undefined,
        callback: (
            err: grpcWeb.Error,
            response: grpc$proto_auth_auth_pb.UpdateAuthRes
        ) => void
    ): grpcWeb.ClientReadableStream<grpc$proto_auth_auth_pb.UpdateAuthRes>;

    logout(
        request: grpc$proto_auth_auth_pb.Stub,
        metadata: grpcWeb.Metadata | undefined,
        callback: (
            err: grpcWeb.Error,
            response: grpc$proto_auth_auth_pb.Stub
        ) => void
    ): grpcWeb.ClientReadableStream<grpc$proto_auth_auth_pb.Stub>;
}

export class AuthServicePromiseClient {
    constructor(
        hostname: string,
        credentials?: null | { [index: string]: string },
        options?: null | { [index: string]: any }
    );

    auth(
        request: grpc$proto_auth_auth_pb.AuthReq,
        metadata?: grpcWeb.Metadata
    ): Promise<grpc$proto_auth_auth_pb.AuthRes>;

    register(
        request: grpc$proto_auth_auth_pb.RegisterReq,
        metadata?: grpcWeb.Metadata
    ): Promise<grpc$proto_auth_auth_pb.AuthRes>;

    updateAuth(
        request: grpc$proto_auth_auth_pb.UpdateAuthReq,
        metadata?: grpcWeb.Metadata
    ): Promise<grpc$proto_auth_auth_pb.UpdateAuthRes>;

    logout(
        request: grpc$proto_auth_auth_pb.Stub,
        metadata?: grpcWeb.Metadata
    ): Promise<grpc$proto_auth_auth_pb.Stub>;
}
