// source: arrakisapi/api/namespace_service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var arrakisapi_api_core_pb = require('../../arrakisapi/api/core_pb.js');
goog.object.extend(proto, arrakisapi_api_core_pb);
var arrakisapi_api_namespace_pb = require('../../arrakisapi/api/namespace_pb.js');
goog.object.extend(proto, arrakisapi_api_namespace_pb);
goog.exportSymbol('proto.ReadConfigRequest', null, global);
goog.exportSymbol('proto.ReadConfigResponse', null, global);
goog.exportSymbol('proto.WriteConfigRequest', null, global);
goog.exportSymbol('proto.WriteConfigResponse', null, global);
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
proto.ReadConfigRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ReadConfigRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ReadConfigRequest.displayName = 'proto.ReadConfigRequest';
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
proto.ReadConfigResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ReadConfigResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ReadConfigResponse.displayName = 'proto.ReadConfigResponse';
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
proto.WriteConfigRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.WriteConfigRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.WriteConfigRequest.displayName = 'proto.WriteConfigRequest';
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
proto.WriteConfigResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.WriteConfigResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.WriteConfigResponse.displayName = 'proto.WriteConfigResponse';
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
proto.ReadConfigRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ReadConfigRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ReadConfigRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ReadConfigRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    atRevision: (f = msg.getAtRevision()) && arrakisapi_api_core_pb.Zookie.toObject(includeInstance, f)
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
 * @return {!proto.ReadConfigRequest}
 */
proto.ReadConfigRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ReadConfigRequest;
  return proto.ReadConfigRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ReadConfigRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ReadConfigRequest}
 */
proto.ReadConfigRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = new arrakisapi_api_core_pb.Zookie;
      reader.readMessage(value,arrakisapi_api_core_pb.Zookie.deserializeBinaryFromReader);
      msg.setAtRevision(value);
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
proto.ReadConfigRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ReadConfigRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ReadConfigRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ReadConfigRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAtRevision();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      arrakisapi_api_core_pb.Zookie.serializeBinaryToWriter
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.ReadConfigRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ReadConfigRequest} returns this
 */
proto.ReadConfigRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Zookie at_revision = 2;
 * @return {?proto.Zookie}
 */
proto.ReadConfigRequest.prototype.getAtRevision = function() {
  return /** @type{?proto.Zookie} */ (
    jspb.Message.getWrapperField(this, arrakisapi_api_core_pb.Zookie, 2));
};


/**
 * @param {?proto.Zookie|undefined} value
 * @return {!proto.ReadConfigRequest} returns this
*/
proto.ReadConfigRequest.prototype.setAtRevision = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ReadConfigRequest} returns this
 */
proto.ReadConfigRequest.prototype.clearAtRevision = function() {
  return this.setAtRevision(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ReadConfigRequest.prototype.hasAtRevision = function() {
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
proto.ReadConfigResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ReadConfigResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ReadConfigResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ReadConfigResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    config: (f = msg.getConfig()) && arrakisapi_api_namespace_pb.NamespaceDefinition.toObject(includeInstance, f),
    revision: (f = msg.getRevision()) && arrakisapi_api_core_pb.Zookie.toObject(includeInstance, f)
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
 * @return {!proto.ReadConfigResponse}
 */
proto.ReadConfigResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ReadConfigResponse;
  return proto.ReadConfigResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ReadConfigResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ReadConfigResponse}
 */
proto.ReadConfigResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = new arrakisapi_api_namespace_pb.NamespaceDefinition;
      reader.readMessage(value,arrakisapi_api_namespace_pb.NamespaceDefinition.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 4:
      var value = new arrakisapi_api_core_pb.Zookie;
      reader.readMessage(value,arrakisapi_api_core_pb.Zookie.deserializeBinaryFromReader);
      msg.setRevision(value);
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
proto.ReadConfigResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ReadConfigResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ReadConfigResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ReadConfigResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      arrakisapi_api_namespace_pb.NamespaceDefinition.serializeBinaryToWriter
    );
  }
  f = message.getRevision();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      arrakisapi_api_core_pb.Zookie.serializeBinaryToWriter
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.ReadConfigResponse.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ReadConfigResponse} returns this
 */
proto.ReadConfigResponse.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional NamespaceDefinition config = 2;
 * @return {?proto.NamespaceDefinition}
 */
proto.ReadConfigResponse.prototype.getConfig = function() {
  return /** @type{?proto.NamespaceDefinition} */ (
    jspb.Message.getWrapperField(this, arrakisapi_api_namespace_pb.NamespaceDefinition, 2));
};


/**
 * @param {?proto.NamespaceDefinition|undefined} value
 * @return {!proto.ReadConfigResponse} returns this
*/
proto.ReadConfigResponse.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ReadConfigResponse} returns this
 */
proto.ReadConfigResponse.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ReadConfigResponse.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Zookie revision = 4;
 * @return {?proto.Zookie}
 */
proto.ReadConfigResponse.prototype.getRevision = function() {
  return /** @type{?proto.Zookie} */ (
    jspb.Message.getWrapperField(this, arrakisapi_api_core_pb.Zookie, 4));
};


/**
 * @param {?proto.Zookie|undefined} value
 * @return {!proto.ReadConfigResponse} returns this
*/
proto.ReadConfigResponse.prototype.setRevision = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ReadConfigResponse} returns this
 */
proto.ReadConfigResponse.prototype.clearRevision = function() {
  return this.setRevision(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ReadConfigResponse.prototype.hasRevision = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.WriteConfigRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.WriteConfigRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.WriteConfigRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WriteConfigRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && arrakisapi_api_namespace_pb.NamespaceDefinition.toObject(includeInstance, f)
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
 * @return {!proto.WriteConfigRequest}
 */
proto.WriteConfigRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.WriteConfigRequest;
  return proto.WriteConfigRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.WriteConfigRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.WriteConfigRequest}
 */
proto.WriteConfigRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new arrakisapi_api_namespace_pb.NamespaceDefinition;
      reader.readMessage(value,arrakisapi_api_namespace_pb.NamespaceDefinition.deserializeBinaryFromReader);
      msg.setConfig(value);
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
proto.WriteConfigRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.WriteConfigRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.WriteConfigRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WriteConfigRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      arrakisapi_api_namespace_pb.NamespaceDefinition.serializeBinaryToWriter
    );
  }
};


/**
 * optional NamespaceDefinition config = 2;
 * @return {?proto.NamespaceDefinition}
 */
proto.WriteConfigRequest.prototype.getConfig = function() {
  return /** @type{?proto.NamespaceDefinition} */ (
    jspb.Message.getWrapperField(this, arrakisapi_api_namespace_pb.NamespaceDefinition, 2));
};


/**
 * @param {?proto.NamespaceDefinition|undefined} value
 * @return {!proto.WriteConfigRequest} returns this
*/
proto.WriteConfigRequest.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.WriteConfigRequest} returns this
 */
proto.WriteConfigRequest.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WriteConfigRequest.prototype.hasConfig = function() {
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
proto.WriteConfigResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.WriteConfigResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.WriteConfigResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WriteConfigResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    revision: (f = msg.getRevision()) && arrakisapi_api_core_pb.Zookie.toObject(includeInstance, f)
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
 * @return {!proto.WriteConfigResponse}
 */
proto.WriteConfigResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.WriteConfigResponse;
  return proto.WriteConfigResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.WriteConfigResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.WriteConfigResponse}
 */
proto.WriteConfigResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new arrakisapi_api_core_pb.Zookie;
      reader.readMessage(value,arrakisapi_api_core_pb.Zookie.deserializeBinaryFromReader);
      msg.setRevision(value);
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
proto.WriteConfigResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.WriteConfigResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.WriteConfigResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WriteConfigResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRevision();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      arrakisapi_api_core_pb.Zookie.serializeBinaryToWriter
    );
  }
};


/**
 * optional Zookie revision = 1;
 * @return {?proto.Zookie}
 */
proto.WriteConfigResponse.prototype.getRevision = function() {
  return /** @type{?proto.Zookie} */ (
    jspb.Message.getWrapperField(this, arrakisapi_api_core_pb.Zookie, 1));
};


/**
 * @param {?proto.Zookie|undefined} value
 * @return {!proto.WriteConfigResponse} returns this
*/
proto.WriteConfigResponse.prototype.setRevision = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.WriteConfigResponse} returns this
 */
proto.WriteConfigResponse.prototype.clearRevision = function() {
  return this.setRevision(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WriteConfigResponse.prototype.hasRevision = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto);
