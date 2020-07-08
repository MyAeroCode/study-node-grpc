// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// Chapter 06
//    Stream
//
//
// 프로토3 문법을 사용한다고 지정한다.
// 이것을 생략할 경우 프로토2 문법으로 해석한다.
'use strict';
var grpc = require('grpc');
var schema_pb = require('./schema_pb.js');

function serialize_chapter06_NumberData(arg) {
  if (!(arg instanceof schema_pb.NumberData)) {
    throw new Error('Expected argument of type chapter06.NumberData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chapter06_NumberData(buffer_arg) {
  return schema_pb.NumberData.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// 서비스 명세
var StreamTestService = exports.StreamTestService = {
  //
// 인자로 받은 숫자 하나를 그래도 반환한다.
echo: {
    path: '/chapter06.StreamTest/echo',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.NumberData,
    responseType: schema_pb.NumberData,
    requestSerialize: serialize_chapter06_NumberData,
    requestDeserialize: deserialize_chapter06_NumberData,
    responseSerialize: serialize_chapter06_NumberData,
    responseDeserialize: deserialize_chapter06_NumberData,
  },
  //
// 스트림으로 받은 여러 숫자의 합을 반환한다.
sum: {
    path: '/chapter06.StreamTest/sum',
    requestStream: true,
    responseStream: false,
    requestType: schema_pb.NumberData,
    responseType: schema_pb.NumberData,
    requestSerialize: serialize_chapter06_NumberData,
    requestDeserialize: deserialize_chapter06_NumberData,
    responseSerialize: serialize_chapter06_NumberData,
    responseDeserialize: deserialize_chapter06_NumberData,
  },
  //
// 인자로 받은 숫자의 배수들을 반환한다.
mul: {
    path: '/chapter06.StreamTest/mul',
    requestStream: false,
    responseStream: true,
    requestType: schema_pb.NumberData,
    responseType: schema_pb.NumberData,
    requestSerialize: serialize_chapter06_NumberData,
    requestDeserialize: deserialize_chapter06_NumberData,
    responseSerialize: serialize_chapter06_NumberData,
    responseDeserialize: deserialize_chapter06_NumberData,
  },
  //
// 인자로 받은 숫자들을 변환하여 반환한다.
map: {
    path: '/chapter06.StreamTest/map',
    requestStream: true,
    responseStream: true,
    requestType: schema_pb.NumberData,
    responseType: schema_pb.NumberData,
    requestSerialize: serialize_chapter06_NumberData,
    requestDeserialize: deserialize_chapter06_NumberData,
    responseSerialize: serialize_chapter06_NumberData,
    responseDeserialize: deserialize_chapter06_NumberData,
  },
};

exports.StreamTestClient = grpc.makeGenericClientConstructor(StreamTestService);
