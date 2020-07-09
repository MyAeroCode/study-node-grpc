// GENERATED CODE -- DO NOT EDIT!

// package: hello
// file: schema.proto

import * as schema_pb from "./schema_pb";
import * as grpc from "grpc";

interface IHelloService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  hello: grpc.MethodDefinition<schema_pb.HelloRequest, schema_pb.HelloResponse>;
}

export const HelloService: IHelloService;

export class HelloClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  hello(argument: schema_pb.HelloRequest, callback: grpc.requestCallback<schema_pb.HelloResponse>): grpc.ClientUnaryCall;
  hello(argument: schema_pb.HelloRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<schema_pb.HelloResponse>): grpc.ClientUnaryCall;
  hello(argument: schema_pb.HelloRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<schema_pb.HelloResponse>): grpc.ClientUnaryCall;
}
