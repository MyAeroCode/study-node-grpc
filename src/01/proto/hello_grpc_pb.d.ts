// GENERATED CODE -- DO NOT EDIT!

// package: hello
// file: src/01/proto/hello.proto

import * as src_01_proto_hello_pb from "../../../src/01/proto/hello_pb";
import * as grpc from "grpc";

interface IHelloServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  hello: grpc.MethodDefinition<src_01_proto_hello_pb.HelloRequest, src_01_proto_hello_pb.HelloResponse>;
}

export const HelloServiceService: IHelloServiceService;

export class HelloServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  hello(argument: src_01_proto_hello_pb.HelloRequest, callback: grpc.requestCallback<src_01_proto_hello_pb.HelloResponse>): grpc.ClientUnaryCall;
  hello(argument: src_01_proto_hello_pb.HelloRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<src_01_proto_hello_pb.HelloResponse>): grpc.ClientUnaryCall;
  hello(argument: src_01_proto_hello_pb.HelloRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<src_01_proto_hello_pb.HelloResponse>): grpc.ClientUnaryCall;
}
