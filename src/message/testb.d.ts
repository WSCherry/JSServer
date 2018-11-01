import * as $protobuf from "protobufjs";
/** Namespace peoplepackage. */
export namespace peoplepackage {

    /** Properties of a peopleMessage. */
    interface IpeopleMessage {

        /** peopleMessage name */
        name: string;

        /** peopleMessage age */
        age: number;
    }

    /** Represents a peopleMessage. */
    class peopleMessage implements IpeopleMessage {

        /**
         * Constructs a new peopleMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: peoplepackage.IpeopleMessage);

        /** peopleMessage name. */
        public name: string;

        /** peopleMessage age. */
        public age: number;

        /**
         * Creates a new peopleMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns peopleMessage instance
         */
        public static create(properties?: peoplepackage.IpeopleMessage): peoplepackage.peopleMessage;

        /**
         * Encodes the specified peopleMessage message. Does not implicitly {@link peoplepackage.peopleMessage.verify|verify} messages.
         * @param message peopleMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: peoplepackage.IpeopleMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified peopleMessage message, length delimited. Does not implicitly {@link peoplepackage.peopleMessage.verify|verify} messages.
         * @param message peopleMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: peoplepackage.IpeopleMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a peopleMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns peopleMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): peoplepackage.peopleMessage;

        /**
         * Decodes a peopleMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns peopleMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): peoplepackage.peopleMessage;

        /**
         * Verifies a peopleMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a peopleMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns peopleMessage
         */
        public static fromObject(object: { [k: string]: any }): peoplepackage.peopleMessage;

        /**
         * Creates a plain object from a peopleMessage message. Also converts values to other types if specified.
         * @param message peopleMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: peoplepackage.peopleMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this peopleMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
