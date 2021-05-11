import { Metadata } from 'grpc-web';

import { ACCESS_TOKEN } from '@constants/storage';

export function grpcJwtMetadata(token: string = ''): Metadata {
    return {
        Authorization: token || JSON.parse(ACCESS_TOKEN),
    };
}
