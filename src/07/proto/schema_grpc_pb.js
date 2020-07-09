// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// Chapter 07
//    Error Handling
//
//
// 프로토3 문법을 사용한다고 지정한다.
// 이것을 생략할 경우 프로토2 문법으로 해석한다.
'use strict';
var grpc = require('grpc');
var schema_pb = require('./schema_pb.js');

function serialize_chapter07_EchoObject(arg) {
  if (!(arg instanceof schema_pb.EchoObject)) {
    throw new Error('Expected argument of type chapter07.EchoObject');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chapter07_EchoObject(buffer_arg) {
  return schema_pb.EchoObject.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// 서비스 명세
var EchoService = exports.EchoService = {
  //
// 콜백을 호출하지 않는다.
echo_nocallback: {
    path: '/chapter07.Echo/echo_nocallback',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.EchoObject,
    responseType: schema_pb.EchoObject,
    requestSerialize: serialize_chapter07_EchoObject,
    requestDeserialize: deserialize_chapter07_EchoObject,
    responseSerialize: serialize_chapter07_EchoObject,
    responseDeserialize: deserialize_chapter07_EchoObject,
  },
  //
// 콜백 전에 처리되지 않은 예외를 발생시킴.
echo_exception: {
    path: '/chapter07.Echo/echo_exception',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.EchoObject,
    responseType: schema_pb.EchoObject,
    requestSerialize: serialize_chapter07_EchoObject,
    requestDeserialize: deserialize_chapter07_EchoObject,
    responseSerialize: serialize_chapter07_EchoObject,
    responseDeserialize: deserialize_chapter07_EchoObject,
  },
  //
// 콜백으로 에러를 넘김.
echo_callback_with_error: {
    path: '/chapter07.Echo/echo_callback_with_error',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.EchoObject,
    responseType: schema_pb.EchoObject,
    requestSerialize: serialize_chapter07_EchoObject,
    requestDeserialize: deserialize_chapter07_EchoObject,
    responseSerialize: serialize_chapter07_EchoObject,
    responseDeserialize: deserialize_chapter07_EchoObject,
  },
};

exports.EchoClient = grpc.makeGenericClientConstructor(EchoService);
