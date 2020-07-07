// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// Chapter 05
//    Reserved, Deprecated
//
//
// 프로토3 문법을 사용한다고 지정한다.
// 이것을 생략할 경우 프로토2 문법으로 해석한다.
'use strict';
var grpc = require('grpc');
var schema_pb = require('./schema_pb.js');

function serialize_chapter05_EchoObject(arg) {
  if (!(arg instanceof schema_pb.EchoObject)) {
    throw new Error('Expected argument of type chapter05.EchoObject');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chapter05_EchoObject(buffer_arg) {
  return schema_pb.EchoObject.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// 서비스 명세
var EchoService = exports.EchoService = {
  echo: {
    path: '/chapter05.Echo/echo',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.EchoObject,
    responseType: schema_pb.EchoObject,
    requestSerialize: serialize_chapter05_EchoObject,
    requestDeserialize: deserialize_chapter05_EchoObject,
    responseSerialize: serialize_chapter05_EchoObject,
    responseDeserialize: deserialize_chapter05_EchoObject,
  },
};

exports.EchoClient = grpc.makeGenericClientConstructor(EchoService);
