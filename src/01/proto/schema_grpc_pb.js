// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// Proto3 문법을 사용한다고 명세한다.
'use strict';
var grpc = require('grpc');
var schema_pb = require('./schema_pb.js');

function serialize_hello_HelloRequest(arg) {
  if (!(arg instanceof schema_pb.HelloRequest)) {
    throw new Error('Expected argument of type hello.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hello_HelloRequest(buffer_arg) {
  return schema_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hello_HelloResponse(arg) {
  if (!(arg instanceof schema_pb.HelloResponse)) {
    throw new Error('Expected argument of type hello.HelloResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hello_HelloResponse(buffer_arg) {
  return schema_pb.HelloResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// 서비스 명세
var HelloServiceService = exports.HelloServiceService = {
  //
// 서비스에 속한 함수.
hello: {
    path: '/hello.HelloService/hello',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.HelloRequest,
    responseType: schema_pb.HelloResponse,
    requestSerialize: serialize_hello_HelloRequest,
    requestDeserialize: deserialize_hello_HelloRequest,
    responseSerialize: serialize_hello_HelloResponse,
    responseDeserialize: deserialize_hello_HelloResponse,
  },
};

exports.HelloServiceClient = grpc.makeGenericClientConstructor(HelloServiceService);
