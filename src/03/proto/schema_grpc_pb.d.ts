// GENERATED CODE -- DO NOT EDIT!

// package: chapter03
// file: schema.proto

import * as schema_pb from "./schema_pb";
import * as grpc from "grpc";

interface IEchoService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  echo: grpc.MethodDefinition<schema_pb.EchoObject, schema_pb.EchoObject>;
}

export const EchoService: IEchoService;

export class EchoClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  echo(argument: schema_pb.EchoObject, callback: grpc.requestCallback<schema_pb.EchoObject>): grpc.ClientUnaryCall;
  echo(argument: schema_pb.EchoObject, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<schema_pb.EchoObject>): grpc.ClientUnaryCall;
  echo(argument: schema_pb.EchoObject, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<schema_pb.EchoObject>): grpc.ClientUnaryCall;
}
