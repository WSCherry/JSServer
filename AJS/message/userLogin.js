/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.userlogin = (function() {

    /**
     * Namespace userlogin.
     * @exports userlogin
     * @namespace
     */
    var userlogin = {};

    userlogin.userLogin = (function() {

        /**
         * Properties of a userLogin.
         * @memberof userlogin
         * @interface IuserLogin
         * @property {string} userName userLogin userName
         * @property {string} userPwd userLogin userPwd
         */

        /**
         * Constructs a new userLogin.
         * @memberof userlogin
         * @classdesc Represents a userLogin.
         * @implements IuserLogin
         * @constructor
         * @param {userlogin.IuserLogin=} [properties] Properties to set
         */
        function userLogin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * userLogin userName.
         * @member {string} userName
         * @memberof userlogin.userLogin
         * @instance
         */
        userLogin.prototype.userName = "";

        /**
         * userLogin userPwd.
         * @member {string} userPwd
         * @memberof userlogin.userLogin
         * @instance
         */
        userLogin.prototype.userPwd = "";

        /**
         * Creates a new userLogin instance using the specified properties.
         * @function create
         * @memberof userlogin.userLogin
         * @static
         * @param {userlogin.IuserLogin=} [properties] Properties to set
         * @returns {userlogin.userLogin} userLogin instance
         */
        userLogin.create = function create(properties) {
            return new userLogin(properties);
        };

        /**
         * Encodes the specified userLogin message. Does not implicitly {@link userlogin.userLogin.verify|verify} messages.
         * @function encode
         * @memberof userlogin.userLogin
         * @static
         * @param {userlogin.IuserLogin} message userLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        userLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userName);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.userPwd);
            return writer;
        };

        /**
         * Encodes the specified userLogin message, length delimited. Does not implicitly {@link userlogin.userLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof userlogin.userLogin
         * @static
         * @param {userlogin.IuserLogin} message userLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        userLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a userLogin message from the specified reader or buffer.
         * @function decode
         * @memberof userlogin.userLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {userlogin.userLogin} userLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        userLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.userlogin.userLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userName = reader.string();
                    break;
                case 2:
                    message.userPwd = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userName"))
                throw $util.ProtocolError("missing required 'userName'", { instance: message });
            if (!message.hasOwnProperty("userPwd"))
                throw $util.ProtocolError("missing required 'userPwd'", { instance: message });
            return message;
        };

        /**
         * Decodes a userLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof userlogin.userLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {userlogin.userLogin} userLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        userLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a userLogin message.
         * @function verify
         * @memberof userlogin.userLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        userLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.userName))
                return "userName: string expected";
            if (!$util.isString(message.userPwd))
                return "userPwd: string expected";
            return null;
        };

        /**
         * Creates a userLogin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof userlogin.userLogin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {userlogin.userLogin} userLogin
         */
        userLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.userlogin.userLogin)
                return object;
            var message = new $root.userlogin.userLogin();
            if (object.userName != null)
                message.userName = String(object.userName);
            if (object.userPwd != null)
                message.userPwd = String(object.userPwd);
            return message;
        };

        /**
         * Creates a plain object from a userLogin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof userlogin.userLogin
         * @static
         * @param {userlogin.userLogin} message userLogin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        userLogin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userName = "";
                object.userPwd = "";
            }
            if (message.userName != null && message.hasOwnProperty("userName"))
                object.userName = message.userName;
            if (message.userPwd != null && message.hasOwnProperty("userPwd"))
                object.userPwd = message.userPwd;
            return object;
        };

        /**
         * Converts this userLogin to JSON.
         * @function toJSON
         * @memberof userlogin.userLogin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        userLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return userLogin;
    })();

    return userlogin;
})();

module.exports = $root;
