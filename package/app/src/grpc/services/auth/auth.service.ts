import { AuthServicePromiseClient } from '@grpc/grpc-proto/auth/auth_grpc_web_pb';
import { Observable } from 'rxjs';
import { Metadata } from 'grpc-web';

import { grpcJwtMetadata } from '@grpc/helpers/grpc-metadata';
import { grpcUnary } from '@grpc/helpers/grpc-unary';
import { AuthReq, AuthRes, RegisterReq, Stub, UpdateAuthReq, UpdateAuthRes } from '@grpc/grpc-proto/auth/auth_pb';

type AuthService = {
    auth(data: AuthReq.AsObject): Observable<AuthRes.AsObject>
    register(data: AuthReq.AsObject): Observable<AuthRes.AsObject>
    updateAuth(
        data: UpdateAuthReq.AsObject,
    ): Observable<UpdateAuthRes.AsObject>
    logout(): Observable<void>
}

export default function AuthGrpcService(
    client: AuthServicePromiseClient,
): AuthService {
    function auth(data: AuthReq.AsObject): Observable<AuthRes.AsObject> {
        const req = new AuthReq();

        req.setEmail(data.email);
        req.setPassword(data.password);

        return grpcUnary<AuthRes.AsObject>(client.auth(req));
    }

    function register(data: AuthReq.AsObject): Observable<AuthRes.AsObject> {
        const req = new RegisterReq();

        req.setEmail(data.email);
        req.setPassword(data.password);

        return grpcUnary<AuthRes.AsObject>(client.register(req));
    }

    function updateAuth(
        data: UpdateAuthReq.AsObject,
    ): Observable<UpdateAuthRes.AsObject> {
        const req = new UpdateAuthReq();
        const meta: Metadata = grpcJwtMetadata();

        req.setRefreshtoken(data.refreshtoken);

        return grpcUnary<AuthRes.AsObject>(client.updateAuth(req, meta));
    }

    function logout(): Observable<void> {
        const req = new Stub();
        const meta: Metadata = grpcJwtMetadata();

        return grpcUnary<void>(client.logout(req, meta));
    }

    return {
        auth,
        logout,
        updateAuth,
        register,
    };
}
