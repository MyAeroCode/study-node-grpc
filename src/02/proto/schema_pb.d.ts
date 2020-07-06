// package: chapter02
// file: schema.proto

import * as jspb from "google-protobuf";

export class Echo1Object extends jspb.Message {
  getD(): number;
  setD(value: number): void;

  getF(): number;
  setF(value: number): void;

  getI32(): number;
  setI32(value: number): void;

  getI64(): number;
  setI64(value: number): void;

  getUi32(): number;
  setUi32(value: number): void;

  getUi64(): number;
  setUi64(value: number): void;

  getSi32(): number;
  setSi32(value: number): void;

  getSi64(): number;
  setSi64(value: number): void;

  getFix32(): number;
  setFix32(value: number): void;

  getFix64(): number;
  setFix64(value: number): void;

  getSfix32(): number;
  setSfix32(value: number): void;

  getSfix64(): number;
  setSfix64(value: number): void;

  getB(): boolean;
  setB(value: boolean): void;

  getS(): string;
  setS(value: string): void;

  getBytes(): Uint8Array | string;
  getBytes_asU8(): Uint8Array;
  getBytes_asB64(): string;
  setBytes(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Echo1Object.AsObject;
  static toObject(includeInstance: boolean, msg: Echo1Object): Echo1Object.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Echo1Object, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Echo1Object;
  static deserializeBinaryFromReader(message: Echo1Object, reader: jspb.BinaryReader): Echo1Object;
}

export namespace Echo1Object {
  export type AsObject = {
    d: number,
    f: number,
    i32: number,
    i64: number,
    ui32: number,
    ui64: number,
    si32: number,
    si64: number,
    fix32: number,
    fix64: number,
    sfix32: number,
    sfix64: number,
    b: boolean,
    s: string,
    bytes: Uint8Array | string,
  }
}

export class InnerMessage1 extends jspb.Message {
  getA(): number;
  setA(value: number): void;

  getB(): number;
  setB(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InnerMessage1.AsObject;
  static toObject(includeInstance: boolean, msg: InnerMessage1): InnerMessage1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InnerMessage1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InnerMessage1;
  static deserializeBinaryFromReader(message: InnerMessage1, reader: jspb.BinaryReader): InnerMessage1;
}

export namespace InnerMessage1 {
  export type AsObject = {
    a: number,
    b: number,
  }
}

export class InnerMessage2 extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InnerMessage2.AsObject;
  static toObject(includeInstance: boolean, msg: InnerMessage2): InnerMessage2.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InnerMessage2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InnerMessage2;
  static deserializeBinaryFromReader(message: InnerMessage2, reader: jspb.BinaryReader): InnerMessage2;
}

export namespace InnerMessage2 {
  export type AsObject = {
    x: number,
    y: number,
  }
}

export class Echo2Object extends jspb.Message {
  hasM1(): boolean;
  clearM1(): void;
  getM1(): InnerMessage1 | undefined;
  setM1(value?: InnerMessage1): void;

  hasM2(): boolean;
  clearM2(): void;
  getM2(): InnerMessage2 | undefined;
  setM2(value?: InnerMessage2): void;

  getDirection(): DirectionMap[keyof DirectionMap];
  setDirection(value: DirectionMap[keyof DirectionMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Echo2Object.AsObject;
  static toObject(includeInstance: boolean, msg: Echo2Object): Echo2Object.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Echo2Object, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Echo2Object;
  static deserializeBinaryFromReader(message: Echo2Object, reader: jspb.BinaryReader): Echo2Object;
}

export namespace Echo2Object {
  export type AsObject = {
    m1?: InnerMessage1.AsObject,
    m2?: InnerMessage2.AsObject,
    direction: DirectionMap[keyof DirectionMap],
  }
}

export class Echo3Object extends jspb.Message {
  clearXList(): void;
  getXList(): Array<number>;
  setXList(value: Array<number>): void;
  addX(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Echo3Object.AsObject;
  static toObject(includeInstance: boolean, msg: Echo3Object): Echo3Object.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Echo3Object, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Echo3Object;
  static deserializeBinaryFromReader(message: Echo3Object, reader: jspb.BinaryReader): Echo3Object;
}

export namespace Echo3Object {
  export type AsObject = {
    xList: Array<number>,
  }
}

export interface DirectionMap {
  UP: 0;
  DOWN: 1;
  LEFT: 2;
  RIGHT: 999;
}

export const Direction: DirectionMap;

