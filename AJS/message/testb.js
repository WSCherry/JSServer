/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.peoplepackage = (function() {

    /**
     * Namespace peoplepackage.
     * @exports peoplepackage
     * @namespace
     */
    var peoplepackage = {};

    peoplepackage.peopleMessage = (function() {

        /**
         * Properties of a peopleMessage.
         * @memberof peoplepackage
         * @interface IpeopleMessage
         * @property {string} name peopleMessage name
         * @property {number} age peopleMessage age
         */

        /**
         * Constructs a new peopleMessage.
         * @memberof peoplepackage
         * @classdesc Represents a peopleMessage.
         * @implements IpeopleMessage
         * @constructor
         * @param {peoplepackage.IpeopleMessage=} [properties] Properties to set
         */
        function peopleMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * peopleMessage name.
         * @member {string} name
         * @memberof peoplepackage.peopleMessage
         * @instance
         */
        peopleMessage.prototype.name = "";

        /**
         * peopleMessage age.
         * @member {number} age
         * @memberof peoplepackage.peopleMessage
         * @instance
         */
        peopleMessage.prototype.age = 0;

        /**
         * Creates a new peopleMessage instance using the specified properties.
         * @function create
         * @memberof peoplepackage.peopleMessage
         * @static
         * @param {peoplepackage.IpeopleMessage=} [properties] Properties to set
         * @returns {peoplepackage.peopleMessage} peopleMessage instance
         */
        peopleMessage.create = function create(properties) {
            return new peopleMessage(properties);
        };

        /**
         * Encodes the specified peopleMessage message. Does not implicitly {@link peoplepackage.peopleMessage.verify|verify} messages.
         * @function encode
         * @memberof peoplepackage.peopleMessage
         * @static
         * @param {peoplepackage.IpeopleMessage} message peopleMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        peopleMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.age);
            return writer;
        };

        /**
         * Encodes the specified peopleMessage message, length delimited. Does not implicitly {@link peoplepackage.peopleMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof peoplepackage.peopleMessage
         * @static
         * @param {peoplepackage.IpeopleMessage} message peopleMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        peopleMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a peopleMessage message from the specified reader or buffer.
         * @function decode
         * @memberof peoplepackage.peopleMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {peoplepackage.peopleMessage} peopleMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        peopleMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.peoplepackage.peopleMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.age = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("age"))
                throw $util.ProtocolError("missing required 'age'", { instance: message });
            return message;
        };

        /**
         * Decodes a peopleMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof peoplepackage.peopleMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {peoplepackage.peopleMessage} peopleMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        peopleMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a peopleMessage message.
         * @function verify
         * @memberof peoplepackage.peopleMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        peopleMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isInteger(message.age))
                return "age: integer expected";
            return null;
        };

        /**
         * Creates a peopleMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof peoplepackage.peopleMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {peoplepackage.peopleMessage} peopleMessage
         */
        peopleMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.peoplepackage.peopleMessage)
                return object;
            var message = new $root.peoplepackage.peopleMessage();
            if (object.name != null)
                message.name = String(object.name);
            if (object.age != null)
                message.age = object.age >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a peopleMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof peoplepackage.peopleMessage
         * @static
         * @param {peoplepackage.peopleMessage} message peopleMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        peopleMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.age = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.age != null && message.hasOwnProperty("age"))
                object.age = message.age;
            return object;
        };

        /**
         * Converts this peopleMessage to JSON.
         * @function toJSON
         * @memberof peoplepackage.peopleMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        peopleMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return peopleMessage;
    })();

    return peoplepackage;
})();

module.exports = $root;
