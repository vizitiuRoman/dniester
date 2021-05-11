/**
 * @fileoverview gRPC-Web generated client stub for auth
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.auth = require('./auth_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.auth.AuthServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.auth.AuthServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.auth.AuthReq,
 *   !proto.auth.AuthRes>}
 */
const methodDescriptor_AuthService_Auth = new grpc.web.MethodDescriptor(
  '/auth.AuthService/Auth',
  grpc.web.MethodType.UNARY,
  proto.auth.AuthReq,
  proto.auth.AuthRes,
  /**
   * @param {!proto.auth.AuthReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.AuthRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.auth.AuthReq,
 *   !proto.auth.AuthRes>}
 */
const methodInfo_AuthService_Auth = new grpc.web.AbstractClientBase.MethodInfo(
  proto.auth.AuthRes,
  /**
   * @param {!proto.auth.AuthReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.AuthRes.deserializeBinary
);


/**
 * @param {!proto.auth.AuthReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.auth.AuthRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.auth.AuthRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.AuthServiceClient.prototype.auth =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.AuthService/Auth',
      request,
      metadata || {},
      methodDescriptor_AuthService_Auth,
      callback);
};


/**
 * @param {!proto.auth.AuthReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.auth.AuthRes>}
 *     Promise that resolves to the response
 */
proto.auth.AuthServicePromiseClient.prototype.auth =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.AuthService/Auth',
      request,
      metadata || {},
      methodDescriptor_AuthService_Auth);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.auth.RegisterReq,
 *   !proto.auth.AuthRes>}
 */
const methodDescriptor_AuthService_Register = new grpc.web.MethodDescriptor(
  '/auth.AuthService/Register',
  grpc.web.MethodType.UNARY,
  proto.auth.RegisterReq,
  proto.auth.AuthRes,
  /**
   * @param {!proto.auth.RegisterReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.AuthRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.auth.RegisterReq,
 *   !proto.auth.AuthRes>}
 */
const methodInfo_AuthService_Register = new grpc.web.AbstractClientBase.MethodInfo(
  proto.auth.AuthRes,
  /**
   * @param {!proto.auth.RegisterReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.AuthRes.deserializeBinary
);


/**
 * @param {!proto.auth.RegisterReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.auth.AuthRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.auth.AuthRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.AuthServiceClient.prototype.register =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.AuthService/Register',
      request,
      metadata || {},
      methodDescriptor_AuthService_Register,
      callback);
};


/**
 * @param {!proto.auth.RegisterReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.auth.AuthRes>}
 *     Promise that resolves to the response
 */
proto.auth.AuthServicePromiseClient.prototype.register =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.AuthService/Register',
      request,
      metadata || {},
      methodDescriptor_AuthService_Register);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.auth.UpdateAuthReq,
 *   !proto.auth.UpdateAuthRes>}
 */
const methodDescriptor_AuthService_UpdateAuth = new grpc.web.MethodDescriptor(
  '/auth.AuthService/UpdateAuth',
  grpc.web.MethodType.UNARY,
  proto.auth.UpdateAuthReq,
  proto.auth.UpdateAuthRes,
  /**
   * @param {!proto.auth.UpdateAuthReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.UpdateAuthRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.auth.UpdateAuthReq,
 *   !proto.auth.UpdateAuthRes>}
 */
const methodInfo_AuthService_UpdateAuth = new grpc.web.AbstractClientBase.MethodInfo(
  proto.auth.UpdateAuthRes,
  /**
   * @param {!proto.auth.UpdateAuthReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.UpdateAuthRes.deserializeBinary
);


/**
 * @param {!proto.auth.UpdateAuthReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.auth.UpdateAuthRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.auth.UpdateAuthRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.AuthServiceClient.prototype.updateAuth =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.AuthService/UpdateAuth',
      request,
      metadata || {},
      methodDescriptor_AuthService_UpdateAuth,
      callback);
};


/**
 * @param {!proto.auth.UpdateAuthReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.auth.UpdateAuthRes>}
 *     Promise that resolves to the response
 */
proto.auth.AuthServicePromiseClient.prototype.updateAuth =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.AuthService/UpdateAuth',
      request,
      metadata || {},
      methodDescriptor_AuthService_UpdateAuth);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.auth.Stub,
 *   !proto.auth.Stub>}
 */
const methodDescriptor_AuthService_Logout = new grpc.web.MethodDescriptor(
  '/auth.AuthService/Logout',
  grpc.web.MethodType.UNARY,
  proto.auth.Stub,
  proto.auth.Stub,
  /**
   * @param {!proto.auth.Stub} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.Stub.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.auth.Stub,
 *   !proto.auth.Stub>}
 */
const methodInfo_AuthService_Logout = new grpc.web.AbstractClientBase.MethodInfo(
  proto.auth.Stub,
  /**
   * @param {!proto.auth.Stub} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.Stub.deserializeBinary
);


/**
 * @param {!proto.auth.Stub} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.auth.Stub)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.auth.Stub>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.AuthServiceClient.prototype.logout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.AuthService/Logout',
      request,
      metadata || {},
      methodDescriptor_AuthService_Logout,
      callback);
};


/**
 * @param {!proto.auth.Stub} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.auth.Stub>}
 *     Promise that resolves to the response
 */
proto.auth.AuthServicePromiseClient.prototype.logout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.AuthService/Logout',
      request,
      metadata || {},
      methodDescriptor_AuthService_Logout);
};


module.exports = proto.auth;

