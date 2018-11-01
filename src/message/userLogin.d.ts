import * as $protobuf from "protobufjs";
/** Namespace userlogin. */
export namespace userlogin {

    /** Properties of a userLogin. */
    interface IuserLogin {

        /** userLogin userName */
        userName: string;

        /** userLogin userPwd */
        userPwd: string;
    }

    /** Represents a userLogin. */
    class userLogin implements IuserLogin {

        /**
         * Constructs a new userLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: userlogin.IuserLogin);

        /** userLogin userName. */
        public userName: string;

        /** userLogin userPwd. */
        public userPwd: string;

        /**
         * Creates a new userLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns userLogin instance
         */
        public static create(properties?: userlogin.IuserLogin): userlogin.userLogin;

        /**
         * Encodes the specified userLogin message. Does not implicitly {@link userlogin.userLogin.verify|verify} messages.
         * @param message userLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: userlogin.IuserLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified userLogin message, length delimited. Does not implicitly {@link userlogin.userLogin.verify|verify} messages.
         * @param message userLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: userlogin.IuserLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a userLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns userLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): userlogin.userLogin;

        /**
         * Decodes a userLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns userLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): userlogin.userLogin;

        /**
         * Verifies a userLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a userLogin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns userLogin
         */
        public static fromObject(object: { [k: string]: any }): userlogin.userLogin;

        /**
         * Creates a plain object from a userLogin message. Also converts values to other types if specified.
         * @param message userLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: userlogin.userLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this userLogin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
