// package: chapter06
// file: schema.proto

import * as jspb from "google-protobuf";

export class NumberData extends jspb.Message {
  getN(): number;
  setN(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NumberData.AsObject;
  static toObject(includeInstance: boolean, msg: NumberData): NumberData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NumberData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NumberData;
  static deserializeBinaryFromReader(message: NumberData, reader: jspb.BinaryReader): NumberData;
}

export namespace NumberData {
  export type AsObject = {
    n: number,
  }
}

