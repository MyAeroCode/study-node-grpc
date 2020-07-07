// source: schema.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.chapter04.EchoObject', null, global);
goog.exportSymbol('proto.chapter04.MyNestedBox', null, global);
goog.exportSymbol('proto.chapter04.MyNestedBox.BooleanBox', null, global);
goog.exportSymbol('proto.chapter04.MyNestedBox.NumbericBox', null, global);
goog.exportSymbol('proto.chapter04.MyNestedBox.NumbericBox.UInt32Box', null, global);
goog.exportSymbol('proto.chapter04.MyNestedBox.NumbericBox.UInt64Box', null, global);
goog.exportSymbol('proto.chapter04.MyUnionBox', null, global);
goog.exportSymbol('proto.chapter04.MyUnionBox.OneofCase', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chapter04.MyNestedBox = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chapter04.MyNestedBox, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chapter04.MyNestedBox.displayName = 'proto.chapter04.MyNestedBox';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chapter04.MyNestedBox.BooleanBox = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chapter04.MyNestedBox.BooleanBox, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chapter04.MyNestedBox.BooleanBox.displayName = 'proto.chapter04.MyNestedBox.BooleanBox';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chapter04.MyNestedBox.NumbericBox = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chapter04.MyNestedBox.NumbericBox, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chapter04.MyNestedBox.NumbericBox.displayName = 'proto.chapter04.MyNestedBox.NumbericBox';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chapter04.MyNestedBox.NumbericBox.UInt32Box = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chapter04.MyNestedBox.NumbericBox.UInt32Box, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chapter04.MyNestedBox.NumbericBox.UInt32Box.displayName = 'proto.chapter04.MyNestedBox.NumbericBox.UInt32Box';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chapter04.MyNestedBox.NumbericBox.UInt64Box = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chapter04.MyNestedBox.NumbericBox.UInt64Box, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chapter04.MyNestedBox.NumbericBox.UInt64Box.displayName = 'proto.chapter04.MyNestedBox.NumbericBox.UInt64Box';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chapter04.MyUnionBox = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.chapter04.MyUnionBox.oneofGroups_);
};
goog.inherits(proto.chapter04.MyUnionBox, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chapter04.MyUnionBox.displayName = 'proto.chapter04.MyUnionBox';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chapter04.EchoObject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chapter04.EchoObject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chapter04.EchoObject.displayName = 'proto.chapter04.EchoObject';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chapter04.MyNestedBox.prototype.toObject = function(opt_includeInstance) {
  return proto.chapter04.MyNestedBox.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chapter04.MyNestedBox} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chapter04.MyNestedBox.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chapter04.MyNestedBox}
 */
proto.chapter04.MyNestedBox.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chapter04.MyNestedBox;
  return proto.chapter04.MyNestedBox.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chapter04.MyNestedBox} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chapter04.MyNestedBox}
 */
proto.chapter04.MyNestedBox.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chapter04.MyNestedBox.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chapter04.MyNestedBox.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chapter04.MyNestedBox} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chapter04.MyNestedBox.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chapter04.MyNestedBox.BooleanBox.prototype.toObject = function(opt_includeInstance) {
  return proto.chapter04.MyNestedBox.BooleanBox.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chapter04.MyNestedBox.BooleanBox} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chapter04.MyNestedBox.BooleanBox.toObject = function(includeInstance, msg) {
  var f, obj = {
    val: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chapter04.MyNestedBox.BooleanBox}
 */
proto.chapter04.MyNestedBox.BooleanBox.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chapter04.MyNestedBox.BooleanBox;
  return proto.chapter04.MyNestedBox.BooleanBox.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chapter04.MyNestedBox.BooleanBox} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chapter04.MyNestedBox.BooleanBox}
 */
proto.chapter04.MyNestedBox.BooleanBox.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chapter04.MyNestedBox.BooleanBox.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chapter04.MyNestedBox.BooleanBox.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chapter04.MyNestedBox.BooleanBox} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chapter04.MyNestedBox.BooleanBox.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVal();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool val = 1;
 * @return {boolean}
 */
proto.chapter04.MyNestedBox.BooleanBox.prototype.getVal = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.chapter04.MyNestedBox.BooleanBox} returns this
 */
proto.chapter04.MyNestedBox.BooleanBox.prototype.setVal = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chapter04.MyNestedBox.NumbericBox.prototype.toObject = function(opt_includeInstance) {
  return proto.chapter04.MyNestedBox.NumbericBox.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chapter04.MyNestedBox.NumbericBox} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chapter04.MyNestedBox.NumbericBox.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chapter04.MyNestedBox.NumbericBox}
 */
proto.chapter04.MyNestedBox.NumbericBox.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chapter04.MyNestedBox.NumbericBox;
  return proto.chapter04.MyNestedBox.NumbericBox.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chapter04.MyNestedBox.NumbericBox} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chapter04.MyNestedBox.NumbericBox}
 */
proto.chapter04.MyNestedBox.NumbericBox.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chapter04.MyNestedBox.NumbericBox.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chapter04.MyNestedBox.NumbericBox.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chapter04.MyNestedBox.NumbericBox} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chapter04.MyNestedBox.NumbericBox.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chapter04.MyNestedBox.NumbericBox.UInt32Box.prototype.toObject = function(opt_includeInstance) {
  return proto.chapter04.MyNestedBox.NumbericBox.UInt32Box.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chapter04.MyNestedBox.NumbericBox.UInt32Box} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chapter04.MyNestedBox.NumbericBox.UInt32Box.toObject = function(includeInstance, msg) {
  var f, obj = {
    val: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chapter04.MyNestedBox.NumbericBox.UInt32Box}
 */
proto.chapter04.MyNestedBox.NumbericBox.UInt32Box.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chapter04.MyNestedBox.NumbericBox.UInt32Box;
  return proto.chapter04.MyNestedBox.NumbericBox.UInt32Box.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chapter04.MyNestedBox.NumbericBox.UInt32Box} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chapter04.MyNestedBox.NumbericBox.UInt32Box}
 */
proto.chapter04.MyNestedBox.NumbericBox.UInt32Box.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chapter04.MyNestedBox.NumbericBox.UInt32Box.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chapter04.MyNestedBox.NumbericBox.UInt32Box.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chapter04.MyNestedBox.NumbericBox.UInt32Box} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chapter04.MyNestedBox.NumbericBox.UInt32Box.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVal();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 val = 1;
 * @return {number}
 */
proto.chapter04.MyNestedBox.NumbericBox.UInt32Box.prototype.getVal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.chapter04.MyNestedBox.NumbericBox.UInt32Box} returns this
 */
proto.chapter04.MyNestedBox.NumbericBox.UInt32Box.prototype.setVal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chapter04.MyNestedBox.NumbericBox.UInt64Box.prototype.toObject = function(opt_includeInstance) {
  return proto.chapter04.MyNestedBox.NumbericBox.UInt64Box.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chapter04.MyNestedBox.NumbericBox.UInt64Box} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chapter04.MyNestedBox.NumbericBox.UInt64Box.toObject = function(includeInstance, msg) {
  var f, obj = {
    val: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chapter04.MyNestedBox.NumbericBox.UInt64Box}
 */
proto.chapter04.MyNestedBox.NumbericBox.UInt64Box.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chapter04.MyNestedBox.NumbericBox.UInt64Box;
  return proto.chapter04.MyNestedBox.NumbericBox.UInt64Box.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chapter04.MyNestedBox.NumbericBox.UInt64Box} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chapter04.MyNestedBox.NumbericBox.UInt64Box}
 */
proto.chapter04.MyNestedBox.NumbericBox.UInt64Box.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chapter04.MyNestedBox.NumbericBox.UInt64Box.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chapter04.MyNestedBox.NumbericBox.UInt64Box.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chapter04.MyNestedBox.NumbericBox.UInt64Box} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chapter04.MyNestedBox.NumbericBox.UInt64Box.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVal();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 val = 1;
 * @return {number}
 */
proto.chapter04.MyNestedBox.NumbericBox.UInt64Box.prototype.getVal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.chapter04.MyNestedBox.NumbericBox.UInt64Box} returns this
 */
proto.chapter04.MyNestedBox.NumbericBox.UInt64Box.prototype.setVal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.chapter04.MyUnionBox.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.chapter04.MyUnionBox.OneofCase = {
  ONEOF_NOT_SET: 0,
  ONEOF_UINT32: 1,
  ONEOF_STRING: 2
};

/**
 * @return {proto.chapter04.MyUnionBox.OneofCase}
 */
proto.chapter04.MyUnionBox.prototype.getOneofCase = function() {
  return /** @type {proto.chapter04.MyUnionBox.OneofCase} */(jspb.Message.computeOneofCase(this, proto.chapter04.MyUnionBox.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chapter04.MyUnionBox.prototype.toObject = function(opt_includeInstance) {
  return proto.chapter04.MyUnionBox.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chapter04.MyUnionBox} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chapter04.MyUnionBox.toObject = function(includeInstance, msg) {
  var f, obj = {
    oneofUint32: jspb.Message.getFieldWithDefault(msg, 1, 0),
    oneofString: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chapter04.MyUnionBox}
 */
proto.chapter04.MyUnionBox.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chapter04.MyUnionBox;
  return proto.chapter04.MyUnionBox.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chapter04.MyUnionBox} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chapter04.MyUnionBox}
 */
proto.chapter04.MyUnionBox.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOneofUint32(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOneofString(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chapter04.MyUnionBox.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chapter04.MyUnionBox.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chapter04.MyUnionBox} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chapter04.MyUnionBox.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 oneof_uint32 = 1;
 * @return {number}
 */
proto.chapter04.MyUnionBox.prototype.getOneofUint32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.chapter04.MyUnionBox} returns this
 */
proto.chapter04.MyUnionBox.prototype.setOneofUint32 = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.chapter04.MyUnionBox.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.chapter04.MyUnionBox} returns this
 */
proto.chapter04.MyUnionBox.prototype.clearOneofUint32 = function() {
  return jspb.Message.setOneofField(this, 1, proto.chapter04.MyUnionBox.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.chapter04.MyUnionBox.prototype.hasOneofUint32 = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string oneof_string = 2;
 * @return {string}
 */
proto.chapter04.MyUnionBox.prototype.getOneofString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chapter04.MyUnionBox} returns this
 */
proto.chapter04.MyUnionBox.prototype.setOneofString = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.chapter04.MyUnionBox.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.chapter04.MyUnionBox} returns this
 */
proto.chapter04.MyUnionBox.prototype.clearOneofString = function() {
  return jspb.Message.setOneofField(this, 2, proto.chapter04.MyUnionBox.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.chapter04.MyUnionBox.prototype.hasOneofString = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chapter04.EchoObject.prototype.toObject = function(opt_includeInstance) {
  return proto.chapter04.EchoObject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chapter04.EchoObject} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chapter04.EchoObject.toObject = function(includeInstance, msg) {
  var f, obj = {
    uint32box: (f = msg.getUint32box()) && proto.chapter04.MyNestedBox.NumbericBox.UInt32Box.toObject(includeInstance, f),
    unionbox: (f = msg.getUnionbox()) && proto.chapter04.MyUnionBox.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chapter04.EchoObject}
 */
proto.chapter04.EchoObject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chapter04.EchoObject;
  return proto.chapter04.EchoObject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chapter04.EchoObject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chapter04.EchoObject}
 */
proto.chapter04.EchoObject.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.chapter04.MyNestedBox.NumbericBox.UInt32Box;
      reader.readMessage(value,proto.chapter04.MyNestedBox.NumbericBox.UInt32Box.deserializeBinaryFromReader);
      msg.setUint32box(value);
      break;
    case 2:
      var value = new proto.chapter04.MyUnionBox;
      reader.readMessage(value,proto.chapter04.MyUnionBox.deserializeBinaryFromReader);
      msg.setUnionbox(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chapter04.EchoObject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chapter04.EchoObject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chapter04.EchoObject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chapter04.EchoObject.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUint32box();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.chapter04.MyNestedBox.NumbericBox.UInt32Box.serializeBinaryToWriter
    );
  }
  f = message.getUnionbox();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.chapter04.MyUnionBox.serializeBinaryToWriter
    );
  }
};


/**
 * optional MyNestedBox.NumbericBox.UInt32Box uint32box = 1;
 * @return {?proto.chapter04.MyNestedBox.NumbericBox.UInt32Box}
 */
proto.chapter04.EchoObject.prototype.getUint32box = function() {
  return /** @type{?proto.chapter04.MyNestedBox.NumbericBox.UInt32Box} */ (
    jspb.Message.getWrapperField(this, proto.chapter04.MyNestedBox.NumbericBox.UInt32Box, 1));
};


/**
 * @param {?proto.chapter04.MyNestedBox.NumbericBox.UInt32Box|undefined} value
 * @return {!proto.chapter04.EchoObject} returns this
*/
proto.chapter04.EchoObject.prototype.setUint32box = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.chapter04.EchoObject} returns this
 */
proto.chapter04.EchoObject.prototype.clearUint32box = function() {
  return this.setUint32box(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.chapter04.EchoObject.prototype.hasUint32box = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MyUnionBox unionBox = 2;
 * @return {?proto.chapter04.MyUnionBox}
 */
proto.chapter04.EchoObject.prototype.getUnionbox = function() {
  return /** @type{?proto.chapter04.MyUnionBox} */ (
    jspb.Message.getWrapperField(this, proto.chapter04.MyUnionBox, 2));
};


/**
 * @param {?proto.chapter04.MyUnionBox|undefined} value
 * @return {!proto.chapter04.EchoObject} returns this
*/
proto.chapter04.EchoObject.prototype.setUnionbox = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.chapter04.EchoObject} returns this
 */
proto.chapter04.EchoObject.prototype.clearUnionbox = function() {
  return this.setUnionbox(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.chapter04.EchoObject.prototype.hasUnionbox = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.chapter04);
