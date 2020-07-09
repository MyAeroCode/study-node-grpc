// package: chapter07
// file: schema.proto

import * as jspb from "google-protobuf";

export class EchoObject extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

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
    message: string,
  }
}

