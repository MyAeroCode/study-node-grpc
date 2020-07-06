// GENERATED CODE -- DO NOT EDIT!

// package: chapter02
// file: schema.proto

import * as schema_pb from "./schema_pb";
import * as grpc from "grpc";

interface IEchoService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  echo1: grpc.MethodDefinition<schema_pb.Echo1Object, schema_pb.Echo1Object>;
  echo2: grpc.MethodDefinition<schema_pb.Echo2Object, schema_pb.Echo2Object>;
  echo3: grpc.MethodDefinition<schema_pb.Echo3Object, schema_pb.Echo3Object>;
}

export const EchoService: IEchoService;

export class EchoClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  echo1(argument: schema_pb.Echo1Object, callback: grpc.requestCallback<schema_pb.Echo1Object>): grpc.ClientUnaryCall;
  echo1(argument: schema_pb.Echo1Object, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<schema_pb.Echo1Object>): grpc.ClientUnaryCall;
  echo1(argument: schema_pb.Echo1Object, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<schema_pb.Echo1Object>): grpc.ClientUnaryCall;
  echo2(argument: schema_pb.Echo2Object, callback: grpc.requestCallback<schema_pb.Echo2Object>): grpc.ClientUnaryCall;
  echo2(argument: schema_pb.Echo2Object, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<schema_pb.Echo2Object>): grpc.ClientUnaryCall;
  echo2(argument: schema_pb.Echo2Object, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<schema_pb.Echo2Object>): grpc.ClientUnaryCall;
  echo3(argument: schema_pb.Echo3Object, callback: grpc.requestCallback<schema_pb.Echo3Object>): grpc.ClientUnaryCall;
  echo3(argument: schema_pb.Echo3Object, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<schema_pb.Echo3Object>): grpc.ClientUnaryCall;
  echo3(argument: schema_pb.Echo3Object, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<schema_pb.Echo3Object>): grpc.ClientUnaryCall;
}
