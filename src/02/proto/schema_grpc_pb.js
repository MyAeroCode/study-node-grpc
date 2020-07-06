// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// Chapter 02
//    스칼라 자료형
//
//
// 프로토3 문법을 사용한다고 지정한다.
// 이것을 생략할 경우 프로토2 문법으로 해석한다.
'use strict';
var grpc = require('grpc');
var schema_pb = require('./schema_pb.js');

function serialize_chapter02_Echo1Object(arg) {
  if (!(arg instanceof schema_pb.Echo1Object)) {
    throw new Error('Expected argument of type chapter02.Echo1Object');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chapter02_Echo1Object(buffer_arg) {
  return schema_pb.Echo1Object.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chapter02_Echo2Object(arg) {
  if (!(arg instanceof schema_pb.Echo2Object)) {
    throw new Error('Expected argument of type chapter02.Echo2Object');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chapter02_Echo2Object(buffer_arg) {
  return schema_pb.Echo2Object.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chapter02_Echo3Object(arg) {
  if (!(arg instanceof schema_pb.Echo3Object)) {
    throw new Error('Expected argument of type chapter02.Echo3Object');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chapter02_Echo3Object(buffer_arg) {
  return schema_pb.Echo3Object.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// 서비스 명세
var EchoService = exports.EchoService = {
  echo1: {
    path: '/chapter02.Echo/echo1',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.Echo1Object,
    responseType: schema_pb.Echo1Object,
    requestSerialize: serialize_chapter02_Echo1Object,
    requestDeserialize: deserialize_chapter02_Echo1Object,
    responseSerialize: serialize_chapter02_Echo1Object,
    responseDeserialize: deserialize_chapter02_Echo1Object,
  },
  echo2: {
    path: '/chapter02.Echo/echo2',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.Echo2Object,
    responseType: schema_pb.Echo2Object,
    requestSerialize: serialize_chapter02_Echo2Object,
    requestDeserialize: deserialize_chapter02_Echo2Object,
    responseSerialize: serialize_chapter02_Echo2Object,
    responseDeserialize: deserialize_chapter02_Echo2Object,
  },
  echo3: {
    path: '/chapter02.Echo/echo3',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.Echo3Object,
    responseType: schema_pb.Echo3Object,
    requestSerialize: serialize_chapter02_Echo3Object,
    requestDeserialize: deserialize_chapter02_Echo3Object,
    responseSerialize: serialize_chapter02_Echo3Object,
    responseDeserialize: deserialize_chapter02_Echo3Object,
  },
};

exports.EchoClient = grpc.makeGenericClientConstructor(EchoService);
