// package: chapter04
// file: schema.proto

import * as jspb from "google-protobuf";

export class MyNestedBox extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MyNestedBox.AsObject;
  static toObject(includeInstance: boolean, msg: MyNestedBox): MyNestedBox.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MyNestedBox, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MyNestedBox;
  static deserializeBinaryFromReader(message: MyNestedBox, reader: jspb.BinaryReader): MyNestedBox;
}

export namespace MyNestedBox {
  export type AsObject = {
  }

  export class BooleanBox extends jspb.Message {
    getVal(): boolean;
    setVal(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BooleanBox.AsObject;
    static toObject(includeInstance: boolean, msg: BooleanBox): BooleanBox.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BooleanBox, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BooleanBox;
    static deserializeBinaryFromReader(message: BooleanBox, reader: jspb.BinaryReader): BooleanBox;
  }

  export namespace BooleanBox {
    export type AsObject = {
      val: boolean,
    }
  }

  export class NumbericBox extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NumbericBox.AsObject;
    static toObject(includeInstance: boolean, msg: NumbericBox): NumbericBox.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NumbericBox, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NumbericBox;
    static deserializeBinaryFromReader(message: NumbericBox, reader: jspb.BinaryReader): NumbericBox;
  }

  export namespace NumbericBox {
    export type AsObject = {
    }

    export class UInt32Box extends jspb.Message {
      getVal(): number;
      setVal(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): UInt32Box.AsObject;
      static toObject(includeInstance: boolean, msg: UInt32Box): UInt32Box.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: UInt32Box, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): UInt32Box;
      static deserializeBinaryFromReader(message: UInt32Box, reader: jspb.BinaryReader): UInt32Box;
    }

    export namespace UInt32Box {
      export type AsObject = {
        val: number,
      }
    }

    export class UInt64Box extends jspb.Message {
      getVal(): number;
      setVal(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): UInt64Box.AsObject;
      static toObject(includeInstance: boolean, msg: UInt64Box): UInt64Box.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: UInt64Box, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): UInt64Box;
      static deserializeBinaryFromReader(message: UInt64Box, reader: jspb.BinaryReader): UInt64Box;
    }

    export namespace UInt64Box {
      export type AsObject = {
        val: number,
      }
    }
  }
}

export class MyUnionBox extends jspb.Message {
  hasOneofUint32(): boolean;
  clearOneofUint32(): void;
  getOneofUint32(): number;
  setOneofUint32(value: number): void;

  hasOneofString(): boolean;
  clearOneofString(): void;
  getOneofString(): string;
  setOneofString(value: string): void;

  getOneofCase(): MyUnionBox.OneofCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MyUnionBox.AsObject;
  static toObject(includeInstance: boolean, msg: MyUnionBox): MyUnionBox.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MyUnionBox, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MyUnionBox;
  static deserializeBinaryFromReader(message: MyUnionBox, reader: jspb.BinaryReader): MyUnionBox;
}

export namespace MyUnionBox {
  export type AsObject = {
    oneofUint32: number,
    oneofString: string,
  }

  export enum OneofCase {
    ONEOF_NOT_SET = 0,
    ONEOF_UINT32 = 1,
    ONEOF_STRING = 2,
  }
}

export class EchoObject extends jspb.Message {
  hasUint32box(): boolean;
  clearUint32box(): void;
  getUint32box(): MyNestedBox.NumbericBox.UInt32Box | undefined;
  setUint32box(value?: MyNestedBox.NumbericBox.UInt32Box): void;

  hasUnionbox(): boolean;
  clearUnionbox(): void;
  getUnionbox(): MyUnionBox | undefined;
  setUnionbox(value?: MyUnionBox): void;

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
    uint32box?: MyNestedBox.NumbericBox.UInt32Box.AsObject,
    unionbox?: MyUnionBox.AsObject,
  }
}

