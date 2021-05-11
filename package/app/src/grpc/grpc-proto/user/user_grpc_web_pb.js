/**
 * @fileoverview gRPC-Web generated client stub for user
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.user = require('./user_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.user.UserServiceClient =
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
proto.user.UserServicePromiseClient =
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
 *   !proto.user.CreateUserReq,
 *   !proto.user.UserRes>}
 */
const methodDescriptor_UserService_CreateUser = new grpc.web.MethodDescriptor(
  '/user.UserService/CreateUser',
  grpc.web.MethodType.UNARY,
  proto.user.CreateUserReq,
  proto.user.UserRes,
  /**
   * @param {!proto.user.CreateUserReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.UserRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.user.CreateUserReq,
 *   !proto.user.UserRes>}
 */
const methodInfo_UserService_CreateUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.user.UserRes,
  /**
   * @param {!proto.user.CreateUserReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.UserRes.deserializeBinary
);


/**
 * @param {!proto.user.CreateUserReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.user.UserRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.UserRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.UserServiceClient.prototype.createUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.UserService/CreateUser',
      request,
      metadata || {},
      methodDescriptor_UserService_CreateUser,
      callback);
};


/**
 * @param {!proto.user.CreateUserReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.UserRes>}
 *     Promise that resolves to the response
 */
proto.user.UserServicePromiseClient.prototype.createUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.UserService/CreateUser',
      request,
      metadata || {},
      methodDescriptor_UserService_CreateUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.UpdateUserReq,
 *   !proto.user.UserRes>}
 */
const methodDescriptor_UserService_UpdateUser = new grpc.web.MethodDescriptor(
  '/user.UserService/UpdateUser',
  grpc.web.MethodType.UNARY,
  proto.user.UpdateUserReq,
  proto.user.UserRes,
  /**
   * @param {!proto.user.UpdateUserReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.UserRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.user.UpdateUserReq,
 *   !proto.user.UserRes>}
 */
const methodInfo_UserService_UpdateUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.user.UserRes,
  /**
   * @param {!proto.user.UpdateUserReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.UserRes.deserializeBinary
);


/**
 * @param {!proto.user.UpdateUserReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.user.UserRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.UserRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.UserServiceClient.prototype.updateUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.UserService/UpdateUser',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateUser,
      callback);
};


/**
 * @param {!proto.user.UpdateUserReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.UserRes>}
 *     Promise that resolves to the response
 */
proto.user.UserServicePromiseClient.prototype.updateUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.UserService/UpdateUser',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.UserReq,
 *   !proto.user.Stub>}
 */
const methodDescriptor_UserService_DeleteUser = new grpc.web.MethodDescriptor(
  '/user.UserService/DeleteUser',
  grpc.web.MethodType.UNARY,
  proto.user.UserReq,
  proto.user.Stub,
  /**
   * @param {!proto.user.UserReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.Stub.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.user.UserReq,
 *   !proto.user.Stub>}
 */
const methodInfo_UserService_DeleteUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.user.Stub,
  /**
   * @param {!proto.user.UserReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.Stub.deserializeBinary
);


/**
 * @param {!proto.user.UserReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.user.Stub)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.Stub>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.UserServiceClient.prototype.deleteUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.UserService/DeleteUser',
      request,
      metadata || {},
      methodDescriptor_UserService_DeleteUser,
      callback);
};


/**
 * @param {!proto.user.UserReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.Stub>}
 *     Promise that resolves to the response
 */
proto.user.UserServicePromiseClient.prototype.deleteUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.UserService/DeleteUser',
      request,
      metadata || {},
      methodDescriptor_UserService_DeleteUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.VerifyUserReq,
 *   !proto.user.UserRes>}
 */
const methodDescriptor_UserService_VerifyUser = new grpc.web.MethodDescriptor(
  '/user.UserService/VerifyUser',
  grpc.web.MethodType.UNARY,
  proto.user.VerifyUserReq,
  proto.user.UserRes,
  /**
   * @param {!proto.user.VerifyUserReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.UserRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.user.VerifyUserReq,
 *   !proto.user.UserRes>}
 */
const methodInfo_UserService_VerifyUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.user.UserRes,
  /**
   * @param {!proto.user.VerifyUserReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.UserRes.deserializeBinary
);


/**
 * @param {!proto.user.VerifyUserReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.user.UserRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.UserRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.UserServiceClient.prototype.verifyUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.UserService/VerifyUser',
      request,
      metadata || {},
      methodDescriptor_UserService_VerifyUser,
      callback);
};


/**
 * @param {!proto.user.VerifyUserReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.UserRes>}
 *     Promise that resolves to the response
 */
proto.user.UserServicePromiseClient.prototype.verifyUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.UserService/VerifyUser',
      request,
      metadata || {},
      methodDescriptor_UserService_VerifyUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.UserReq,
 *   !proto.user.UserRes>}
 */
const methodDescriptor_UserService_GetUser = new grpc.web.MethodDescriptor(
  '/user.UserService/GetUser',
  grpc.web.MethodType.UNARY,
  proto.user.UserReq,
  proto.user.UserRes,
  /**
   * @param {!proto.user.UserReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.UserRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.user.UserReq,
 *   !proto.user.UserRes>}
 */
const methodInfo_UserService_GetUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.user.UserRes,
  /**
   * @param {!proto.user.UserReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.UserRes.deserializeBinary
);


/**
 * @param {!proto.user.UserReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.user.UserRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.UserRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.UserServiceClient.prototype.getUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.UserService/GetUser',
      request,
      metadata || {},
      methodDescriptor_UserService_GetUser,
      callback);
};


/**
 * @param {!proto.user.UserReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.UserRes>}
 *     Promise that resolves to the response
 */
proto.user.UserServicePromiseClient.prototype.getUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.UserService/GetUser',
      request,
      metadata || {},
      methodDescriptor_UserService_GetUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.Stub,
 *   !proto.user.UsersRes>}
 */
const methodDescriptor_UserService_GetUsers = new grpc.web.MethodDescriptor(
  '/user.UserService/GetUsers',
  grpc.web.MethodType.UNARY,
  proto.user.Stub,
  proto.user.UsersRes,
  /**
   * @param {!proto.user.Stub} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.UsersRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.user.Stub,
 *   !proto.user.UsersRes>}
 */
const methodInfo_UserService_GetUsers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.user.UsersRes,
  /**
   * @param {!proto.user.Stub} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.UsersRes.deserializeBinary
);


/**
 * @param {!proto.user.Stub} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.user.UsersRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.UsersRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.UserServiceClient.prototype.getUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.UserService/GetUsers',
      request,
      metadata || {},
      methodDescriptor_UserService_GetUsers,
      callback);
};


/**
 * @param {!proto.user.Stub} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.UsersRes>}
 *     Promise that resolves to the response
 */
proto.user.UserServicePromiseClient.prototype.getUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.UserService/GetUsers',
      request,
      metadata || {},
      methodDescriptor_UserService_GetUsers);
};


module.exports = proto.user;

