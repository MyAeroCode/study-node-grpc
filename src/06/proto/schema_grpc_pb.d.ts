// GENERATED CODE -- DO NOT EDIT!

// package: chapter06
// file: schema.proto

import * as schema_pb from "./schema_pb";
import * as grpc from "grpc";

interface IStreamTestService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  echo: grpc.MethodDefinition<schema_pb.NumberData, schema_pb.NumberData>;
  sum: grpc.MethodDefinition<schema_pb.NumberData, schema_pb.NumberData>;
  mul: grpc.MethodDefinition<schema_pb.NumberData, schema_pb.NumberData>;
  map: grpc.MethodDefinition<schema_pb.NumberData, schema_pb.NumberData>;
}

export const StreamTestService: IStreamTestService;

export class StreamTestClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  echo(argument: schema_pb.NumberData, callback: grpc.requestCallback<schema_pb.NumberData>): grpc.ClientUnaryCall;
  echo(argument: schema_pb.NumberData, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<schema_pb.NumberData>): grpc.ClientUnaryCall;
  echo(argument: schema_pb.NumberData, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<schema_pb.NumberData>): grpc.ClientUnaryCall;
  sum(callback: grpc.requestCallback<schema_pb.NumberData>): grpc.ClientWritableStream<schema_pb.NumberData>;
  sum(metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<schema_pb.NumberData>): grpc.ClientWritableStream<schema_pb.NumberData>;
  sum(metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<schema_pb.NumberData>): grpc.ClientWritableStream<schema_pb.NumberData>;
  mul(argument: schema_pb.NumberData, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<schema_pb.NumberData>;
  mul(argument: schema_pb.NumberData, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<schema_pb.NumberData>;
  map(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<schema_pb.NumberData, schema_pb.NumberData>;
  map(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<schema_pb.NumberData, schema_pb.NumberData>;
}
