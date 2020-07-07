// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// Chapter 03
//    다른 데이터 타입
//
//
// 프로토3 문법을 사용한다고 지정한다.
// 이것을 생략할 경우 프로토2 문법으로 해석한다.
'use strict';
var grpc = require('grpc');
var schema_pb = require('./schema_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');

function serialize_chapter03_EchoObject(arg) {
  if (!(arg instanceof schema_pb.EchoObject)) {
    throw new Error('Expected argument of type chapter03.EchoObject');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chapter03_EchoObject(buffer_arg) {
  return schema_pb.EchoObject.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// 서비스 명세
var EchoService = exports.EchoService = {
  echo: {
    path: '/chapter03.Echo/echo',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.EchoObject,
    responseType: schema_pb.EchoObject,
    requestSerialize: serialize_chapter03_EchoObject,
    requestDeserialize: deserialize_chapter03_EchoObject,
    responseSerialize: serialize_chapter03_EchoObject,
    responseDeserialize: deserialize_chapter03_EchoObject,
  },
};

exports.EchoClient = grpc.makeGenericClientConstructor(EchoService);
