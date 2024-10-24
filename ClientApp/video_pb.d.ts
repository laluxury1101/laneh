import * as jspb from 'google-protobuf'



export class JoinRequest extends jspb.Message {
  getUser(): string;
  setUser(value: string): JoinRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JoinRequest): JoinRequest.AsObject;
  static serializeBinaryToWriter(message: JoinRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinRequest;
  static deserializeBinaryFromReader(message: JoinRequest, reader: jspb.BinaryReader): JoinRequest;
}

export namespace JoinRequest {
  export type AsObject = {
    user: string,
  }
}

export class CallResponse extends jspb.Message {
  getUser(): string;
  setUser(value: string): CallResponse;

  getSdp(): string;
  setSdp(value: string): CallResponse;

  getType(): string;
  setType(value: string): CallResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CallResponse): CallResponse.AsObject;
  static serializeBinaryToWriter(message: CallResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallResponse;
  static deserializeBinaryFromReader(message: CallResponse, reader: jspb.BinaryReader): CallResponse;
}

export namespace CallResponse {
  export type AsObject = {
    user: string,
    sdp: string,
    type: string,
  }
}

export class SignalMessage extends jspb.Message {
  getSdp(): string;
  setSdp(value: string): SignalMessage;

  getType(): string;
  setType(value: string): SignalMessage;

  getTouser(): string;
  setTouser(value: string): SignalMessage;

  getFromuser(): string;
  setFromuser(value: string): SignalMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignalMessage.AsObject;
  static toObject(includeInstance: boolean, msg: SignalMessage): SignalMessage.AsObject;
  static serializeBinaryToWriter(message: SignalMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignalMessage;
  static deserializeBinaryFromReader(message: SignalMessage, reader: jspb.BinaryReader): SignalMessage;
}

export namespace SignalMessage {
  export type AsObject = {
    sdp: string,
    type: string,
    touser: string,
    fromuser: string,
  }
}

export class SignalAck extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): SignalAck;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignalAck.AsObject;
  static toObject(includeInstance: boolean, msg: SignalAck): SignalAck.AsObject;
  static serializeBinaryToWriter(message: SignalAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignalAck;
  static deserializeBinaryFromReader(message: SignalAck, reader: jspb.BinaryReader): SignalAck;
}

export namespace SignalAck {
  export type AsObject = {
    success: boolean,
  }
}

