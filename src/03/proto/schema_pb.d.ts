// package: chapter03
// file: schema.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class EchoObject extends jspb.Message {
  getDictionaryMap(): jspb.Map<string, number>;
  clearDictionaryMap(): void;
  hasAny(): boolean;
  clearAny(): void;
  getAny(): google_protobuf_any_pb.Any | undefined;
  setAny(value?: google_protobuf_any_pb.Any): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDuration(): boolean;
  clearDuration(): void;
  getDuration(): google_protobuf_duration_pb.Duration | undefined;
  setDuration(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EchoObject.AsObject;
  static toObject(includeInstance: boolean, msg: EchoObject): EchoObject.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EchoObject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EchoObject;
  static deserializeBinaryFromReader(message: EchoObject, reader: jspb.BinaryReader): EchoObject;
}

export namespace EchoObject {
  export type AsObject = {
    dictionaryMap: Array<[string, number]>,
    any?: google_protobuf_any_pb.Any.AsObject,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    duration?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

